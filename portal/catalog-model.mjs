// Shared by the static build and the browser so cards, links and page boundaries agree.
export const PAGE_SIZE = 24;
export const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
export const normalize = (value) => String(value ?? "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
export const staticPagePath = (page) => page > 1 ? `/servers/page/${page}/` : "/servers/";
const categoryLabel = (category) => ({ crm: "CRM", "ai-infra": "AI infrastructure", devops: "DevOps", dns: "DNS", paas: "PaaS" })[category] || category.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase());

export function directoryHref({ q = "", category = "", sort = "name", page = 1 } = {}) {
  if (!q && !category && sort === "name") return staticPagePath(page);
  const params = new URLSearchParams();
  if (q) params.set("q", q);
  if (category) params.set("category", category);
  if (sort !== "name") params.set("sort", sort);
  if (page > 1) params.set("page", page);
  return `/servers/?${params}`;
}

export function selectServers(servers, { q = "", category = "", sort = "name" } = {}) {
  const query = normalize(q), words = query.split(" ").filter(Boolean);
  const rank = (s) => {
    const name = normalize(s.name);
    if (name === query) return 0;
    if (name.startsWith(query)) return 1;
    if (name.includes(query)) return 2;
    if (words.every((w) => normalize(`${s.name} ${s.description}`).includes(w))) return 3;
    return 4;
  };
  return servers.filter((s) => (!category || s.group === category) &&
    (!query || words.every((word) => normalize(`${s.name} ${s.slug} ${s.description} ${s.category} ${s.group} ${s.keywords || ""}`).includes(word))))
    .sort((a, b) => (sort === "relevance" && query ? rank(a) - rank(b) : 0) ||
      (sort === "category" ? a.group.localeCompare(b.group) : 0) || a.name.localeCompare(b.name) || a.slug.localeCompare(b.slug));
}

export function paginate(servers, requestedPage = 1) {
  const pages = Math.max(1, Math.ceil(servers.length / PAGE_SIZE));
  const page = Math.min(pages, Math.max(1, Math.floor(Number(requestedPage)) || 1));
  return { page, pages, total: servers.length, items: servers.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE) };
}

// Card tag = browse group (same names as the category links); meta = tool count + free tier.
export function cardsHtml(servers) {
  return `<div class="grid">${servers.map((s) => {
    const meta = [s.toolCount ? `${s.toolCount} tools` : "", s.free || ""].filter(Boolean).join(" · ");
    return `<a class="card" href="/${escapeHtml(s.slug)}/"><h3>${escapeHtml(s.name)}</h3><p>${escapeHtml(s.description)}</p>` +
      `<span class="card-foot"><span class="category">${escapeHtml(s.group || categoryLabel(s.category || ""))}</span>${meta ? `<span class="meta">${escapeHtml(meta)}</span>` : ""}</span></a>`;
  }).join("")}</div>`;
}

export function paginationHtml({ page, pages }, state = {}) {
  if (pages <= 1) return "";
  const link = (n, label, extra = "") => `<a href="${escapeHtml(directoryHref({ ...state, page: n }))}" data-page="${n}"${extra}>${label}</a>`;
  const visible = new Set([1, pages, page - 1, page, page + 1].filter((n) => n > 0 && n <= pages));
  const links = [];
  if (page > 1) links.push(link(page - 1, "← Previous", ' rel="prev"'));
  let previous = 0;
  for (const n of [...visible].sort((a, b) => a - b)) {
    if (previous && n - previous > 1) links.push('<span aria-hidden="true">…</span>');
    links.push(link(n, n, n === page ? ' aria-current="page" aria-label="Page ' + n + ', current page"' : ' aria-label="Page ' + n + '"'));
    previous = n;
  }
  if (page < pages) links.push(link(page + 1, "Next →", ' rel="next"'));
  return links.join("");
}
