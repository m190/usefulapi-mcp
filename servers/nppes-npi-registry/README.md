# NPPES NPI Registry MCP by usefulapi

Look up US healthcare providers and organisations by NPI. Hosted, no local install.

**Live endpoint:** `https://nppes-npi-registry.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "nppes-npi-registry": {
      "url": "https://nppes-npi-registry.usefulapi.io/mcp"
    }
  }
}
```

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
