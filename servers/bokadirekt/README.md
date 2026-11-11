# Bokadirekt MCP by usefulapi

Use your [Bokadirekt](https://www.bokadirekt.se/) account from Claude, Cursor, or any MCP client. Read a salon's locations, staff, services, bookings, customers, sales and products; the tools never change data. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://bokadirekt.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bokadirekt.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bokadirekt https://bokadirekt.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bokadirekt&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbokadirekt.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bokadirekt": {
      "url": "https://bokadirekt.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Bokadirekt credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bokadirekt/

<!-- connect:end (generated above, edit below) -->

On first connect you provide **Bokadirekt Merchant API key** (find it in Bokadirekt under **Settings → Other → API-service & Webhooks**; the Merchant API add-on must be on your subscription). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bokadirekt_list_salons` | read | List locations |
| `bokadirekt_list_companies` | read | List companies |
| `bokadirekt_list_services` | read | List services |
| `bokadirekt_list_resources` | read | List staff (resources) |
| `bokadirekt_list_customers` | read | List customers |
| `bokadirekt_list_bookings` | read | List bookings |
| `bokadirekt_list_sales` | read | List sales |
| `bokadirekt_list_products` | read | List products |
| `bokadirekt_usage_status` | meta | Usage status (free-tier meter) |
| `bokadirekt_request_feature` | meta | Request a missing feature |
| `bokadirekt_upgrade` | meta | Upgrade to Pro or Pro+ |
| `bokadirekt_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `bokadirekt_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `bokadirekt_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `bokadirekt_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
