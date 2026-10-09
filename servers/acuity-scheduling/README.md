# Acuity Scheduling MCP by usefulapi

Manage [Acuity Scheduling](https://acuityscheduling.com) from Claude, Cursor, or any MCP client —
read appointments, appointment types, calendars and availability, and create, cancel or reschedule
bookings. Hosted, no local install: connect with your Acuity credentials.

**Live endpoint:** `https://acuity-scheduling.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://acuity-scheduling.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http acuity-scheduling https://acuity-scheduling.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=acuity-scheduling&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Facuity-scheduling.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "acuity-scheduling": {
      "url": "https://acuity-scheduling.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Acuity Scheduling credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/acuity-scheduling/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Acuity User ID and API Key** (Acuity → Integrations → API).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `acuity_list_appointments` | read | List appointments |
| `acuity_get_appointment` | read | Get appointment |
| `acuity_list_appointment_types` | read | List appointment types |
| `acuity_list_calendars` | read | List calendars |
| `acuity_availability_dates` | read | Get available dates |
| `acuity_availability_times` | read | Get available times |
| `acuity_availability_classes` | read | Get available classes |
| `acuity_list_clients` | read | List clients |
| `acuity_list_forms` | read | List intake forms |
| `acuity_list_products` | read | List products |
| `acuity_list_orders` | read | List orders |
| `acuity_list_blocks` | read | List blocked-off times |
| `acuity_list_labels` | read | List labels |
| `acuity_get_me` | read | Get account info |
| `acuity_create_appointment` | **write** | Create appointment |
| `acuity_cancel_appointment` | **write** | Cancel appointment |
| `acuity_reschedule_appointment` | **write** | Reschedule appointment |
| `acuity_create_client` | **write** | Create client |
| `acuity_usage_status` | meta | Usage status (free-tier meter) |
| `acuity_request_feature` | meta | Request a missing feature |
| `acuity_upgrade` | meta | Upgrade to Pro (unlimited) |
| `acuity_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `acuity_upgrade` (it returns a Stripe Checkout link). Cancel any time with `acuity_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `acuity_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
