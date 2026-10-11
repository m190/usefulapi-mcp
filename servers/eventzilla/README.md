# Eventzilla MCP by usefulapi

Use [Eventzilla](https://www.eventzilla.net) from Claude, Cursor, or any MCP client — events, ticket types, transactions, attendees and users, plus opening or closing ticket sales.
Hosted, no local install: connect with your own Eventzilla credentials.

**Live endpoint:** `https://eventzilla.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/eventzilla

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://eventzilla.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http eventzilla https://eventzilla.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=eventzilla&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Feventzilla.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "eventzilla": {
      "url": "https://eventzilla.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Eventzilla credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/eventzilla/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `eventzilla_list_events` | read | List events |
| `eventzilla_get_event` | read | Get event |
| `eventzilla_list_event_transactions` | read | List event transactions |
| `eventzilla_list_event_attendees` | read | List event attendees |
| `eventzilla_list_ticket_types` | read | List ticket types |
| `eventzilla_list_categories` | read | List event categories |
| `eventzilla_get_attendee` | read | Get attendee |
| `eventzilla_get_transaction` | read | Get transaction |
| `eventzilla_list_users` | read | List organizers |
| `eventzilla_get_user` | read | Get organizer |
| `eventzilla_toggle_event_sales` | **write** | Turn ticket sales on or off |
| `eventzilla_usage_status` | meta | Usage status (free-tier meter) |
| `eventzilla_request_feature` | meta | Request a missing feature |
| `eventzilla_upgrade` | meta | Upgrade to Pro (unlimited) |
| `eventzilla_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `eventzilla_upgrade` (it returns a Stripe Checkout link). Cancel any time with `eventzilla_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `eventzilla_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Eventzilla.
