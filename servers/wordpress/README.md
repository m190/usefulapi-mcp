# WordPress MCP by usefulapi

Use your [WordPress](https://wordpress.org) account from Claude, Cursor, or any MCP client. Read posts, pages, comments, categories and media, create draft posts, update posts and moderate comments on one site. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://wordpress.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://wordpress.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http wordpress https://wordpress.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=wordpress&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwordpress.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "wordpress": {
      "url": "https://wordpress.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your WordPress credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/wordpress/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **site address** (for example https://blog.example.com), your **WordPress user name**, and an **Application Password** (wp-admin → Users → Profile → Application Passwords). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `wordpress_get_site` | read | Get site information |
| `wordpress_get_current_user` | read | Get the logged-in user |
| `wordpress_list_posts` | read | List posts |
| `wordpress_get_post` | read | Get a post |
| `wordpress_list_pages` | read | List pages |
| `wordpress_get_page` | read | Get a page |
| `wordpress_list_comments` | read | List comments |
| `wordpress_list_users` | read | List users |
| `wordpress_list_categories` | read | List categories |
| `wordpress_list_tags` | read | List tags |
| `wordpress_list_media` | read | List media |
| `wordpress_create_draft_post` | **write** | Create a draft post |
| `wordpress_update_post` | **write** | Update a post |
| `wordpress_set_comment_status` | **write** | Moderate a comment |
| `wordpress_usage_status` | meta | Usage status (free-tier meter) |
| `wordpress_request_feature` | meta | Request a missing feature |
| `wordpress_upgrade` | meta | Upgrade to Pro or Pro+ |
| `wordpress_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `wordpress_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `wordpress_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `wordpress_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
