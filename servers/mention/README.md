# Mention MCP by usefulapi

Use your [Mention](https://mention.com) account from Claude, Cursor, or any MCP client. Read alerts, mentions, authors, statistics and shares. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://mention.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://mention.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http mention https://mention.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=mention&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmention.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "mention": {
      "url": "https://mention.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Mention credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/mention/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Mention access token**, which you find in the app settings. The API add-on must be on your Mention plan. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `mention_get_my_account` | read | Get my account |
| `mention_list_alerts` | read | List alerts |
| `mention_get_alert` | read | Get an alert |
| `mention_list_mentions` | read | List mentions |
| `mention_get_mention` | read | Get a mention |
| `mention_get_mention_task` | read | Get a mention task |
| `mention_list_authors` | read | List authors |
| `mention_get_stats` | read | Get statistics |
| `mention_list_tags` | read | List alert tags |
| `mention_get_alert_preferences` | read | Get alert preferences |
| `mention_list_shares` | read | List alert shares |
| `mention_usage_status` | meta | Usage status (free-tier meter) |
| `mention_request_feature` | meta | Request a missing feature |
| `mention_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `mention_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `mention_upgrade` (it returns a Stripe Checkout link). Cancel any time with `mention_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `mention_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
