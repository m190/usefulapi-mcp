# Hello Club MCP by usefulapi

Use [Hello Club](https://helloclub.com) from Claude, Cursor, or any MCP client — read your club's members, membership types, events and attendees, bookings, transactions, check-ins and access logs, and add new members and charges.
Hosted, no local install: connect with your Hello Club API key.

**Live endpoint:** `https://hello-club.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/hello-club

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://hello-club.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http hello-club https://hello-club.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=hello-club&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhello-club.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "hello-club": {
      "url": "https://hello-club.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Hello Club credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/hello-club/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `hello_club_list_members` | read | List members |
| `hello_club_get_member` | read | Get member |
| `hello_club_list_membership_types` | read | List membership types |
| `hello_club_get_membership_type` | read | Get membership type |
| `hello_club_list_events` | read | List events |
| `hello_club_get_event` | read | Get event |
| `hello_club_list_event_attendees` | read | List event attendees |
| `hello_club_list_bookings` | read | List bookings |
| `hello_club_list_transactions` | read | List transactions |
| `hello_club_get_transaction` | read | Get transaction |
| `hello_club_list_check_ins` | read | List check-ins |
| `hello_club_list_access_logs` | read | List door access logs |
| `hello_club_create_member` | **write** | Create member |
| `hello_club_create_transaction` | **write** | Create transaction |
| `hello_club_usage_status` | meta | Usage status (free-tier meter) |
| `hello_club_request_feature` | meta | Request a missing feature |
| `hello_club_upgrade` | meta | Upgrade to Pro or Pro+ |
| `hello_club_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per club) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per club) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `hello_club_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `hello_club_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `hello_club_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Hello Club.
