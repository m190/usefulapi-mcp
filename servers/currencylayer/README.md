# currencylayer MCP by usefulapi

Read and calculate exchange rates with your paid currencylayer account.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://currencylayer.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http currencylayer https://currencylayer.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=currencylayer&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcurrencylayer.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "currencylayer": {
      "url": "https://currencylayer.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your currencylayer credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/currencylayer/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `currencylayer_get_live_rates` | **write** | Get live exchange rates |
| `currencylayer_get_historical_rates` | **write** | Get historical exchange rates |
| `currencylayer_convert_currency` | **write** | Convert an amount |
| `currencylayer_get_timeframe_rates` | **write** | Get exchange rates for a date range |
| `currencylayer_get_rate_changes` | **write** | Get exchange rate changes |
| `currencylayer_usage_status` | meta | Usage status (free-tier meter) |
| `currencylayer_request_feature` | meta | Request a missing feature |
| `currencylayer_upgrade` | meta | Upgrade to Pro or Pro+ |
| `currencylayer_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per currencylayer access key) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per currencylayer access key) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `currencylayer_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `currencylayer_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `currencylayer_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
