# SavvyCal MCP by usefulapi

Read and create SavvyCal scheduling links and booked events. Hosted, no local install.

**Live endpoint:** `https://savvycal.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "savvycal": {
      "url": "https://savvycal.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **SavvyCal credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `savvycal_list_links` | read | List links |
| `savvycal_get_link` | read | Get link |
| `savvycal_get_link_slots` | read | Get link slots |
| `savvycal_list_events` | read | List events |
| `savvycal_get_event` | read | Get event |
| `savvycal_toggle_link` | **write** | Toggle link |
| `savvycal_duplicate_link` | **write** | Duplicate link |
| `savvycal_cancel_event` | **write** | Cancel event |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
