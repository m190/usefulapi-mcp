import { PAGE_SIZE, cardsHtml, directoryHref, escapeHtml, paginate, paginationHtml, selectServers, staticPagePath } from "/catalog-model.mjs";

const form = document.querySelector(".search-form");
const search = document.getElementById("search");
const category = document.getElementById("category");
const sort = document.getElementById("sort");
const count = document.getElementById("count");
const results = document.getElementById("results");
const pagination = document.getElementById("pagination");
const error = document.getElementById("catalog-error");
const canonical = document.querySelector('link[rel="canonical"]');
const siteOrigin = new URL(canonical.href).origin;
const initialCount = count.textContent;

function readState() {
  const params = new URLSearchParams(location.search);
  const pathPage = location.pathname.match(/^\/servers\/page\/(\d+)\/$/);
  return { q: params.get("q") || "", category: params.get("category") || "",
    sort: params.get("sort") || (params.get("q") ? "relevance" : "name"), page: params.get("page") || pathPage?.[1] || 1 };
}
let state = readState();
search.value = state.q;
category.value = state.category;
sort.value = state.sort;
results.setAttribute("aria-busy", "true");
if (state.q || state.category) count.textContent = "Searching all integrations…";

fetch("/search-index.json").then((response) => {
  if (!response.ok) throw new Error("Search index unavailable");
  return response.json();
}).then((index) => {
  if (!Array.isArray(index.servers)) throw new Error("Invalid search index");
  // Include edits made while the index was loading, before listeners were attached.
  if (search.value.trim() !== state.q || category.value !== state.category || sort.value !== state.sort) state.page = 1;
  if (search.value.trim() !== state.q && sort.value === "name") sort.value = "relevance";
  state.q = search.value.trim(); state.category = category.value; state.sort = sort.value;
  if (!index.groups.some((group) => group.name === state.category)) state.category = "";
  if (!["name", "category", "relevance"].includes(state.sort)) state.sort = state.q ? "relevance" : "name";
  category.value = state.category;
  sort.value = state.sort;

  function render() {
    const matches = selectServers(index.servers, state);
    const slice = paginate(matches, state.page);
    state.page = slice.page;
    document.getElementById("results-heading").textContent = state.q ? "Search results" : state.category || "All integrations";
    count.textContent = slice.total ? `${(slice.page - 1) * PAGE_SIZE + 1}–${Math.min(slice.page * PAGE_SIZE, slice.total)} of ${slice.total} integrations${state.q ? ` matching “${state.q}”` : ""}` : "No matching integrations";
    results.innerHTML = slice.total ? cardsHtml(slice.items) : `<div class="empty"><p>No integrations match <strong>${escapeHtml(state.q || state.category)}</strong>${state.q && state.category ? ` in ${escapeHtml(state.category)}` : ""}.</p><p><a href="/servers/">Clear search and filters</a></p><p>Need something built? <a href="/services/">See custom integrations →</a></p></div>`;
    pagination.innerHTML = paginationHtml(slice, state);
    results.removeAttribute("aria-busy");
    canonical.href = `${siteOrigin}${state.q || state.category || state.sort !== "name" ? "/servers/" : staticPagePath(slice.page)}`;
  }

  function update({ push = false, focusResults = false } = {}) {
    state.q = search.value.trim(); state.category = category.value; state.sort = sort.value;
    render();
    history[push ? "pushState" : "replaceState"](null, "", directoryHref(state));
    if (focusResults) {
      const heading = document.getElementById("results-heading");
      heading.tabIndex = -1; heading.focus({ preventScroll: true }); heading.scrollIntoView({ block: "start" });
    }
  }

  form.addEventListener("submit", (event) => { event.preventDefault(); state.page = 1; update(); });
  search.addEventListener("input", () => { state.page = 1; if (!state.q && sort.value === "name" && search.value.trim()) sort.value = "relevance"; update(); });
  category.addEventListener("change", () => { state.page = 1; update(); });
  sort.addEventListener("change", () => { state.page = 1; update(); });
  pagination.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-page]");
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault(); state.page = Number(link.dataset.page); update({ push: true, focusResults: true });
  });
  window.addEventListener("popstate", () => {
    state = readState(); search.value = state.q; category.value = state.category; sort.value = state.sort; render();
  });
  // Preserve the static HTML until the complete index is available.
  update();
}).catch(() => {
  results.removeAttribute("aria-busy");
  count.textContent = initialCount;
  error.innerHTML = 'Search could not load. <a href="">Try again</a>, or <a href="/#categories">browse by category</a>. You can still use the directory page links below.';
});
