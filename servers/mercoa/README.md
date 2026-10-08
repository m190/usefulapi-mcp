# Mercoa MCP by usefulapi

Query and manage Mercoa AP/AR bill-pay — entities, invoices, transactions and payment methods — from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Mercoa API key.

**Live endpoint:** `https://mercoa.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/mercoa

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://mercoa.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http mercoa https://mercoa.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=mercoa&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmercoa.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "mercoa": {
      "url": "https://mercoa.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/mercoa/

<!-- connect:end (generated above, edit below) -->

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
| `mercoa_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `mercoa_upgrade` (it returns a Stripe Checkout link). Cancel any time with `mercoa_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `mercoa_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
