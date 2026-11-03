# Demio MCP by usefulapi

Use your [Demio](https://www.demio.com) account from Claude, Cursor, or any MCP client. Read webinar events, sessions and participants, and register attendees for a webinar. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://demio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://demio.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http demio https://demio.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=demio&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdemio.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "demio": {
      "url": "https://demio.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Demio credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/demio/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Demio API key** and your **Demio API secret** (Account Settings → API; only the account Owner can create them). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `demio_check_connection` | read | Check connection |
| `demio_list_events` | read | List events |
| `demio_get_event` | read | Get event |
| `demio_get_event_session` | read | Get event session |
| `demio_list_participants` | read | List session participants |
| `demio_register_attendee` | **write** | Register attendee |
| `demio_usage_status` | meta | Usage status (free-tier meter) |
| `demio_request_feature` | meta | Request a missing feature |
| `demio_upgrade` | meta | Upgrade to Pro or Pro+ |
| `demio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `demio_upgrade` (it returns a Stripe Checkout link). Cancel any time with `demio_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `demio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
