# Aqarsas MCP by usefulapi

Use your [Aqarsas](https://aqarsas.sa) account from Claude, Cursor, or any MCP client. It reads registered Saudi real estate deals, market statistics, top sales, property histories and nearby comparable sales. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://aqarsas.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://aqarsas.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http aqarsas https://aqarsas.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=aqarsas&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Faqarsas.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "aqarsas": {
      "url": "https://aqarsas.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Aqarsas credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/aqarsas/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **Aqarsas API key**, which Aqarsas support issues. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `aqarsas_search_transactions` | read | Search real estate transactions |
| `aqarsas_get_market_stats` | read | Get market statistics |
| `aqarsas_get_top_transactions` | read | Get top transactions |
| `aqarsas_get_property_details` | read | Get property details |
| `aqarsas_find_nearby_transactions` | read | Find nearby transactions |
| `aqarsas_usage_status` | meta | Usage status (free-tier meter) |
| `aqarsas_request_feature` | meta | Request a missing feature |
| `aqarsas_upgrade` | meta | Upgrade to Pro or Pro+ |
| `aqarsas_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `aqarsas_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `aqarsas_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `aqarsas_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
