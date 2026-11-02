# Defontana MCP by usefulapi

Use your [Defontana](https://www.defontana.com) account from Claude, Cursor, or any MCP client. Read clients, providers, products, stock, sales, purchases, receivables, payables and accounting vouchers, all read-only. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://defontana.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://defontana.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http defontana https://defontana.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=defontana&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdefontana.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "defontana": {
      "url": "https://defontana.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Defontana credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/defontana/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **client code** and **company code** (both assigned by Defontana), and the **user** and **password** of a dedicated integration user. The server validates it and stores only the access token per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `defontana_get_company` | read | Get company |
| `defontana_list_users` | read | List users |
| `defontana_list_clients` | read | List clients |
| `defontana_search_client_by_legal_code` | read | Search client by tax id |
| `defontana_get_client_credit` | read | Get client credit |
| `defontana_list_products` | read | List products |
| `defontana_list_services` | read | List services |
| `defontana_list_sellers` | read | List sellers |
| `defontana_list_shops` | read | List shops |
| `defontana_list_storages` | read | List storages |
| `defontana_get_storage_stock` | read | Get storage stock |
| `defontana_list_payment_conditions` | read | List payment conditions |
| `defontana_list_taxes` | read | List taxes |
| `defontana_list_sales` | read | List sales documents |
| `defontana_get_sale` | read | Get sales document |
| `defontana_list_orders` | read | List orders |
| `defontana_get_order` | read | Get order |
| `defontana_list_purchases` | read | List purchase documents |
| `defontana_get_purchase` | read | Get purchase document |
| `defontana_list_purchase_orders` | read | List purchase orders |
| `defontana_get_purchase_order` | read | Get purchase order |
| `defontana_list_providers` | read | List providers |
| `defontana_get_account_plan` | read | Get chart of accounts |
| `defontana_list_vouchers` | read | List accounting vouchers |
| `defontana_get_voucher` | read | Get accounting voucher |
| `defontana_get_business_center` | read | Get business center |
| `defontana_list_receivables` | read | List documents to collect |
| `defontana_list_payables` | read | List documents to pay |
| `defontana_usage_status` | meta | Usage status (free-tier meter) |
| `defontana_request_feature` | meta | Request a missing feature |
| `defontana_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `defontana_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `defontana_upgrade` (it returns a Stripe Checkout link). Cancel any time with `defontana_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `defontana_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
