# TimetableOS MCP by usefulapi

Use your [TimetableOS](https://timetableos.com) account from Claude, Cursor, or any MCP client. It reads members, memberships, classes, sessions, bookings and invoices. It also creates or updates members, books sessions, records check-ins and captures leads. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://timetableos.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://timetableos.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http timetableos https://timetableos.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=timetableos&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftimetableos.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "timetableos": {
      "url": "https://timetableos.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TimetableOS credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/timetableos/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **TimetableOS business API key** (Manage → Developers in TimetableOS; its scopes decide which tools work). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `timetableos_check_key` | read | Check API key |
| `timetableos_list_members` | read | List members |
| `timetableos_get_member` | read | Get member |
| `timetableos_list_memberships` | read | List memberships |
| `timetableos_get_membership` | read | Get membership |
| `timetableos_list_plans` | read | List membership plans |
| `timetableos_get_plan` | read | Get membership plan |
| `timetableos_list_classes` | read | List classes |
| `timetableos_get_class` | read | Get class |
| `timetableos_list_sessions` | read | List sessions |
| `timetableos_get_session` | read | Get session |
| `timetableos_list_bookings` | read | List bookings |
| `timetableos_get_booking` | read | Get booking |
| `timetableos_list_invoices` | read | List invoices |
| `timetableos_get_invoice` | read | Get invoice |
| `timetableos_list_products` | read | List shop products |
| `timetableos_get_product` | read | Get shop product |
| `timetableos_create_member` | **write** | Create member |
| `timetableos_update_member` | **write** | Update member |
| `timetableos_book_member` | **write** | Book member into session |
| `timetableos_cancel_booking` | **write** | Cancel booking |
| `timetableos_record_check_in` | **write** | Record check-in |
| `timetableos_capture_lead` | **write** | Capture lead |
| `timetableos_usage_status` | meta | Usage status (free-tier meter) |
| `timetableos_request_feature` | meta | Request a missing feature |
| `timetableos_upgrade` | meta | Upgrade to Pro or Pro+ |
| `timetableos_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `timetableos_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `timetableos_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `timetableos_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
