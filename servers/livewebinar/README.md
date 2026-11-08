# LiveWebinar MCP by usefulapi

Use your [LiveWebinar](https://www.livewebinar.com) account from Claude, Cursor, or any MCP client. Read your webinars, sessions, registrants and polls, and create scheduled webinars. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://livewebinar.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://livewebinar.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http livewebinar https://livewebinar.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=livewebinar&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flivewebinar.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "livewebinar": {
      "url": "https://livewebinar.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your LiveWebinar account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/livewebinar/

<!-- connect:end (generated above, edit below) -->

On first connect you sign in to LiveWebinar and approve access. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `livewebinar_get_account` | read | Get my account |
| `livewebinar_list_webinars` | read | List webinars |
| `livewebinar_get_webinar` | read | Get a webinar |
| `livewebinar_list_sessions` | read | List webinar sessions |
| `livewebinar_list_session_participants` | read | List session participants |
| `livewebinar_list_registrants` | read | List registrants |
| `livewebinar_get_registrant` | read | Get a registrant |
| `livewebinar_list_polls` | read | List webinar polls |
| `livewebinar_list_forms` | read | List forms |
| `livewebinar_list_webhooks` | read | List webhooks |
| `livewebinar_create_webinar` | **write** | Create a scheduled webinar |
| `livewebinar_usage_status` | meta | Usage status (free-tier meter) |
| `livewebinar_request_feature` | meta | Request a missing feature |
| `livewebinar_upgrade` | meta | Upgrade to Pro or Pro+ |
| `livewebinar_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `livewebinar_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `livewebinar_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `livewebinar_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
