# Spacebring MCP by usefulapi

Use your [Spacebring](https://www.spacebring.com) account from Claude, Cursor, or any MCP client. Read members, bookings, invoices, plans, events and support tickets, and comment on or set the status of a ticket. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://spacebring.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://spacebring.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http spacebring https://spacebring.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=spacebring&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fspacebring.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "spacebring": {
      "url": "https://spacebring.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Spacebring credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/spacebring/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Spacebring Client ID** and **Client Secret** (Network settings → Developers → API; an owner creates them; the API & webhooks add-on must be active). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `spacebring_list_locations` | read | List locations |
| `spacebring_get_location` | read | Get a location |
| `spacebring_list_memberships` | read | List memberships |
| `spacebring_get_membership` | read | Get a membership |
| `spacebring_list_companies` | read | List companies |
| `spacebring_list_events` | read | List events |
| `spacebring_get_event` | read | Get an event |
| `spacebring_list_resources` | read | List resources |
| `spacebring_list_bookings` | read | List bookings |
| `spacebring_get_booking` | read | Get a booking |
| `spacebring_list_invoices` | read | List invoices |
| `spacebring_get_invoice` | read | Get an invoice |
| `spacebring_list_subscriptions` | read | List subscriptions |
| `spacebring_get_subscription` | read | Get a subscription |
| `spacebring_list_plans` | read | List plans |
| `spacebring_list_shop_orders` | read | List shop orders |
| `spacebring_list_check_ins` | read | List check-ins |
| `spacebring_list_visits` | read | List visitor visits |
| `spacebring_list_support_tickets` | read | List support tickets |
| `spacebring_get_support_ticket` | read | Get a support ticket |
| `spacebring_create_support_ticket_comment` | **write** | Add a comment to a support ticket |
| `spacebring_set_support_ticket_status` | **write** | Set a support ticket status |
| `spacebring_usage_status` | meta | Usage status (free-tier meter) |
| `spacebring_request_feature` | meta | Request a missing feature |
| `spacebring_upgrade` | meta | Upgrade to Pro or Pro+ |
| `spacebring_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `spacebring_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `spacebring_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `spacebring_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
