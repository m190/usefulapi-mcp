# Ghost MCP by usefulapi

Use your [Ghost](https://ghost.org) account from Claude, Cursor, or any MCP client. Read posts, members, tiers and newsletters, and create or edit draft posts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://ghost.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ghost.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ghost https://ghost.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ghost&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fghost.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ghost": {
      "url": "https://ghost.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Ghost credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ghost/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Ghost site domain** (for example myblog.ghost.io) and a **Ghost Admin API key** (id:secret) from Ghost Admin → Settings → Integrations → Add custom integration. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ghost_get_site` | read | Get site details |
| `ghost_list_posts` | read | List posts |
| `ghost_get_post` | read | Get a post |
| `ghost_list_pages` | read | List pages |
| `ghost_list_tags` | read | List tags |
| `ghost_list_members` | read | List members |
| `ghost_get_member` | read | Get a member |
| `ghost_list_tiers` | read | List membership tiers |
| `ghost_list_newsletters` | read | List newsletters |
| `ghost_list_offers` | read | List offers |
| `ghost_list_labels` | read | List member labels |
| `ghost_list_users` | read | List staff users |
| `ghost_create_draft_post` | **write** | Create a draft post |
| `ghost_update_post` | **write** | Update a post |
| `ghost_usage_status` | meta | Usage status (free-tier meter) |
| `ghost_request_feature` | meta | Request a missing feature |
| `ghost_upgrade` | meta | Upgrade to Pro or Pro+ |
| `ghost_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `ghost_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `ghost_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `ghost_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
