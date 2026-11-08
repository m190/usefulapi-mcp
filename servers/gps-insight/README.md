# GPS Insight MCP by usefulapi

Use your [GPS Insight](https://www.gpsinsight.com) account from Claude, Cursor, or any MCP client. It reads vehicles, positions, idle time, fault codes, driving scores, fuel card transactions and alerts, and it changes nothing. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://gps-insight.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://gps-insight.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http gps-insight https://gps-insight.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=gps-insight&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgps-insight.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "gps-insight": {
      "url": "https://gps-insight.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your GPS Insight credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/gps-insight/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **GPS Insight username** and an **App Token**, or the username and an **API user password**. Create the App Token under **Account → Manage Users → Manage access to api V2 functions → API App**. API access must be on for the account, and GPS Insight may charge for it. GPS Insight's terms let it use Customer Data to develop and train AI and machine-learning technologies. The server validates the login and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `gpsinsight_list_vehicles` | read | List vehicles |
| `gpsinsight_read_vehicle` | read | Read a vehicle |
| `gpsinsight_vehicle_location` | read | Get vehicle location |
| `gpsinsight_vehicle_history` | read | Get vehicle position history |
| `gpsinsight_vehicle_idle_detail` | read | Get vehicle idle detail |
| `gpsinsight_vehicle_dtc` | read | Get vehicle fault codes |
| `gpsinsight_vehicle_scorecard` | read | Get vehicle scorecard |
| `gpsinsight_vehicle_fuel_card_transactions` | read | List fuel card transactions |
| `gpsinsight_list_vehicle_groups` | read | List vehicle groups |
| `gpsinsight_list_drivers` | read | List drivers |
| `gpsinsight_list_users` | read | List portal users |
| `gpsinsight_list_landmarks` | read | List landmarks |
| `gpsinsight_list_alerts` | read | List alert types |
| `gpsinsight_alert_history` | read | Get alert history |
| `gpsinsight_reverse_geocode` | read | Reverse geocode a point |
| `gpsinsight_usage_status` | meta | Usage status (free-tier meter) |
| `gpsinsight_request_feature` | meta | Request a missing feature |
| `gpsinsight_upgrade` | meta | Upgrade to Pro or Pro+ |
| `gpsinsight_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `gpsinsight_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `gpsinsight_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `gpsinsight_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
