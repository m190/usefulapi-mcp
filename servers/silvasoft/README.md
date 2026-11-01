# Silvasoft MCP by usefulapi

Use your [Silvasoft](https://www.silvasoft.nl) account from Claude, Cursor, or any MCP client. Read invoices, orders, products and stock, and add business customers or suppliers. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://silvasoft.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://silvasoft.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http silvasoft https://silvasoft.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=silvasoft&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsilvasoft.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "silvasoft": {
      "url": "https://silvasoft.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Silvasoft credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/silvasoft/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Silvasoft login e-mail** and a **Silvasoft API key** (created in the Silvasoft dashboard; the API module must be enabled). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `silvasoft_list_relations` | read | List relations |
| `silvasoft_list_products` | read | List products |
| `silvasoft_list_orders` | read | List sales orders |
| `silvasoft_list_sales_invoices` | read | List sales invoices |
| `silvasoft_list_purchase_transactions` | read | List purchase invoices |
| `silvasoft_list_tax_codes` | read | List tax codes |
| `silvasoft_list_ledger_accounts` | read | List ledger accounts |
| `silvasoft_list_day_registrations` | read | List time registrations |
| `silvasoft_add_business_relation` | **write** | Add a business relation |
| `silvasoft_usage_status` | meta | Usage status (free-tier meter) |
| `silvasoft_request_feature` | meta | Request a missing feature |
| `silvasoft_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `silvasoft_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `silvasoft_upgrade` (it returns a Stripe Checkout link). Cancel any time with `silvasoft_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `silvasoft_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
