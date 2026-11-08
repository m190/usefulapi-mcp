# Billogram MCP by usefulapi

Use your [Billogram](https://billogram.com) account from Claude, Cursor, or any MCP client. Read invoices, customers, items and balances, and create invoices, customers and items. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://billogram.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://billogram.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http billogram https://billogram.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=billogram&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbillogram.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "billogram": {
      "url": "https://billogram.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Billogram credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/billogram/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **API User ID** and **API Password**, and choose the **Environment** (Production or Sandbox). Create the API user in Billogram under Company Settings → API → API Users. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `billogram_list_invoices` | read | List invoices |
| `billogram_get_invoice` | read | Get invoice |
| `billogram_list_invoice_events` | read | List invoice events |
| `billogram_list_customers` | read | List customers |
| `billogram_get_customer` | read | Get customer |
| `billogram_get_customer_balance` | read | Get customer balance |
| `billogram_list_items` | read | List items |
| `billogram_get_item` | read | Get item |
| `billogram_get_settings` | read | Get settings |
| `billogram_create_customer` | **write** | Create customer |
| `billogram_create_item` | **write** | Create item |
| `billogram_create_invoice` | **write** | Create invoice |
| `billogram_usage_status` | meta | Usage status (free-tier meter) |
| `billogram_request_feature` | meta | Request a missing feature |
| `billogram_upgrade` | meta | Upgrade to Pro or Pro+ |
| `billogram_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `billogram_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `billogram_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `billogram_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
