# Groove MCP by usefulapi

Manage [Groove](https://www.groovehq.com) support conversations from Claude, Cursor, or any MCP client —
read shared-inbox conversations, contacts, agents, channels, tags, folders and teams, and close, open,
snooze, star, assign or tag conversations. Hosted, no local install: connect with your Groove API token.

**Live endpoint:** `https://groove-hq.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "groove-hq": {
      "url": "https://groove-hq.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Groove API token** (Groove → Settings → API).
It's validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `groove_list_conversations` | read | List conversations |
| `groove_get_conversation` | read | Get conversation |
| `groove_list_contacts` | read | List contacts |
| `groove_get_contact` | read | Get contact |
| `groove_list_agents` | read | List agents |
| `groove_list_channels` | read | List channels |
| `groove_list_tags` | read | List tags |
| `groove_list_folders` | read | List folders |
| `groove_list_teams` | read | List teams |
| `groove_close_conversation` | **write** | Close conversation |
| `groove_open_conversation` | **write** | Open conversation |
| `groove_snooze_conversation` | **write** | Snooze conversation |
| `groove_star_conversation` | **write** | Star conversation |
| `groove_assign_conversation` | **write** | Assign conversation |
| `groove_tag_conversation` | **write** | Tag conversation |
| `groove_untag_conversation` | **write** | Untag conversation |
| `groove_usage_status` | meta | Usage status (free-tier meter) |
| `groove_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
