# Fakturoid MCP by usefulapi

Use your [Fakturoid](https://www.fakturoid.cz) account from Claude, Cursor, or any MCP client. Read invoices, expenses, customers and inventory, and create or update customers. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://fakturoid.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://fakturoid.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http fakturoid https://fakturoid.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=fakturoid&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffakturoid.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "fakturoid": {
      "url": "https://fakturoid.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Fakturoid credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/fakturoid/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **account name** (the slug in app.fakturoid.cz/name/), and the **Client ID** and **Client secret** of your integration (Settings → Connect other apps → OAuth 2 for app developers). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fakturoid_get_current_user` | read | Get current user |
| `fakturoid_get_account` | read | Get account |
| `fakturoid_list_bank_accounts` | read | List bank accounts |
| `fakturoid_list_number_formats` | read | List invoice number formats |
| `fakturoid_list_subjects` | read | List subjects |
| `fakturoid_search_subjects` | read | Search subjects |
| `fakturoid_get_subject` | read | Get a subject |
| `fakturoid_list_invoices` | read | List invoices |
| `fakturoid_get_invoice` | read | Get an invoice |
| `fakturoid_list_expenses` | read | List expenses |
| `fakturoid_get_expense` | read | Get an expense |
| `fakturoid_list_inventory_items` | read | List inventory items |
| `fakturoid_create_subject` | **write** | Create a subject |
| `fakturoid_update_subject` | **write** | Update a subject |
| `fakturoid_usage_status` | meta | Usage status (free-tier meter) |
| `fakturoid_request_feature` | meta | Request a missing feature |
| `fakturoid_upgrade` | meta | Upgrade to Pro or Pro+ |
| `fakturoid_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `fakturoid_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `fakturoid_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `fakturoid_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
