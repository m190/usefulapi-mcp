# Sage Sales Management MCP by usefulapi

Use your [Sage Sales Management](https://www.forcemanager.com) account from Claude, Cursor, or any MCP client. Read accounts, contacts, opportunities and activities, and create records or update opportunities. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://sage-sales-management.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sage-sales-management.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sage-sales-management https://sage-sales-management.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sage-sales-management&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsage-sales-management.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sage-sales-management": {
      "url": "https://sage-sales-management.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Sage Sales Management credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sage-sales-management/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **public API key** and **private API key** (Sage Sales Management → Settings → Integrations → API key, as an admin). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sagesales_list_accounts` | read | List accounts |
| `sagesales_list_contacts` | read | List contacts |
| `sagesales_list_opportunities` | read | List opportunities |
| `sagesales_list_activities` | read | List activities |
| `sagesales_list_sales_orders` | read | List sales orders |
| `sagesales_list_products` | read | List products |
| `sagesales_get_account` | read | Get an account |
| `sagesales_get_contact` | read | Get a contact |
| `sagesales_get_opportunity` | read | Get an opportunity |
| `sagesales_create_account` | **write** | Create an account |
| `sagesales_create_contact` | **write** | Create a contact |
| `sagesales_create_opportunity` | **write** | Create an opportunity |
| `sagesales_update_opportunity` | **write** | Update an opportunity |
| `sagesales_usage_status` | meta | Usage status (free-tier meter) |
| `sagesales_request_feature` | meta | Request a missing feature |
| `sagesales_upgrade` | meta | Upgrade to Pro or Pro+ |
| `sagesales_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `sagesales_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `sagesales_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `sagesales_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
