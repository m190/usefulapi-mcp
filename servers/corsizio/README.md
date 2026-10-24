# Corsizio MCP by usefulapi

Read Corsizio events, attendees and registrations, including payment status. Read-only.

**Live endpoint:** `https://corsizio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/corsizio

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://corsizio.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http corsizio https://corsizio.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=corsizio&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcorsizio.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "corsizio": {
      "url": "https://corsizio.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Corsizio credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/corsizio/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Corsizio **API Secret Access Key** (Account → Integration Settings; enable the API integration first).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `corsizio_get_account` | read | Get account details |
| `corsizio_list_events` | read | List events |
| `corsizio_get_event` | read | Get event details |
| `corsizio_get_event_with_attendees` | read | Get event with its attendees |
| `corsizio_list_attendees` | read | List attendees (registrations) |
| `corsizio_get_attendee` | read | Get attendee details |
| `corsizio_usage_status` | meta | Usage status (free-tier meter) |
| `corsizio_request_feature` | meta | Request a missing feature |
| `corsizio_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `corsizio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `corsizio_upgrade` (it returns a Stripe Checkout link). Cancel any time with `corsizio_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `corsizio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Corsizio.
