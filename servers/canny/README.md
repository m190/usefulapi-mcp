# Canny MCP by usefulapi

Use your [Canny](https://canny.io) account from Claude, Cursor, or any MCP client. Read boards, posts, votes, comments, companies and changelog entries, and create posts, comments and status changes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://canny.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://canny.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http canny https://canny.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=canny&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcanny.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "canny": {
      "url": "https://canny.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Canny credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/canny/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Canny secret API key** (from your Canny company settings). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `canny_list_boards` | read | List boards |
| `canny_retrieve_board` | read | Get a board |
| `canny_list_categories` | read | List categories |
| `canny_list_tags` | read | List tags |
| `canny_list_groups` | read | List groups |
| `canny_list_posts` | read | List posts |
| `canny_retrieve_post` | read | Get a post |
| `canny_list_comments` | read | List comments |
| `canny_list_votes` | read | List votes |
| `canny_list_status_changes` | read | List status changes |
| `canny_list_users` | read | List users |
| `canny_retrieve_user` | read | Get a user |
| `canny_list_companies` | read | List companies |
| `canny_list_changelog_entries` | read | List changelog entries |
| `canny_create_post` | **write** | Create a post |
| `canny_change_post_status` | **write** | Change a post's status |
| `canny_create_comment` | **write** | Add a comment to a post |
| `canny_usage_status` | meta | Usage status (free-tier meter) |
| `canny_request_feature` | meta | Request a missing feature |
| `canny_upgrade` | meta | Upgrade to Pro or Pro+ |
| `canny_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `canny_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `canny_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `canny_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
