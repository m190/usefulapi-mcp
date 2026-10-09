# Hostaway MCP by usefulapi

Use [Hostaway](https://www.hostaway.com) from Claude, Cursor, or any MCP client — read listings, reservations, calendars, conversations, reviews and owner statements, and create reservations, update calendars, message guests and manage tasks.
Hosted, no local install: connect with your own Hostaway credentials.

**Live endpoint:** `https://hostaway.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/hostaway

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://hostaway.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http hostaway https://hostaway.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=hostaway&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhostaway.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "hostaway": {
      "url": "https://hostaway.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Hostaway credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/hostaway/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Hostaway account ID and API key** (Settings → Hostaway API).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `hostaway_list_listings` | read | List listings |
| `hostaway_get_listing` | read | Get one listing |
| `hostaway_list_reservations` | read | List reservations |
| `hostaway_get_reservation` | read | Get one reservation |
| `hostaway_get_reservation_logs` | read | Get reservation change history |
| `hostaway_get_calendar` | read | Get listing calendar |
| `hostaway_calculate_price` | read | Quote a stay |
| `hostaway_list_conversations` | read | List guest conversations |
| `hostaway_list_conversation_messages` | read | Read a conversation |
| `hostaway_list_reviews` | read | List reviews |
| `hostaway_list_tasks` | read | List tasks |
| `hostaway_list_expenses` | read | List expenses and extras |
| `hostaway_list_owner_statements` | read | List owner statements |
| `hostaway_get_owner_statement` | read | Get one owner statement |
| `hostaway_create_reservation` | **write** | Create a reservation |
| `hostaway_update_reservation` | **write** | Update a reservation |
| `hostaway_update_calendar` | **write** | Update listing calendar |
| `hostaway_send_message` | **write** | Send a guest message |
| `hostaway_create_task` | **write** | Create a task |
| `hostaway_update_task` | **write** | Update a task |
| `hostaway_usage_status` | meta | Usage status (free-tier meter) |
| `hostaway_upgrade` | meta | Upgrade to Pro (unlimited) |
| `hostaway_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `hostaway_upgrade` (it returns a Stripe Checkout link). Cancel any time with `hostaway_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `hostaway_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Hostaway.
