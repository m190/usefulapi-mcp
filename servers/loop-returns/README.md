# Loop Returns MCP by usefulapi

Use your [Loop Returns](https://www.loopreturns.com) account from Claude, Cursor, or any MCP client. Read returns, orders, return eligibility and shipping data, and add notes to or flag returns. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://loop-returns.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://loop-returns.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http loop-returns https://loop-returns.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=loop-returns&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Floop-returns.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "loop-returns": {
      "url": "https://loop-returns.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Loop Returns credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/loop-returns/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Loop Returns API key** (Loop Admin → Returns Management → Tools & integrations → Developer Tools). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `loopreturns_list_returns` | read | List returns |
| `loopreturns_get_return` | read | Get return details |
| `loopreturns_list_return_notes` | read | List return notes |
| `loopreturns_list_shipping_notices` | read | List advanced shipping notices |
| `loopreturns_list_orders` | read | List orders |
| `loopreturns_get_order` | read | Get order |
| `loopreturns_check_order_return_eligibility` | read | Check order return eligibility |
| `loopreturns_list_blocklist` | read | List blocklist entries |
| `loopreturns_list_happy_returns_shipments` | read | List Happy Returns shipments |
| `loopreturns_list_destinations` | read | List return destinations |
| `loopreturns_add_return_note` | **write** | Add a note to a return |
| `loopreturns_flag_return` | **write** | Flag a return for review |
| `loopreturns_usage_status` | meta | Usage status (free-tier meter) |
| `loopreturns_request_feature` | meta | Request a missing feature |
| `loopreturns_upgrade` | meta | Upgrade to Pro or Pro+ |
| `loopreturns_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `loopreturns_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `loopreturns_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `loopreturns_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
