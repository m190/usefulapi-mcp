# pretix MCP by usefulapi

Read events, products, quotas, orders, tickets, check-in lists and waiting lists from the hosted pretix service. Check attendees in or out when requested.

**Live endpoint:** `https://pretix.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/pretix/

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://pretix.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http pretix https://pretix.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=pretix&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpretix.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "pretix": {
      "url": "https://pretix.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your pretix account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/pretix/

<!-- connect:end (generated above, edit below) -->

Sign in through pretix OAuth and approve read, write and profile permissions. Only hosted pretix.eu accounts are supported. Your pretix permissions determine which organizers you can access. This server does not create orders, take payments or publish events.

Attendee data passes to your chosen AI client. Revoke access under pretix user settings → Authorized applications. Billing is per pretix user, identified by the normalized login email; changing that email changes the billing identity.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `pretix_list_organizers` | read | List organizers |
| `pretix_get_organizer` | read | Get organizer |
| `pretix_list_events` | read | List events |
| `pretix_get_event` | read | Get event |
| `pretix_list_subevents` | read | List event series dates |
| `pretix_get_subevent` | read | Get event series date |
| `pretix_list_items` | read | List products |
| `pretix_get_item` | read | Get product |
| `pretix_list_quotas` | read | List quotas |
| `pretix_get_quota_availability` | read | Get quota availability |
| `pretix_list_orders` | read | List orders |
| `pretix_get_order` | read | Get order |
| `pretix_list_order_positions` | read | List tickets (order positions) |
| `pretix_list_checkin_lists` | read | List check-in lists |
| `pretix_get_checkin_list_status` | read | Get check-in status |
| `pretix_list_checkin_list_positions` | read | List attendees of a check-in list |
| `pretix_list_waiting_list` | read | List waiting list |
| `pretix_checkin_position` | **write** | Check in a ticket |
| `pretix_usage_status` | meta | Usage status (free-tier meter) |
| `pretix_request_feature` | meta | Request a missing feature |
| `pretix_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `pretix_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per pretix user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `pretix_upgrade` (it returns a Stripe Checkout link). Cancel any time with `pretix_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `pretix_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT.
