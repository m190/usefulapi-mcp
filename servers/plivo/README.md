# Plivo MCP by usefulapi

Use your [Plivo](https://www.plivo.com) account from Claude, Cursor, or any MCP client. Read the account, SMS messages and voice calls, send a plain SMS, and place an outbound voice call. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://plivo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://plivo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http plivo https://plivo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=plivo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fplivo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "plivo": {
      "url": "https://plivo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Plivo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/plivo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Plivo Auth ID** and **Plivo Auth Token** from the Plivo console dashboard. Turn off Plivo's API IP restriction for the account, because the server calls from changing addresses. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `plivo_get_account` | read | Get account |
| `plivo_list_messages` | read | List messages |
| `plivo_get_message` | read | Get a message |
| `plivo_send_sms` | **write** | Send an SMS |
| `plivo_list_calls` | read | List calls |
| `plivo_get_call` | read | Get a call |
| `plivo_make_call` | **write** | Make an outbound call |
| `plivo_usage_status` | meta | Usage status (free-tier meter) |
| `plivo_request_feature` | meta | Request a missing feature |
| `plivo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `plivo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `plivo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `plivo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `plivo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
