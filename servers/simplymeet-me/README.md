# SimplyMeet.me MCP by usefulapi

Use your [SimplyMeet.me](https://simplymeet.me) account from Claude, Cursor, or any MCP client. It reads event types, open slots, bookings and events, and cancels booked events. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://simplymeet-me.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://simplymeet-me.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http simplymeet-me https://simplymeet-me.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=simplymeet-me&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsimplymeet-me.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "simplymeet-me": {
      "url": "https://simplymeet-me.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SimplyMeet.me credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/simplymeet-me/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **SimplyMeet.me API key** (Integrations in SimplyMeet.me; API access needs a paid plan). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `simplymeet_get_current_user` | read | Get the current user |
| `simplymeet_list_event_types` | read | List event types |
| `simplymeet_get_event_type` | read | Get an event type |
| `simplymeet_get_event_type_availability` | read | Get free slots for an event type |
| `simplymeet_list_events` | read | List events |
| `simplymeet_get_event` | read | Get an event |
| `simplymeet_cancel_event` | **write** | Cancel an event |
| `simplymeet_usage_status` | meta | Usage status (free-tier meter) |
| `simplymeet_request_feature` | meta | Request a missing feature |
| `simplymeet_upgrade` | meta | Upgrade to Pro or Pro+ |
| `simplymeet_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `simplymeet_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `simplymeet_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `simplymeet_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
