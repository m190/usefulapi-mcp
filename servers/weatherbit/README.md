# Weatherbit MCP by usefulapi

https://weatherbit.usefulapi.io/mcp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://weatherbit.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http weatherbit https://weatherbit.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=weatherbit&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fweatherbit.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "weatherbit": {
      "url": "https://weatherbit.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Weatherbit credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/weatherbit/

<!-- connect:end (generated above, edit below) -->

Connect with a Weatherbit API key from a paid commercial-use subscription. Individual data APIs depend on your plan.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `weatherbit_subscription_usage` | read | Weatherbit subscription usage |
| `weatherbit_current_weather` | read | Current Weatherbit conditions |
| `weatherbit_daily_forecast` | read | Daily Weatherbit forecast |
| `weatherbit_hourly_forecast` | read | Hourly Weatherbit forecast |
| `weatherbit_minutely_forecast` | read | Minutely precipitation forecast |
| `weatherbit_daily_history` | read | Daily Weatherbit history |
| `weatherbit_current_air_quality` | read | Current Weatherbit air quality |
| `weatherbit_air_quality_forecast` | read | Weatherbit air quality forecast |
| `weatherbit_agriculture_forecast` | read | Weatherbit agriculture forecast |
| `weatherbit_agriculture_history` | read | Historical agriculture weather |
| `weatherbit_energy_forecast` | read | Weatherbit energy forecast |
| `weatherbit_energy_history` | read | Historical energy weather |
| `weatherbit_usage_status` | meta | Usage status (free-tier meter) |
| `weatherbit_request_feature` | meta | Request a missing feature |
| `weatherbit_upgrade` | meta | Upgrade to Pro or Pro+ |
| `weatherbit_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `weatherbit_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `weatherbit_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `weatherbit_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
