# Avirato MCP by usefulapi

Use your [Avirato](https://avirato.com) account from Claude, Cursor, or any MCP client. It reads reservations, availability, rates, prices and meal plans, and records cash payments on bookings. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://avirato.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://avirato.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http avirato https://avirato.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=avirato&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Favirato.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "avirato": {
      "url": "https://avirato.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Avirato credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/avirato/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **API user email**, the **API user password** and the **establishment code (webCode)**. Create the API user in Avirato under Configuración → Mi cuenta → Usuarios y seguridad, and tick only **API**. Find the establishment code at the end of the link from Configuración → Canales de venta → Motor de reservas → Generador de enlaces. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `avirato_list_reservations` | read | List reservations between dates |
| `avirato_get_reservation` | read | Get a reservation |
| `avirato_get_reservation_details` | read | Get reservation details |
| `avirato_get_related_reservations` | read | Get related reservations |
| `avirato_list_all_reservations` | read | List all reservations |
| `avirato_list_booking_channels` | read | List booking channels |
| `avirato_check_availability` | read | Check availability |
| `avirato_list_available_spaces` | read | List available rooms |
| `avirato_get_unavailable_dates` | read | Get unavailable dates of a room |
| `avirato_get_booking_engine_overview` | read | Get rooms, diets, extras and availability overview |
| `avirato_list_rates` | read | List rates |
| `avirato_list_rates_by_room_category` | read | List rates by room category |
| `avirato_get_rate` | read | Get a rate |
| `avirato_get_price` | read | Get the price of a stay |
| `avirato_get_prices_map` | read | Get a price calendar |
| `avirato_get_discounts` | read | Get discounts |
| `avirato_list_diets` | read | List meal plans |
| `avirato_list_rate_releases` | read | List rate release days |
| `avirato_get_minimum_stay` | read | Get minimum stay restrictions |
| `avirato_get_daily_prices` | read | Get daily prices of a rate |
| `avirato_list_promotional_packages` | read | List promotional packages |
| `avirato_list_extras` | read | List extras |
| `avirato_add_booking_cash_payment` | **write** | Record a cash payment on a booking |
| `avirato_usage_status` | meta | Usage status (free-tier meter) |
| `avirato_request_feature` | meta | Request a missing feature |
| `avirato_upgrade` | meta | Upgrade to Pro or Pro+ |
| `avirato_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `avirato_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `avirato_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `avirato_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
