# Tokeet MCP by usefulapi

Use [Tokeet](https://www.tokeet.com) from Claude, Cursor, or any MCP client — rentals, availability, rates, guests, tasks, expenses and templates, plus guest notes and tasks.
Hosted, no local install: connect with your own Tokeet credentials.

**Live endpoint:** `https://tokeet.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/tokeet

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://tokeet.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http tokeet https://tokeet.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=tokeet&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftokeet.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "tokeet": {
      "url": "https://tokeet.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Tokeet credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/tokeet/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `tokeet_get_current_user` | read | Get current user |
| `tokeet_list_users` | read | List users |
| `tokeet_get_user` | read | Get user |
| `tokeet_list_rentals` | read | List rentals |
| `tokeet_get_rental` | read | Get rental |
| `tokeet_list_rentals_by_owner` | read | List rentals by owner |
| `tokeet_get_rental_availability` | read | Get rental availability |
| `tokeet_list_rates` | read | List rental rates |
| `tokeet_list_guests` | read | List guests |
| `tokeet_get_guest` | read | Get guest |
| `tokeet_get_guest_by_email` | read | Get guest by email |
| `tokeet_list_tasks` | read | List tasks |
| `tokeet_get_task` | read | Get task |
| `tokeet_list_expenses` | read | List expenses |
| `tokeet_get_expense` | read | Get expense |
| `tokeet_list_templates` | read | List message templates |
| `tokeet_get_template` | read | Get message template |
| `tokeet_list_triggers` | read | List automation triggers |
| `tokeet_create_guest` | **write** | Create guest |
| `tokeet_update_guest` | **write** | Update guest |
| `tokeet_add_guest_note` | **write** | Add guest note |
| `tokeet_record_guest_interaction` | **write** | Record guest interaction |
| `tokeet_create_task` | **write** | Create task |
| `tokeet_update_task` | **write** | Update task |
| `tokeet_usage_status` | meta | Usage status (free-tier meter) |
| `tokeet_request_feature` | meta | Request a missing feature |
| `tokeet_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `tokeet_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `tokeet_upgrade` (it returns a Stripe Checkout link). Cancel any time with `tokeet_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `tokeet_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Tokeet.
