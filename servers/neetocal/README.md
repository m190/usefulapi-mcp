# NeetoCal MCP by usefulapi

Use your [NeetoCal](https://www.neetocal.com) account from Claude, Cursor, or any MCP client. Read scheduling links, open slots, bookings, payments, team members, availabilities and holidays, and reschedule or cancel bookings. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://neetocal.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://neetocal.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http neetocal https://neetocal.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=neetocal&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fneetocal.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "neetocal": {
      "url": "https://neetocal.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your NeetoCal credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/neetocal/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **NeetoCal workspace subdomain** (the `acme` part of `acme.neetocal.com`) and a **NeetoCal API key** of type General, created under Admin panel → API keys. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `neetocal_list_scheduling_links` | read | List scheduling links |
| `neetocal_get_scheduling_link` | read | Get a scheduling link |
| `neetocal_list_meeting_durations` | read | List meeting durations |
| `neetocal_list_available_slots` | read | List available slots |
| `neetocal_list_bookings` | read | List bookings |
| `neetocal_get_booking` | read | Get a booking |
| `neetocal_list_payments` | read | List payments |
| `neetocal_list_team_members` | read | List team members |
| `neetocal_list_availabilities` | read | List availabilities |
| `neetocal_list_holidays` | read | List holidays |
| `neetocal_update_booking` | **write** | Update a booking |
| `neetocal_usage_status` | meta | Usage status (free-tier meter) |
| `neetocal_request_feature` | meta | Request a missing feature |
| `neetocal_upgrade` | meta | Upgrade to Pro or Pro+ |
| `neetocal_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `neetocal_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `neetocal_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `neetocal_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
