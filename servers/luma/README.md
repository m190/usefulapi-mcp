# Luma MCP by usefulapi

Use your [Luma](https://luma.com) account from Claude, Cursor, or any MCP client. Read events, guests, tickets and contacts, and set a guest's status. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://luma.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://luma.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http luma https://luma.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=luma&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fluma.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "luma": {
      "url": "https://luma.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Luma credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/luma/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Luma calendar API key** (create it at luma.com/calendar/manage/api-keys after you select the calendar; the calendar needs Luma Plus). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `luma_get_api_key` | read | Get the API key details |
| `luma_get_calendar` | read | Get the calendar |
| `luma_list_calendar_events` | read | List calendar events |
| `luma_lookup_event` | read | Look up an event |
| `luma_get_event` | read | Get an event |
| `luma_list_guests` | read | List guests |
| `luma_get_guest` | read | Get a guest |
| `luma_list_ticket_types` | read | List ticket types |
| `luma_get_ticket_type` | read | Get a ticket type |
| `luma_list_event_coupons` | read | List event coupons |
| `luma_list_calendar_coupons` | read | List calendar coupons |
| `luma_list_blasts` | read | List email blasts |
| `luma_get_blast` | read | Get an email blast |
| `luma_list_contacts` | read | List contacts |
| `luma_list_contact_tags` | read | List contact tags |
| `luma_list_event_tags` | read | List event tags |
| `luma_list_calendar_admins` | read | List calendar admins |
| `luma_list_membership_tiers` | read | List membership tiers |
| `luma_list_webhooks` | read | List webhooks |
| `luma_search_places` | read | Search places |
| `luma_update_guest_status` | **write** | Update a guest's status |
| `luma_usage_status` | meta | Usage status (free-tier meter) |
| `luma_request_feature` | meta | Request a missing feature |
| `luma_upgrade` | meta | Upgrade to Pro or Pro+ |
| `luma_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `luma_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `luma_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `luma_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
