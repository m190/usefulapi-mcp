# Finnhub MCP by usefulapi

Use your [Finnhub](https://finnhub.io) account from Claude, Cursor, or any MCP client — pull quotes, company profiles, fundamentals, earnings and IPO calendars, and market or company news. Hosted,
no local install: connect with your own credentials.

**Live endpoint:** `https://finnhub.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://finnhub.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http finnhub https://finnhub.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=finnhub&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffinnhub.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "finnhub": {
      "url": "https://finnhub.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Finnhub credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/finnhub/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Finnhub API key** (shown on your Finnhub dashboard — the free tier works). It is validated, stored per-user, and scoped to you — no
keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `finnhub_quote` | read | Real-time quote |
| `finnhub_symbol_search` | read | Symbol search |
| `finnhub_company_profile` | read | Company profile |
| `finnhub_company_news` | read | Company news |
| `finnhub_market_news` | read | Market news |
| `finnhub_basic_financials` | read | Basic financials |
| `finnhub_recommendation_trends` | read | Recommendation trends |
| `finnhub_earnings_surprises` | read | Earnings surprises |
| `finnhub_price_target` | read | Price target |
| `finnhub_peers` | read | Company peers |
| `finnhub_insider_transactions` | read | Insider transactions |
| `finnhub_stock_symbols` | read | Stock symbols |
| `finnhub_market_status` | read | Market status |
| `finnhub_earnings_calendar` | read | Earnings calendar |
| `finnhub_ipo_calendar` | read | IPO calendar |
| `finnhub_usage_status` | meta | Usage status (free-tier meter) |
| `finnhub_request_feature` | meta | Request a missing feature |
| `finnhub_upgrade` | meta | Upgrade to Pro or Pro+ |
| `finnhub_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `finnhub_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `finnhub_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `finnhub_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
