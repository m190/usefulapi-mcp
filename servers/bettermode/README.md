# Bettermode MCP by usefulapi

Manage [Bettermode](https://bettermode.com) communities from Claude, Cursor, or any MCP client — read your
community network, spaces, members and posts, and run full-text search across the community. Hosted, no
local install: connect with your Bettermode API token.

**Live endpoint:** `https://bettermode.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "bettermode": {
      "url": "https://bettermode.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Bettermode API token** (Bettermode → Settings → API tokens).
It's validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bettermode_get_network` | read | Get network |
| `bettermode_list_spaces` | read | List spaces |
| `bettermode_get_space` | read | Get space |
| `bettermode_list_members` | read | List members |
| `bettermode_get_member` | read | Get member |
| `bettermode_list_posts` | read | List posts |
| `bettermode_get_post` | read | Get post |
| `bettermode_search` | read | Search |
| `bettermode_usage_status` | meta | Usage status (free-tier meter) |
| `bettermode_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
