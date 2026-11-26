# Nolt MCP by usefulapi

Use your [Nolt](https://nolt.io) account from Claude, Cursor, or any MCP client. Read feedback posts, votes, comments and changelogs, and create posts, comments and votes on the board. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://nolt.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://nolt.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http nolt https://nolt.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=nolt&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fnolt.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "nolt": {
      "url": "https://nolt.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Nolt credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/nolt/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Nolt board API key** (board settings → APIs), your **region** (US or EU), and the **SSO type** and **SSO ID** of the board user the assistant acts as. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `nolt_get_board` | read | Get board |
| `nolt_list_users` | read | List users |
| `nolt_get_user` | read | Get user |
| `nolt_list_statuses` | read | List statuses |
| `nolt_list_posts` | read | List posts |
| `nolt_get_post` | read | Get post |
| `nolt_search_posts` | read | Search posts |
| `nolt_list_post_votes` | read | List post votes |
| `nolt_get_comment` | read | Get comment |
| `nolt_list_changelogs` | read | List changelogs |
| `nolt_create_post` | **write** | Create post |
| `nolt_create_comment` | **write** | Create comment |
| `nolt_vote_post` | **write** | Vote on post |
| `nolt_usage_status` | meta | Usage status (free-tier meter) |
| `nolt_request_feature` | meta | Request a missing feature |
| `nolt_upgrade` | meta | Upgrade to Pro or Pro+ |
| `nolt_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `nolt_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `nolt_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `nolt_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
