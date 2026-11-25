# Communico MCP by usefulapi

Use your [Communico](https://www.communico.co) account from Claude, Cursor, or any MCP client. Read library events, rooms, reservations, locations and appointments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://communico.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://communico.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http communico https://communico.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=communico&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcommunico.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "communico": {
      "url": "https://communico.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Communico credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/communico/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **client key** and **client secret** from Communico support (support@communico.co). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `communico_list_events` | read | List events |
| `communico_get_event` | read | Get event |
| `communico_get_event_series` | read | Get event series |
| `communico_list_event_registrants` | read | List event registrants |
| `communico_find_patron_registrations` | read | Find patron registrations |
| `communico_list_event_ages` | read | List event age groups |
| `communico_list_event_types` | read | List event types |
| `communico_list_locations` | read | List locations |
| `communico_get_location` | read | Get location |
| `communico_list_rooms` | read | List rooms |
| `communico_list_reservations` | read | List room reservations |
| `communico_get_reservation` | read | Get room reservation |
| `communico_list_appointment_categories` | read | List appointment categories |
| `communico_list_appointments` | read | List booked appointments |
| `communico_get_appointment` | read | Get booked appointment |
| `communico_usage_status` | meta | Usage status (free-tier meter) |
| `communico_request_feature` | meta | Request a missing feature |
| `communico_upgrade` | meta | Upgrade to Pro or Pro+ |
| `communico_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `communico_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `communico_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `communico_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
