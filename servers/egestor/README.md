# eGestor MCP by usefulapi

Use your [eGestor](https://www.egestor.com.br) account from Claude, Cursor, or any MCP client. Read contacts, products, sales, purchases, receivables and payables, and create a contact. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://egestor.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://egestor.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http egestor https://egestor.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=egestor&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fegestor.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "egestor": {
      "url": "https://egestor.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your eGestor credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/egestor/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **eGestor personal token** (eGestor → Configurações → API settings; the API must be enabled for your plan). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `egestor_list_contacts` | read | List contacts |
| `egestor_get_contact` | read | Get a contact |
| `egestor_create_contact` | **write** | Create a contact |
| `egestor_list_products` | read | List products |
| `egestor_get_product` | read | Get a product |
| `egestor_list_services` | read | List services |
| `egestor_list_sales` | read | List sales |
| `egestor_get_sale` | read | Get a sale |
| `egestor_list_receivables` | read | List receivables |
| `egestor_get_receivable` | read | Get a receivable |
| `egestor_list_payables` | read | List payables |
| `egestor_get_payable` | read | Get a payable |
| `egestor_list_purchases` | read | List purchases |
| `egestor_get_purchase` | read | Get a purchase |
| `egestor_list_accounts` | read | List financial accounts |
| `egestor_list_categories` | read | List categories |
| `egestor_list_users` | read | List users |
| `egestor_get_company` | read | Get company data |
| `egestor_usage_status` | meta | Usage status (free-tier meter) |
| `egestor_request_feature` | meta | Request a missing feature |
| `egestor_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `egestor_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `egestor_upgrade` (it returns a Stripe Checkout link). Cancel any time with `egestor_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `egestor_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
