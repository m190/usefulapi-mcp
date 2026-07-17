# Customer.io MCP by usefulapi

Manage your Customer.io people, segments, campaigns, and messaging from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Customer.io API credentials.

**Live endpoint:** `https://customerio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/customerio

## Add to Claude

```json
{
  "mcpServers": {
    "customerio": {
      "url": "https://customerio.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Customer.io API key(s). It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `customerio_search_customers` | read | Search customers |
| `customerio_get_customer_attributes` | read | Get customer attributes |
| `customerio_get_customer_segments` | read | Get customer segments |
| `customerio_get_customer_messages` | read | Get customer messages |
| `customerio_list_segments` | read | List segments |
| `customerio_list_campaigns` | read | List campaigns |
| `customerio_get_campaign` | read | Get campaign |
| `customerio_get_campaign_metrics` | read | Get campaign metrics |
| `customerio_list_messages` | read | List messages |
| `customerio_list_exports` | read | List exports |
| `customerio_list_collections` | read | List collections |
| `customerio_send_transactional_email` | **write** | Send transactional email |
| `customerio_trigger_broadcast` | **write** | Trigger broadcast |
| `customerio_usage_status` | meta | Usage status (free-tier meter) |
| `customerio_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
