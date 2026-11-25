# Cobot MCP by usefulapi

Use your [Cobot](https://www.cobot.me) account from Claude, Cursor, or any MCP client. Read memberships, contacts, invoices, bookings and events, and check members in, book resources or open help desk issues. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://cobot.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cobot.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cobot https://cobot.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cobot&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcobot.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cobot": {
      "url": "https://cobot.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your Cobot account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cobot/

<!-- connect:end (generated above, edit below) -->

On first connect you sign in to Cobot and approve access. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cobot_get_current_user` | read | Get current user |
| `cobot_get_space` | read | Get a space |
| `cobot_get_space_subscription` | read | Get the space subscription |
| `cobot_list_memberships` | read | List memberships |
| `cobot_search_memberships` | read | Search memberships |
| `cobot_get_membership` | read | Get a membership |
| `cobot_list_membership_plans` | read | List membership plans |
| `cobot_list_teams` | read | List teams |
| `cobot_list_contacts` | read | List contacts |
| `cobot_search_contacts` | read | Search contacts |
| `cobot_get_contact` | read | Get a contact |
| `cobot_list_invoices` | read | List invoices |
| `cobot_get_invoice` | read | Get an invoice |
| `cobot_list_products` | read | List products |
| `cobot_list_resources` | read | List resources |
| `cobot_get_resource_availability` | read | Get resource availability |
| `cobot_list_bookings` | read | List bookings |
| `cobot_get_booking` | read | Get a booking |
| `cobot_list_events` | read | List events |
| `cobot_get_event` | read | Get an event |
| `cobot_list_event_attendances` | read | List event attendees |
| `cobot_list_check_ins` | read | List check-ins for a membership |
| `cobot_list_current_check_ins` | read | List current check-ins |
| `cobot_list_booking_credits` | read | List booking credits |
| `cobot_list_drop_in_passes` | read | List drop-in passes |
| `cobot_check_in_membership` | **write** | Check a membership in |
| `cobot_check_out_membership` | **write** | Check a membership out |
| `cobot_book_resource_as_member` | **write** | Book a resource for a membership |
| `cobot_create_issue` | **write** | Create a help desk issue |
| `cobot_usage_status` | meta | Usage status (free-tier meter) |
| `cobot_request_feature` | meta | Request a missing feature |
| `cobot_upgrade` | meta | Upgrade to Pro or Pro+ |
| `cobot_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `cobot_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `cobot_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `cobot_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
