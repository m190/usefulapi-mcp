# Planable MCP by usefulapi

Use your [Planable](https://planable.io) account from Claude, Cursor, or any MCP client. Read workspaces, pages, posts, campaigns and metrics, and create post drafts, comments, labels and media uploads. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://planable.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://planable.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http planable https://planable.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=planable&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fplanable.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "planable": {
      "url": "https://planable.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Planable credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/planable/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Planable Public API token** (starts with pln_; an Owner or Admin creates it under Company settings → API tokens). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `planable_list_workspaces` | read | List workspaces |
| `planable_list_pages` | read | List connected pages |
| `planable_get_page_metrics` | read | Get page metrics |
| `planable_list_members` | read | List workspace members |
| `planable_list_posts` | read | List posts |
| `planable_get_post` | read | Get a post |
| `planable_get_post_metrics` | read | Get post metrics |
| `planable_list_post_comments` | read | List post comments |
| `planable_list_campaigns` | read | List campaigns |
| `planable_get_campaign` | read | Get a campaign |
| `planable_list_labels` | read | List labels |
| `planable_list_media` | read | List media |
| `planable_get_media` | read | Get a media upload |
| `planable_create_post` | **write** | Create a post draft |
| `planable_update_post` | **write** | Update a post |
| `planable_request_post_approval` | **write** | Request post approval |
| `planable_add_post_comment` | **write** | Add a post comment |
| `planable_create_label` | **write** | Create a label |
| `planable_upload_media` | **write** | Upload media from URLs |
| `planable_usage_status` | meta | Usage status (free-tier meter) |
| `planable_request_feature` | meta | Request a missing feature |
| `planable_upgrade` | meta | Upgrade to Pro or Pro+ |
| `planable_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `planable_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `planable_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `planable_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
