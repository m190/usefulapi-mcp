# Azuga MCP by usefulapi

Use your [Azuga](https://www.azuga.com) account from Claude, Cursor, or any MCP client. It reads driver scores, trips, driving events, vehicle locations and diagnostic trouble codes, and it changes nothing. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://azuga.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://azuga.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http azuga https://azuga.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=azuga&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fazuga.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "azuga": {
      "url": "https://azuga.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Azuga credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/azuga/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Azuga Webservices API key**. Copy it in the Azuga web portal under **Admin → Users**, in the column **Webservices API key**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `azuga_get_profile` | read | Get profile |
| `azuga_list_driver_scores` | read | List driver scores |
| `azuga_list_trips` | read | List trips |
| `azuga_get_trip_events` | read | Get trip events |
| `azuga_list_events` | read | List vehicle events |
| `azuga_list_live_locations` | read | List live vehicle status |
| `azuga_get_vehicle_location` | read | Get last vehicle location |
| `azuga_list_vehicles` | read | List vehicles |
| `azuga_list_drivers` | read | List drivers |
| `azuga_list_groups` | read | List groups |
| `azuga_list_geofences` | read | List geofences |
| `azuga_list_landmarks` | read | List landmarks |
| `azuga_get_breadcrumbs` | read | Get vehicle breadcrumb trail |
| `azuga_list_pairing_history` | read | List device pairing history |
| `azuga_list_rewards` | read | List reward history |
| `azuga_get_vehicle_diagnostics` | read | Get vehicle diagnostic trouble codes |
| `azuga_usage_status` | meta | Usage status (free-tier meter) |
| `azuga_request_feature` | meta | Request a missing feature |
| `azuga_upgrade` | meta | Upgrade to Pro or Pro+ |
| `azuga_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `azuga_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `azuga_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `azuga_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
