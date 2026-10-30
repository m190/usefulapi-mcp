# Collmex MCP by usefulapi

Hosted at https://collmex.usefulapi.io/mcp.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://collmex.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http collmex https://collmex.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=collmex&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcollmex.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "collmex": {
      "url": "https://collmex.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Collmex credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/collmex/

<!-- connect:end (generated above, edit below) -->

Connect your Collmex account using the credentials described on the login page.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `collmex_list_customers` | read | List customers |
| `collmex_list_vendors` | read | List vendors |
| `collmex_list_addresses` | read | List addresses |
| `collmex_list_products` | read | List products |
| `collmex_get_available_stock` | read | Get available stock |
| `collmex_list_invoices` | read | List invoices |
| `collmex_list_sales_orders` | read | List sales orders |
| `collmex_list_payment_terms` | read | List payment terms |
| `collmex_list_open_items` | read | List open items |
| `collmex_list_accounting_documents` | read | List accounting postings |
| `collmex_get_account_balances` | read | Get account balances |
| `collmex_list_projects` | read | List projects |
| `collmex_list_activities` | read | List project activities |
| `collmex_create_customer` | **write** | Create customer |
| `collmex_create_address` | **write** | Create address-book entry |
| `collmex_usage_status` | meta | Usage status (free-tier meter) |
| `collmex_request_feature` | meta | Request a missing feature |
| `collmex_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `collmex_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per Collmex account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `collmex_upgrade` (it returns a Stripe Checkout link). Cancel any time with `collmex_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `collmex_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
