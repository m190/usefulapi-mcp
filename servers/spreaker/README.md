# Spreaker MCP by usefulapi

Use your [Spreaker](https://www.spreaker.com) account from Claude, Cursor, or any MCP client. Read your shows, episodes, statistics and comments, and update episode details. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://spreaker.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://spreaker.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http spreaker https://spreaker.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=spreaker&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fspreaker.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "spreaker": {
      "url": "https://spreaker.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your Spreaker account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/spreaker/

<!-- connect:end (generated above, edit below) -->

On first connect you sign in to Spreaker and approve access. The server validates the sign-in and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `spreaker_get_me` | read | Get my profile |
| `spreaker_list_shows` | read | List shows |
| `spreaker_get_show` | read | Get a show |
| `spreaker_list_episodes` | read | List episodes of a show |
| `spreaker_get_episode` | read | Get an episode |
| `spreaker_list_chapters` | read | List episode chapters |
| `spreaker_list_messages` | read | List episode comments |
| `spreaker_get_show_statistics` | read | Get show totals |
| `spreaker_get_episode_statistics` | read | Get episode totals |
| `spreaker_get_play_statistics` | read | Get plays over time |
| `spreaker_get_episode_totals` | read | Get plays per episode |
| `spreaker_get_audience_statistics` | read | Get audience breakdown |
| `spreaker_update_episode` | **write** | Update episode details |
| `spreaker_usage_status` | meta | Usage status (free-tier meter) |
| `spreaker_request_feature` | meta | Request a missing feature |
| `spreaker_upgrade` | meta | Upgrade to Pro or Pro+ |
| `spreaker_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `spreaker_upgrade` (it returns a Stripe Checkout link). Cancel any time with `spreaker_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `spreaker_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
