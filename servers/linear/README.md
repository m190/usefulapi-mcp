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

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your Linear account.

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
| `linear_request_feature` | meta | Request a missing feature |
| `linear_upgrade` | meta | Upgrade to Pro or Pro+ |
| `linear_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `linear_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `linear_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `linear_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). This repo contains documentation only; the server is hosted.
