# Swoogo MCP by usefulapi

Use your [Swoogo](https://swoogo.events) account from Claude, Cursor, or any MCP client. Read events, registrants, sessions, speakers, sponsors, tracks and attendance, without changing anything. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://swoogo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://swoogo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http swoogo https://swoogo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=swoogo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fswoogo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "swoogo": {
      "url": "https://swoogo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Swoogo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/swoogo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Swoogo consumer key** and **consumer secret** (My Profile → API Credentials). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `swoogo_list_events` | read | List events |
| `swoogo_get_event` | read | Get an event |
| `swoogo_list_registrants` | read | List registrants |
| `swoogo_get_registrant` | read | Get a registrant |
| `swoogo_list_sessions` | read | List sessions |
| `swoogo_get_session` | read | Get a session |
| `swoogo_list_speakers` | read | List speakers |
| `swoogo_list_sponsors` | read | List sponsors |
| `swoogo_list_tracks` | read | List tracks |
| `swoogo_list_locations` | read | List locations |
| `swoogo_list_registrant_types` | read | List registration types |
| `swoogo_list_transactions` | read | List transactions |
| `swoogo_list_session_attendance` | read | List session attendance |
| `swoogo_usage_status` | meta | Usage status (free-tier meter) |
| `swoogo_request_feature` | meta | Request a missing feature |
| `swoogo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `swoogo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `swoogo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `swoogo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `swoogo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
