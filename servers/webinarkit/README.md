# WebinarKit MCP by usefulapi

Use your [WebinarKit](https://webinarkit.com) account from Claude, Cursor, or any MCP client. Read webinars, their dates, series, meetings and white-label sub-accounts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://webinarkit.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://webinarkit.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http webinarkit https://webinarkit.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=webinarkit&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwebinarkit.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "webinarkit": {
      "url": "https://webinarkit.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your WebinarKit credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/webinarkit/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **WebinarKit API key** (WebinarKit → Settings, API key). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `webinarkit_list_webinars` | read | List webinars |
| `webinarkit_get_webinar_dates` | read | Get webinar dates |
| `webinarkit_list_series` | read | List webinar series |
| `webinarkit_list_meetings` | read | List meetings |
| `webinarkit_get_account` | read | Get a white-label sub-account |
| `webinarkit_usage_status` | meta | Usage status (free-tier meter) |
| `webinarkit_request_feature` | meta | Request a missing feature |
| `webinarkit_upgrade` | meta | Upgrade to Pro or Pro+ |
| `webinarkit_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `webinarkit_upgrade` (it returns a Stripe Checkout link). Cancel any time with `webinarkit_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `webinarkit_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
