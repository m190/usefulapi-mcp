# X (Twitter) MCP by usefulapi

Use your [X](https://x.com) account from Claude, Cursor, or any MCP client. Look up users, read and search posts, list follows and mentions, and publish or delete a post from your account when you ask. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://twitter-x.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://twitter-x.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http twitter-x https://twitter-x.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=twitter-x&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftwitter-x.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "twitter-x": {
      "url": "https://twitter-x.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your X (Twitter) credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/twitter-x/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **X Bearer Token** (create an app in the X Developer Console, developer.x.com). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `twitterx_get_user_by_username` | read | Get a user by username |
| `twitterx_get_user` | read | Get a user by id |
| `twitterx_get_me` | read | Get the authenticated user |
| `twitterx_get_followers` | read | List followers |
| `twitterx_get_following` | read | List accounts a user follows |
| `twitterx_get_post` | read | Get a post by id |
| `twitterx_get_posts` | read | Get several posts by id |
| `twitterx_search_recent_posts` | read | Search recent posts |
| `twitterx_get_user_posts` | read | List a user's posts |
| `twitterx_get_user_mentions` | read | List posts that mention a user |
| `twitterx_get_liked_posts` | read | List posts a user liked |
| `twitterx_create_post` | **write** | Create a post |
| `twitterx_delete_post` | **write** | Delete a post |
| `twitterx_usage_status` | meta | Usage status (free-tier meter) |
| `twitterx_request_feature` | meta | Request a missing feature |
| `twitterx_upgrade` | meta | Upgrade to Pro or Pro+ |
| `twitterx_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `twitterx_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `twitterx_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `twitterx_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
