# TrekkSoft MCP by usefulapi

Use your [TrekkSoft](https://www.trekksoft.com) account from Claude, Cursor, or any MCP client. Read tours and activities, bookings, guests, departures with open seats and shop items. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://trekksoft.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://trekksoft.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http trekksoft https://trekksoft.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=trekksoft&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftrekksoft.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "trekksoft": {
      "url": "https://trekksoft.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TrekkSoft credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/trekksoft/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **API client id and client secret**. TrekkSoft issues the key pair for your account: ask api@trekksoft.com. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `trekksoft_list_activities` | read | List activities |
| `trekksoft_get_activity` | read | Get an activity |
| `trekksoft_list_bookings` | read | List bookings |
| `trekksoft_get_booking` | read | Get a booking |
| `trekksoft_list_guests` | read | List guests |
| `trekksoft_get_guest` | read | Get a guest |
| `trekksoft_list_availabilities` | read | List availabilities |
| `trekksoft_list_activity_availabilities` | read | List availabilities of one activity |
| `trekksoft_list_merchants` | read | List merchants |
| `trekksoft_list_shop_items` | read | List shop items |
| `trekksoft_usage_status` | meta | Usage status (free-tier meter) |
| `trekksoft_request_feature` | meta | Request a missing feature |
| `trekksoft_upgrade` | meta | Upgrade to Pro or Pro+ |
| `trekksoft_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `trekksoft_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `trekksoft_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `trekksoft_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
