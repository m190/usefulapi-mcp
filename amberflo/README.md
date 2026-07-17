# Amberflo MCP by usefulapi

Read customers, meters, usage, plans and invoices — and create customers, assign plans or ingest usage events — from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Amberflo API key.

**Live endpoint:** `https://amberflo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/amberflo

## Add to Claude

```json
{
  "mcpServers": {
    "amberflo": {
      "url": "https://amberflo.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Amberflo API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `amberflo_list_customers` | read | List customers |
| `amberflo_get_customer` | read | Get customer |
| `amberflo_list_meters` | read | List meters |
| `amberflo_get_usage` | read | Get usage |
| `amberflo_get_all_usage` | read | Get all usage |
| `amberflo_explain_usage` | read | Explain usage |
| `amberflo_get_customer_plan` | read | Get customer plan |
| `amberflo_list_customer_plan_history` | read | List customer plan history |
| `amberflo_list_customer_invoices` | read | List customer invoices |
| `amberflo_get_customer_invoice` | read | Get customer invoice |
| `amberflo_list_prepaid_orders` | read | List prepaid orders |
| `amberflo_create_customer` | **write** | Create customer |
| `amberflo_assign_customer_plan` | **write** | Assign customer plan |
| `amberflo_ingest_usage` | **write** | Ingest usage |
| `amberflo_usage_status` | meta | Usage status (free-tier meter) |
| `amberflo_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
