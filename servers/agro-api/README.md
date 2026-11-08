# Agro API MCP by usefulapi

Use your [Agro API](https://agromonitoring.com) account from Claude, Cursor, or any MCP client. Read satellite images, NDVI, weather, soil and UV data, and create or delete fields. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://agro-api.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://agro-api.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http agro-api https://agro-api.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=agro-api&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fagro-api.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "agro-api": {
      "url": "https://agro-api.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Agro API credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/agro-api/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Agro API key** (API keys tab in your Agro API account). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `agroapi_list_polygons` | read | List polygons |
| `agroapi_get_polygon` | read | Get a polygon |
| `agroapi_create_polygon` | **write** | Create a polygon |
| `agroapi_update_polygon` | **write** | Rename a polygon |
| `agroapi_delete_polygon` | **write** | Delete a polygon |
| `agroapi_search_images` | read | Search satellite images |
| `agroapi_get_ndvi_history` | read | Get NDVI history |
| `agroapi_get_current_weather` | read | Get current weather |
| `agroapi_get_forecast_weather` | read | Get weather forecast |
| `agroapi_get_historical_weather` | read | Get historical weather |
| `agroapi_get_accumulated_temperature` | read | Get accumulated temperature |
| `agroapi_get_accumulated_precipitation` | read | Get accumulated precipitation |
| `agroapi_get_current_soil` | read | Get current soil data |
| `agroapi_get_historical_soil` | read | Get historical soil data |
| `agroapi_get_current_uvi` | read | Get current UV index |
| `agroapi_get_forecast_uvi` | read | Get UV index forecast |
| `agroapi_get_historical_uvi` | read | Get historical UV index |
| `agroapi_usage_status` | meta | Usage status (free-tier meter) |
| `agroapi_request_feature` | meta | Request a missing feature |
| `agroapi_upgrade` | meta | Upgrade to Pro or Pro+ |
| `agroapi_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `agroapi_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `agroapi_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `agroapi_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
