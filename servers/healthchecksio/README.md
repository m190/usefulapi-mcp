# Healthchecks.io MCP by usefulapi

Manage [Healthchecks.io](https://healthchecks.io) from Claude, Cursor, or any MCP client — manage cron/heartbeat checks, read pings and flips, and pause/resume/delete checks. Hosted, no local install: connect with your Healthchecks.io API token.

**Live endpoint:** `https://healthchecksio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "healthchecksio": {
      "url": "https://healthchecksio.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Healthchecks.io API token** (Healthchecks.io → Settings → API Access).
It's validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `healthchecksio_list_checks` | read | List checks |
| `healthchecksio_get_check` | read | Get check |
| `healthchecksio_list_pings` | read | List pings |
| `healthchecksio_get_ping_body` | read | Get ping body |
| `healthchecksio_list_flips` | read | List flips |
| `healthchecksio_list_integrations` | read | List integrations |
| `healthchecksio_list_badges` | read | List badges |
| `healthchecksio_create_check` | **write** | Create check |
| `healthchecksio_update_check` | **write** | Update check |
| `healthchecksio_pause_check` | **write** | Pause check |
| `healthchecksio_resume_check` | **write** | Resume check |
| `healthchecksio_delete_check` | **write** | Delete check |
| `healthchecksio_usage_status` | meta | Usage status (free-tier meter) |
| `healthchecksio_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
