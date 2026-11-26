# Zeevou MCP by usefulapi

Use your [Zeevou](https://www.zeevou.com) account from Claude, Cursor, or any MCP client. Read properties, units, bookings, guests, rate plans, tasks, reviews and booking channels (read-only). Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://zeevou.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://zeevou.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http zeevou https://zeevou.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=zeevou&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fzeevou.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "zeevou": {
      "url": "https://zeevou.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Zeevou credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/zeevou/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **client ID** and a **client secret** (Zeevou → Account → OAuth Credentials → Generate Credentials; needs the Additional Integrations module). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `zeevou_list_properties` | read | List properties |
| `zeevou_get_property` | read | Get a property |
| `zeevou_list_unit_types` | read | List unit types |
| `zeevou_get_unit_type` | read | Get a unit type |
| `zeevou_list_units` | read | List units |
| `zeevou_get_unit` | read | Get a unit |
| `zeevou_list_bookings` | read | List bookings |
| `zeevou_get_booking` | read | Get a booking |
| `zeevou_list_guests` | read | List guests |
| `zeevou_get_guest` | read | Get a guest |
| `zeevou_list_rate_plans` | read | List rate plans |
| `zeevou_list_tasks` | read | List tasks |
| `zeevou_get_task` | read | Get a task |
| `zeevou_list_reviews` | read | List reviews |
| `zeevou_list_channels` | read | List booking channels |
| `zeevou_usage_status` | meta | Usage status (free-tier meter) |
| `zeevou_request_feature` | meta | Request a missing feature |
| `zeevou_upgrade` | meta | Upgrade to Pro or Pro+ |
| `zeevou_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `zeevou_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `zeevou_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `zeevou_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
