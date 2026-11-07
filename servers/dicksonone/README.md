# DicksonOne MCP by usefulapi

Use your [DicksonOne](https://dicksondata.com) account from Claude, Cursor, or any MCP client. List alerts and data loggers, read alert comments, and acknowledge alerts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://dicksonone.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://dicksonone.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http dicksonone https://dicksonone.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=dicksonone&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdicksonone.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "dicksonone": {
      "url": "https://dicksonone.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your DicksonOne credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/dicksonone/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **DicksonOne API key** (DicksonOne → Manage → API Keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `dicksonone_whoami` | read | Who am I |
| `dicksonone_list_alerts` | read | List alerts |
| `dicksonone_get_alert_summary` | read | Alert counts |
| `dicksonone_list_alert_comments` | read | List alert comments |
| `dicksonone_list_locations` | read | List locations |
| `dicksonone_list_devices` | read | List data loggers |
| `dicksonone_acknowledge_alert` | **write** | Acknowledge an alert |
| `dicksonone_usage_status` | meta | Usage status (free-tier meter) |
| `dicksonone_request_feature` | meta | Request a missing feature |
| `dicksonone_upgrade` | meta | Upgrade to Pro or Pro+ |
| `dicksonone_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `dicksonone_upgrade` (it returns a Stripe Checkout link). Cancel any time with `dicksonone_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `dicksonone_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
