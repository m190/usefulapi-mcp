# resOS MCP by usefulapi

Use your [resOS](https://resos.com) account from Claude, Cursor, or any MCP client. It reads bookings, guests, feedback and availability, and it can create, change or cancel bookings and post guest comments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://resos.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://resos.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http resos https://resos.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=resos&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fresos.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "resos": {
      "url": "https://resos.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your resOS credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/resos/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **resOS API key** (Settings → API integration; the API is a paid add-on). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `resos_list_bookings` | read | List bookings |
| `resos_get_booking` | read | Get booking |
| `resos_list_customers` | read | List customers |
| `resos_get_customer` | read | Get customer |
| `resos_list_guest_feedback` | read | List guest feedback |
| `resos_get_guest_feedback` | read | Get guest feedback |
| `resos_list_seating_areas` | read | List seating areas and tables |
| `resos_list_opening_hours` | read | List opening hours |
| `resos_get_opening_hour` | read | Get opening hour |
| `resos_list_custom_fields` | read | List custom fields |
| `resos_get_custom_field` | read | Get custom field |
| `resos_get_available_dates` | read | Get available dates |
| `resos_get_available_times` | read | Get available times |
| `resos_get_available_tables` | read | Get available tables |
| `resos_create_booking` | **write** | Create booking |
| `resos_update_booking` | **write** | Update booking |
| `resos_cancel_booking` | **write** | Cancel booking |
| `resos_add_booking_note` | **write** | Add internal booking note |
| `resos_send_booking_comment` | **write** | Post booking comment to guest |
| `resos_usage_status` | meta | Usage status (free-tier meter) |
| `resos_request_feature` | meta | Request a missing feature |
| `resos_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `resos_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `resos_upgrade` (it returns a Stripe Checkout link). Cancel any time with `resos_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `resos_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
