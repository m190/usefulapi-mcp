# Countly MCP by usefulapi

Use your [Countly](https://count.ly) account from Claude, Cursor, or any MCP client. It reads the dashboard summary, sessions, countries, breakdowns, top lists and user loyalty of your apps. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://countly.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://countly.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http countly https://countly.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=countly&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcountly.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "countly": {
      "url": "https://countly.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Countly credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/countly/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **API key** (Management → API Key in your Countly dashboard) and, for self-hosted Countly, your **Countly host**. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `countly_get_current_user` | read | Current Countly user |
| `countly_list_apps` | read | List apps |
| `countly_get_app` | read | Get app details |
| `countly_get_dashboard` | read | Dashboard summary |
| `countly_get_sessions` | read | Sessions over time |
| `countly_get_countries` | read | Users by country |
| `countly_get_metric` | read | Metric breakdown |
| `countly_get_tops` | read | Top lists |
| `countly_get_loyalty` | read | User loyalty |
| `countly_usage_status` | meta | Usage status (free-tier meter) |
| `countly_request_feature` | meta | Request a missing feature |
| `countly_upgrade` | meta | Upgrade to Pro or Pro+ |
| `countly_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `countly_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `countly_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `countly_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
