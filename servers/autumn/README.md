# Autumn MCP by usefulapi

Read your Autumn customers, features, plans, balances and invoices — and create customers, track usage or attach plans — from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Autumn API key.

**Live endpoint:** `https://autumn.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/autumn

## Add to Claude

```json
{
  "mcpServers": {
    "autumn": {
      "url": "https://autumn.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Autumn API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `autumn_get_customer` | read | Get customer |
| `autumn_list_customers` | read | List customers |
| `autumn_check` | read | Check |
| `autumn_list_invoices` | read | List invoices |
| `autumn_get_entity` | read | Get entity |
| `autumn_list_entities` | read | List entities |
| `autumn_list_features` | read | List features |
| `autumn_get_feature` | read | Get feature |
| `autumn_list_plans` | read | List plans |
| `autumn_get_plan` | read | Get plan |
| `autumn_preview_attach` | read | Preview attach |
| `autumn_request` | read | Request |
| `autumn_get_or_create_customer` | **write** | Get or create customer |
| `autumn_update_customer` | **write** | Update customer |
| `autumn_track_usage` | **write** | Track usage |
| `autumn_attach_plan` | **write** | Attach plan |
| `autumn_create_entity` | **write** | Create entity |
| `autumn_open_customer_portal` | **write** | Open customer portal |
| `autumn_usage_status` | meta | Usage status (free-tier meter) |
| `autumn_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
