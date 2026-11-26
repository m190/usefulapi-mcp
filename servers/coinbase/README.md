# Coinbase MCP by usefulapi

Use your [Coinbase](https://www.coinbase.com) account from Claude, Cursor, or any MCP client. Read market data, balances, portfolios, orders and fills, with no trading. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://coinbase.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://coinbase.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http coinbase https://coinbase.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=coinbase&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcoinbase.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "coinbase": {
      "url": "https://coinbase.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Coinbase credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/coinbase/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **CDP API key name** and its **private key** from the downloaded key file (Coinbase Developer Platform → Access → API keys, View permission). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `coinbase_get_server_time` | read | Get server time |
| `coinbase_list_products` | read | List market products |
| `coinbase_get_product` | read | Get a market product |
| `coinbase_get_product_candles` | read | Get price candles |
| `coinbase_get_market_trades` | read | Get recent market trades |
| `coinbase_get_product_book` | read | Get the order book |
| `coinbase_get_key_permissions` | read | Get API key permissions |
| `coinbase_list_accounts` | read | List accounts |
| `coinbase_get_account` | read | Get an account |
| `coinbase_list_portfolios` | read | List portfolios |
| `coinbase_get_portfolio_breakdown` | read | Get a portfolio breakdown |
| `coinbase_list_orders` | read | List orders |
| `coinbase_get_order` | read | Get an order |
| `coinbase_list_fills` | read | List fills |
| `coinbase_get_transaction_summary` | read | Get transaction summary |
| `coinbase_usage_status` | meta | Usage status (free-tier meter) |
| `coinbase_request_feature` | meta | Request a missing feature |
| `coinbase_upgrade` | meta | Upgrade to Pro or Pro+ |
| `coinbase_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `coinbase_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `coinbase_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `coinbase_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
