# Momence MCP by usefulapi

Use [Momence](https://momence.com) from Claude, Cursor, or any MCP client — look up members, classes, rosters and memberships, and book, check in, waitlist or cancel from chat.
Hosted, no local install: connect with your own Momence credentials.

**Live endpoint:** `https://momence.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/momence

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://momence.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http momence https://momence.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=momence&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmomence.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "momence": {
      "url": "https://momence.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Momence credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/momence/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Momence API client id and secret** (Apps & Integrations > Developer API) plus a **staff email and password**.
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `momence_get_current_user` | read | Get the logged-in user |
| `momence_list_members` | read | List members |
| `momence_get_member` | read | Get one member |
| `momence_list_member_session_bookings` | read | List a member's class bookings |
| `momence_list_member_appointments` | read | List a member's appointments |
| `momence_list_member_notes` | read | List a member's notes |
| `momence_list_member_memberships` | read | List a member's active memberships |
| `momence_list_sessions` | read | List sessions (classes) |
| `momence_get_session` | read | Get one session |
| `momence_list_session_bookings` | read | List a session's bookings (roster) |
| `momence_list_appointments` | read | List appointment reservations |
| `momence_list_memberships` | read | List membership plans |
| `momence_list_tags` | read | List customer tags |
| `momence_list_customer_leads` | read | List customer leads |
| `momence_list_lead_sources` | read | List lead sources |
| `momence_list_lead_stages` | read | List lead stages |
| `momence_create_member` | **write** | Add a member |
| `momence_update_member` | **write** | Update a member's name, email or phone |
| `momence_set_member_tag` | **write** | Tag or untag a member |
| `momence_book_member_free` | **write** | Book a member into a session for free |
| `momence_add_member_to_waitlist` | **write** | Add a member to a session waitlist |
| `momence_set_booking_check_in` | **write** | Check a booking in or out |
| `momence_cancel_session_booking` | **write** | Cancel one session booking |
| `momence_usage_status` | meta | Usage status (free-tier meter) |
| `momence_request_feature` | meta | Request a missing feature |
| `momence_upgrade` | meta | Upgrade to Pro (unlimited) |
| `momence_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `momence_upgrade` (it returns a Stripe Checkout link). Cancel any time with `momence_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `momence_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Momence.
