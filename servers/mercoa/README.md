# Mercoa MCP by usefulapi

Query and manage Mercoa AP/AR bill-pay — entities, invoices, transactions and payment methods — from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Mercoa API key.

**Live endpoint:** `https://mercoa.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/mercoa

## Add to Claude

```json
{
  "mcpServers": {
    "mercoa": {
      "url": "https://mercoa.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Mercoa API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `mercoa_find_entities` | read | Find entities |
| `mercoa_get_entity` | read | Get entity |
| `mercoa_get_entity_events` | read | Get entity events |
| `mercoa_get_entity_invoice_metrics` | read | Get entity invoice metrics |
| `mercoa_list_entity_payment_methods` | read | List entity payment methods |
| `mercoa_get_payment_method` | read | Get payment method |
| `mercoa_list_entity_users` | read | List entity users |
| `mercoa_find_invoices` | read | Find invoices |
| `mercoa_get_invoice` | read | Get invoice |
| `mercoa_get_invoice_events` | read | Get invoice events |
| `mercoa_find_transactions` | read | Find transactions |
| `mercoa_get_transaction` | read | Get transaction |
| `mercoa_get_organization` | read | Get organization |
| `mercoa_create_entity` | **write** | Create entity |
| `mercoa_create_invoice` | **write** | Create invoice |
| `mercoa_update_invoice` | **write** | Update invoice |
| `mercoa_add_invoice_comment` | **write** | Add invoice comment |
| `mercoa_usage_status` | meta | Usage status (free-tier meter) |
| `mercoa_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
