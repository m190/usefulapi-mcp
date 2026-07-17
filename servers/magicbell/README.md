# MagicBell MCP by usefulapi

Query and manage your MagicBell notification infrastructure from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your MagicBell API key.

**Live endpoint:** `https://magicbell.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/magicbell

## Add to Claude

```json
{
  "mcpServers": {
    "magicbell": {
      "url": "https://magicbell.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your MagicBell API key (and secret). It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `magicbell_list_broadcasts` | read | List broadcasts |
| `magicbell_get_broadcast` | read | Get a broadcast |
| `magicbell_list_users` | read | List users |
| `magicbell_get_user` | read | Get a user |
| `magicbell_list_events` | read | List events |
| `magicbell_get_event` | read | Get an event |
| `magicbell_list_workflows` | read | List workflows |
| `magicbell_list_workflow_runs` | read | List workflow runs |
| `magicbell_get_workflow_run` | read | Get a workflow run |
| `magicbell_list_channels` | read | List channels |
| `magicbell_list_integrations` | read | List integrations |
| `magicbell_create_user` | **write** | Create a user |
| `magicbell_update_user` | **write** | Update a user |
| `magicbell_usage_status` | meta | Usage status (free-tier meter) |
| `magicbell_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
