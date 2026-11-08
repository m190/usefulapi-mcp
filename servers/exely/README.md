# Exely MCP by usefulapi

Use your [Exely](https://exely.com) account from Claude, Cursor, or any MCP client. It reads the bookings, rooms, rules and daily occupancy of one hotel property, and it changes nothing. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://exely.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://exely.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http exely https://exely.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=exely&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fexely.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "exely": {
      "url": "https://exely.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Exely credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/exely/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **client_id** and **client_secret** of the Exely API connection for your property. Your hotel creates that connection in the Exely extranet and gives you the pair. The server validates the pair and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `exely_list_properties` | read | List properties |
| `exely_get_property` | read | Get property |
| `exely_get_cancellation_rules` | read | Get cancellation rules |
| `exely_get_extra_stay_rules` | read | Get early check-in and late check-out rules |
| `exely_list_room_type_categories` | read | List room type categories |
| `exely_list_meal_plans` | read | List meal plans |
| `exely_list_rooms` | read | List rooms |
| `exely_list_bookings` | read | List booking summaries |
| `exely_get_booking` | read | Get booking |
| `exely_get_booking_by_external_number` | read | Get booking by external number |
| `exely_get_daily_occupancy` | read | Get daily occupancy |
| `exely_usage_status` | meta | Usage status (free-tier meter) |
| `exely_request_feature` | meta | Request a missing feature |
| `exely_upgrade` | meta | Upgrade to Pro or Pro+ |
| `exely_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `exely_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `exely_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `exely_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
