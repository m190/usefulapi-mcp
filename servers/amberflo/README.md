# Amberflo MCP by usefulapi

Read customers, meters, usage, plans and invoices — and create customers, assign plans or ingest usage events — from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Amberflo API key.

**Live endpoint:** `https://amberflo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/amberflo

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://amberflo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http amberflo https://amberflo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=amberflo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Famberflo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "amberflo": {
      "url": "https://amberflo.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/amberflo/

<!-- connect:end (generated above, edit below) -->

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
| `amberflo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `amberflo_upgrade` (it returns a Stripe Checkout link). Cancel any time with `amberflo_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `amberflo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
