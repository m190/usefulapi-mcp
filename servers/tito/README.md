# Tito MCP by usefulapi

Use [Tito](https://ti.to) from Claude, Cursor, or any MCP client — look up events, releases, tickets, registrations, discount codes, check-in lists and refunds, and edit tickets and codes.
Hosted, no local install: connect with your own Tito credentials.

**Live endpoint:** `https://tito.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/tito

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://tito.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http tito https://tito.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=tito&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftito.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "tito": {
      "url": "https://tito.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Tito credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/tito/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Tito Admin API token** (id.tito.io → API access), plus an optional default account slug.
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `tito_whoami` | read | Check the API token |
| `tito_list_events` | read | List events |
| `tito_get_event` | read | Get one event |
| `tito_list_releases` | read | List releases (ticket types) |
| `tito_get_release` | read | Get one release |
| `tito_list_tickets` | read | List tickets (attendees) |
| `tito_get_ticket` | read | Get one ticket |
| `tito_list_registrations` | read | List registrations (orders) |
| `tito_get_registration` | read | Get one registration |
| `tito_list_discount_codes` | read | List discount codes |
| `tito_get_discount_code` | read | Get one discount code |
| `tito_list_activities` | read | List activities |
| `tito_list_questions` | read | List questions |
| `tito_list_answers` | read | List answers to a question |
| `tito_list_checkin_lists` | read | List check-in lists |
| `tito_list_refunds` | read | List refunds |
| `tito_create_discount_code` | **write** | Create a discount code |
| `tito_update_discount_code` | **write** | Update a discount code |
| `tito_create_ticket` | **write** | Issue a ticket manually |
| `tito_update_ticket` | **write** | Update a ticket's attendee details |
| `tito_usage_status` | meta | Usage status (free-tier meter) |
| `tito_upgrade` | meta | Upgrade to Pro (unlimited) |
| `tito_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `tito_upgrade` (it returns a Stripe Checkout link). Cancel any time with `tito_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `tito_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Tito.
