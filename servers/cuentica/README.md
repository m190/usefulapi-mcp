# Cuéntica MCP by usefulapi

Use your [Cuéntica](https://cuentica.com) account from Claude, Cursor, or any MCP client. It reads invoices, customers, providers, incomes, expenses and company accounts, and it creates customers and providers. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://cuentica.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cuentica.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cuentica https://cuentica.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cuentica&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcuentica.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cuentica": {
      "url": "https://cuentica.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Cuéntica credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cuentica/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Cuéntica API token**, created in Cuéntica under the user menu, **API**, by choosing your company and adding a token. A read-only token is enough to read data. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cuentica_get_company` | read | Get company |
| `cuentica_list_series` | read | List invoice series |
| `cuentica_list_tags` | read | List tags |
| `cuentica_list_accounts` | read | List accounts |
| `cuentica_get_account` | read | Get account |
| `cuentica_list_customers` | read | List customers |
| `cuentica_get_customer` | read | Get customer |
| `cuentica_list_providers` | read | List providers |
| `cuentica_get_provider` | read | Get provider |
| `cuentica_create_customer` | **write** | Create customer |
| `cuentica_create_provider` | **write** | Create provider |
| `cuentica_list_invoices` | read | List invoices |
| `cuentica_get_invoice` | read | Get invoice |
| `cuentica_get_invoice_public_link` | read | Get invoice public link |
| `cuentica_list_incomes` | read | List incomes |
| `cuentica_get_income` | read | Get income |
| `cuentica_list_expenses` | read | List expenses |
| `cuentica_get_expense` | read | Get expense |
| `cuentica_usage_status` | meta | Usage status (free-tier meter) |
| `cuentica_request_feature` | meta | Request a missing feature |
| `cuentica_upgrade` | meta | Upgrade to Pro or Pro+ |
| `cuentica_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `cuentica_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `cuentica_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `cuentica_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
