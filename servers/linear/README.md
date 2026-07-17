# Linear MCP by usefulapi

Manage [Linear](https://linear.app) from Claude, Cursor, or any MCP client — search and
read issues, browse projects/teams/cycles, and create issues and comments. Hosted, no local
install: connect with your Linear account over OAuth.

**Live endpoint:** `https://linear.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/linear

## Add to Claude

```json
{
  "mcpServers": {
    "linear": {
      "url": "https://linear.usefulapi.io/mcp"
    }
  }
}
```

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
| `linear_upgrade_team` | meta | Upgrade workspace to Team (unlimited for everyone) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |
| **Team** (per workspace) | **$99/mo** or **$990/yr** (2 months free) | Unlimited for all seats |

## License

MIT — see [LICENSE](../LICENSE). This repo contains documentation only; the server is hosted.
