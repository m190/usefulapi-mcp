<!-- ┌─────────────────────────────────────────────────────────────────────┐
     │ DRY RUN — NOT PUBLISHED. Preview of the public docs for Linear MCP.  │
     │ Links use the production domain (linear.usefulapi.io); that endpoint │
     │ goes live only after the custom-domain cutover. The server currently │
     │ runs (test mode) at linear-mcp.usefulapi.workers.dev.                │
     └─────────────────────────────────────────────────────────────────────┘ -->

# Linear MCP

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
| `linear_get_issue` | read | Get one issue by id |
| `linear_list_teams` | read | List teams |
| `linear_list_projects` | read | List projects (state, progress, target date) |
| `linear_my_issues` | read | Your assigned issues |
| `linear_list_cycles` | read | List cycles |
| `linear_create_issue` | **write** | Create an issue (mutates Linear) |
| `linear_add_comment` | **write** | Add a comment to an issue (mutates Linear) |
| `linear_usage_status` | meta | Show your current tier + usage this month |
| `linear_upgrade` | meta | Upgrade yourself to Pro |
| `linear_upgrade_team` | meta | Upgrade your whole workspace to Team |

Read tools are annotated `readOnlyHint`; the two write tools are annotated `destructiveHint`
so clients can gate them.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |
| **Team** (per workspace) | **$99/mo** or **$990/yr** (2 months free) | Unlimited for all seats |

Upgrade in-client with `linear_upgrade` / `linear_upgrade_team`, or manage billing from the
[homepage](https://usefulapi.io/linear).

## License

MIT — see [LICENSE](../LICENSE). This repo contains documentation only; the server is hosted.
