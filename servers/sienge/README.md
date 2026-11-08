# Sienge MCP by usefulapi

Use your [Sienge](https://www.sienge.com.br) account from Claude, Cursor, or any MCP client. Read customers, contracts, receivables, purchase orders and units, and create customers. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://sienge.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sienge.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sienge https://sienge.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sienge&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsienge.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sienge": {
      "url": "https://sienge.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Sienge credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sienge/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Sienge subdomain** (the first part of your Sienge address), and an **API user name** and **API user password** from the Painel de Integrações of your Sienge account. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sienge_list_customers` | read | List customers |
| `sienge_get_customer` | read | Get a customer |
| `sienge_create_customer` | **write** | Create a customer |
| `sienge_list_companies` | read | List companies |
| `sienge_list_enterprises` | read | List enterprises |
| `sienge_list_creditors` | read | List creditors |
| `sienge_get_creditor` | read | Get a creditor |
| `sienge_list_sales_contracts` | read | List sales contracts |
| `sienge_get_sales_contract` | read | Get a sales contract |
| `sienge_list_receivable_bills` | read | List receivable bills |
| `sienge_list_receivable_installments` | read | List receivable installments |
| `sienge_list_purchase_orders` | read | List purchase orders |
| `sienge_get_purchase_order` | read | Get a purchase order |
| `sienge_list_purchase_invoices` | read | List purchase invoices |
| `sienge_list_units` | read | List units |
| `sienge_get_unit` | read | Get a unit |
| `sienge_list_departments` | read | List departments |
| `sienge_usage_status` | meta | Usage status (free-tier meter) |
| `sienge_request_feature` | meta | Request a missing feature |
| `sienge_upgrade` | meta | Upgrade to Pro or Pro+ |
| `sienge_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `sienge_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `sienge_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `sienge_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
