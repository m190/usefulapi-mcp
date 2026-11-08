# HotelRunner MCP by usefulapi

Read HotelRunner reservations, rooms, channels; update availability and prices; confirm or cancel.

**Live endpoint:** `https://hotelrunner.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/hotelrunner

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://hotelrunner.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http hotelrunner https://hotelrunner.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=hotelrunner&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhotelrunner.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "hotelrunner": {
      "url": "https://hotelrunner.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your HotelRunner credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/hotelrunner/

<!-- connect:end (generated above, edit below) -->

On first connect you'll enter the **HR_ID** and **TOKEN** of a HotelRunner app (in the HotelRunner property panel open My Property and create an app key; the page shows both).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `hotelrunner_list_rooms` | read | List rooms and rates |
| `hotelrunner_list_reservations` | read | List reservations |
| `hotelrunner_get_reservation` | read | Get reservation |
| `hotelrunner_list_channels` | read | List sales channels |
| `hotelrunner_list_connected_channels` | read | List connected channels |
| `hotelrunner_get_transaction_details` | read | Get calendar update status |
| `hotelrunner_update_room_calendar` | **write** | Update room availability, prices and restrictions |
| `hotelrunner_update_reservation_state` | **write** | Confirm or cancel a reservation |
| `hotelrunner_usage_status` | meta | Usage status (free-tier meter) |
| `hotelrunner_request_feature` | meta | Request a missing feature |
| `hotelrunner_upgrade` | meta | Upgrade to Pro or Pro+ |
| `hotelrunner_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `hotelrunner_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `hotelrunner_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `hotelrunner_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by HotelRunner.
