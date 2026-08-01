# Finnhub MCP by usefulapi

Use your [Finnhub](https://finnhub.io) account from Claude, Cursor, or any MCP client — pull quotes, company profiles, fundamentals, earnings and IPO calendars, and market or company news. Hosted,
no local install: connect with your own credentials.

**Live endpoint:** `https://finnhub.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "finnhub": {
      "url": "https://finnhub.usefulapi.io/mcp"
    }
  }
}
```

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

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
