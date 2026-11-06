# GoTo Webinar MCP by usefulapi

Use your [GoTo Webinar](https://www.goto.com) account from Claude, Cursor, or any MCP client. It reads webinars, registrants, attendance and recordings, and it can register a person or schedule a webinar. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://goto-webinar.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://goto-webinar.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http goto-webinar https://goto-webinar.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=goto-webinar&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgoto-webinar.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "goto-webinar": {
      "url": "https://goto-webinar.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your GoTo Webinar account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/goto-webinar/

<!-- connect:end (generated above, edit below) -->

On first connect you sign in to GoTo Webinar and approve access.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `goto_webinar_list_webinars` | read | List webinars |
| `goto_webinar_get_webinar` | read | Get webinar |
| `goto_webinar_list_sessions` | read | List webinar sessions |
| `goto_webinar_get_performance` | read | Get webinar performance |
| `goto_webinar_list_registrants` | read | List registrants |
| `goto_webinar_get_registrant` | read | Get registrant |
| `goto_webinar_list_registration_fields` | read | List registration fields |
| `goto_webinar_create_registrant` | **write** | Register a person for a webinar |
| `goto_webinar_list_attendees` | read | List attendees |
| `goto_webinar_list_panelists` | read | List panelists |
| `goto_webinar_list_recordings` | read | List recordings |
| `goto_webinar_create_webinar` | **write** | Schedule a webinar |
| `goto_webinar_usage_status` | meta | Usage status (free-tier meter) |
| `goto_webinar_request_feature` | meta | Request a missing feature |
| `goto_webinar_upgrade` | meta | Upgrade to Pro or Pro+ |
| `goto_webinar_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `goto_webinar_upgrade` (it returns a Stripe Checkout link). Cancel any time with `goto_webinar_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `goto_webinar_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
