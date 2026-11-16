# Amenitiz MCP by usefulapi

Use your [Amenitiz](https://www.amenitiz.com) account from Claude, Cursor, or any MCP client. Read hotel properties, bookings, invoices, rate plans and availability. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://amenitiz.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://amenitiz.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http amenitiz https://amenitiz.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=amenitiz&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Famenitiz.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "amenitiz": {
      "url": "https://amenitiz.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Amenitiz credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/amenitiz/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **Amenitiz API client ID** and **client secret** from Settings → API credentials. The hotel account owner creates them, and the hotel needs the open API feature. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `amenitiz_list_properties` | read | List properties |
| `amenitiz_get_property` | read | Get a property |
| `amenitiz_list_unit_groups` | read | List unit groups |
| `amenitiz_get_unit_group` | read | Get a unit group |
| `amenitiz_list_units` | read | List units |
| `amenitiz_get_unit` | read | Get a unit |
| `amenitiz_list_bookings` | read | List bookings |
| `amenitiz_get_booking` | read | Get a booking |
| `amenitiz_get_reservation` | read | Get a reservation |
| `amenitiz_list_booking_payments` | read | List booking payments |
| `amenitiz_list_booking_charges` | read | List booking charges |
| `amenitiz_list_invoices` | read | List invoices |
| `amenitiz_get_invoice` | read | Get an invoice |
| `amenitiz_list_rate_plans` | read | List rate plans |
| `amenitiz_get_availability` | read | Get availability |
| `amenitiz_usage_status` | meta | Usage status (free-tier meter) |
| `amenitiz_request_feature` | meta | Request a missing feature |
| `amenitiz_upgrade` | meta | Upgrade to Pro or Pro+ |
| `amenitiz_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `amenitiz_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `amenitiz_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `amenitiz_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
