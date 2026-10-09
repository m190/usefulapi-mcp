# YouCanBook.me MCP by usefulapi

Manage your YouCanBook.me scheduling from Claude, Cursor, or any MCP client — read and edit bookings, booking pages, appointment types, team members and locations.

**Live endpoint:** `https://youcanbookme.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/youcanbookme

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://youcanbookme.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http youcanbookme https://youcanbookme.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=youcanbookme&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fyoucanbookme.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "youcanbookme": {
      "url": "https://youcanbookme.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your YouCanBook.me credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/youcanbookme/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste **two** values — your **Account ID** and **API key** (YCBM dashboard → My Account → Security). They're sent as HTTP Basic auth; your Account ID is your stable identity for metering.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `list_bookings` | read | List bookings |
| `get_booking` | read | Get a booking |
| `list_profiles` | read | List profiles (booking pages) |
| `get_profile` | read | Get a profile (booking page) |
| `list_team_members` | read | List a profile's team members |
| `list_appointment_types` | read | List a profile's appointment types |
| `list_locations` | read | List a profile's locations |
| `list_available_accounts` | read | List available accounts (calendars) |
| `youcanbookme_request` | read | Raw read request |
| `create_booking` | **write** | Create a booking |
| `update_booking` | **write** | Update a booking |
| `cancel_booking` | **write** | Cancel a booking |
| `update_profile` | **write** | Update a profile (booking page) |
| `create_appointment_type` | **write** | Create an appointment type |
| `update_appointment_type` | **write** | Update an appointment type |
| `create_team_member` | **write** | Add a team member |
| `update_team_member` | **write** | Update a team member |
| `create_location` | **write** | Add a location |
| `youcanbookme_usage_status` | meta | Usage status (free-tier meter) |
| `youcanbookme_upgrade` | meta | Upgrade to Pro (unlimited) |
| `youcanbookme_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `youcanbookme_upgrade` (it returns a Stripe Checkout link). Cancel any time with `youcanbookme_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `youcanbookme_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by YouCanBook.me.
