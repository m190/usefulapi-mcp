// The plans that every server shares (the /pricing/ page). Throws if the servers' plans differ in name, price or
// limit; the billing unit (`scope`) may differ, because each product page states its own.
export function sharedPlans(servers) {
  const key = (s) => JSON.stringify((s.pricing || []).map(({ plan, limit, monthly, yearly }) => ({ plan, limit, monthly, yearly })));
  const keys = new Set(servers.map(key));
  if (keys.size !== 1) throw new Error(`/pricing/ needs one shared plan list, but the manifest has ${keys.size} different ones`);
  const find = (re) => (servers[0].pricing || []).find((p) => re.test(p.plan));
  const ft = find(/^free$/i), pt = find(/^pro$/i), plus = find(/^pro\+$/i);
  if (!ft || !pt || !plus) throw new Error("/pricing/ needs Free, Pro and Pro+ plans in the manifest");
  return { ft, pt, plus };
}
