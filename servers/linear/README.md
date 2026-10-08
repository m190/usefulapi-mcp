# Linear MCP by usefulapi

Manage [Linear](https://linear.app) from Claude, Cursor, or any MCP client — search and
read issues, browse projects/teams/cycles, and create issues and comments. Hosted, no local
install: connect with your Linear account over OAuth.

**Live endpoint:** `https://linear.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/linear

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://linear.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http linear https://linear.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=linear&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flinear.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "linear": {
      "url": "https://linear.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/linear/

<!-- connect:end (generated above, edit below) -->

On first connect you'll be sent to Linear to authorize; your token is stored per-user and
scoped to you. No API keys to paste.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `linear_search_issues` | read | Search / filter issues |
| `linear_get_issue` | read | Get one issue |
| `linear_list_teams` | read | List teams |
| `linear_list_projects` | read | List projects |
| `linear_my_issues` | read | My assigned issues |
| `linear_list_cycles` | read | List cycles |
| `linear_create_issue` | **write** | Create issue (WRITE — mutates Linear) |
| `linear_add_comment` | **write** | Add comment (WRITE — mutates Linear) |
| `linear_usage_status` | meta | Usage status (free-tier meter) |
| `linear_upgrade` | meta | Upgrade to Pro (unlimited) |
| `linear_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `linear_upgrade` (it returns a Stripe Checkout link). Cancel any time with `linear_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `linear_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). This repo contains documentation only; the server is hosted.
