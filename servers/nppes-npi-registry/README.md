# NPPES NPI Registry MCP by usefulapi

Look up US healthcare providers and organisations by NPI. Hosted, no local install.

**Live endpoint:** `https://nppes-npi-registry.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://nppes-npi-registry.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http nppes-npi-registry https://nppes-npi-registry.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=nppes-npi-registry&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fnppes-npi-registry.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "nppes-npi-registry": {
      "url": "https://nppes-npi-registry.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/nppes-npi-registry/

<!-- connect:end (generated above, edit below) -->

This server needs **no credential** — NPPES NPI Registry is a public data source. On first
connect you log in with your email: we send a 6-digit code from `login@usefulapi.io`. The address
is used only to send the code; we keep a one-way hash of it as your account id, so your free calls
and your plan stay yours.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `nppes_lookup_npi` | read | Look up a provider by NPI number |
| `nppes_search_individuals` | read | Search individual providers |
| `nppes_search_organizations` | read | Search organization providers |
| `nppes_search` | read | Search the NPI registry (all criteria) |
| `nppes_npi_registry_usage_status` | meta | Usage status (free-tier meter) |
| `nppes_npi_registry_upgrade` | meta | Upgrade to Pro (unlimited) |
| `nppes_npi_registry_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `nppes_npi_registry_upgrade` (it returns a Stripe Checkout link). Cancel any time with `nppes_npi_registry_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `nppes_npi_registry_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
