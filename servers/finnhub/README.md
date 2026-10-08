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
| `finnhub_upgrade` | meta | Upgrade to Pro (unlimited) |
| `finnhub_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `finnhub_upgrade` (it returns a Stripe Checkout link). Cancel any time with `finnhub_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `finnhub_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
