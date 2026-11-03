# Disqus MCP by usefulapi

Use your [Disqus](https://disqus.com) account from Claude, Cursor, or any MCP client. Read forums, threads, comments and users, and moderate comments and threads. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://disqus.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://disqus.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http disqus https://disqus.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=disqus&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdisqus.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "disqus": {
      "url": "https://disqus.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Disqus credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/disqus/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Disqus application secret key** (disqus.com/api/applications) and, if you enabled OAuth, an optional **access token**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `disqus_get_forum` | read | Get forum |
| `disqus_list_forum_threads` | read | List forum threads |
| `disqus_list_forum_posts` | read | List forum comments |
| `disqus_list_posts` | read | List comments |
| `disqus_get_thread` | read | Get thread |
| `disqus_list_thread_posts` | read | List thread comments |
| `disqus_get_post` | read | Get comment |
| `disqus_get_user` | read | Get user |
| `disqus_list_most_active_users` | read | List most active users |
| `disqus_approve_posts` | **write** | Approve comments |
| `disqus_mark_posts_spam` | **write** | Mark comments as spam |
| `disqus_delete_posts` | **write** | Delete comments |
| `disqus_close_thread` | **write** | Close thread |
| `disqus_open_thread` | **write** | Open thread |
| `disqus_usage_status` | meta | Usage status (free-tier meter) |
| `disqus_request_feature` | meta | Request a missing feature |
| `disqus_upgrade` | meta | Upgrade to Pro or Pro+ |
| `disqus_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `disqus_upgrade` (it returns a Stripe Checkout link). Cancel any time with `disqus_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `disqus_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
