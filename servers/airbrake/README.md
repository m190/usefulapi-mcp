# Airbrake MCP by usefulapi

Use [Airbrake](https://airbrake.io) from Claude, Cursor, or any MCP client — read Airbrake projects, error groups, notices, deploys and stats; mute or unmute error groups.
Hosted, no local install: connect with your own Airbrake credentials.

**Live endpoint:** `https://airbrake.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/airbrake

## Add to Claude

```json
{
  "mcpServers": {
    "airbrake": {
      "url": "https://airbrake.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Airbrake User API key**.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `airbrake_list_projects` | read | List projects |
| `airbrake_get_project` | read | Get a project |
| `airbrake_list_groups` | read | List error groups |
| `airbrake_get_group` | read | Get an error group |
| `airbrake_get_group_stats` | read | Get error group statistics |
| `airbrake_list_notices` | read | List notices of an error group |
| `airbrake_get_notice_status` | read | Get a notice's processing status |
| `airbrake_list_deploys` | read | List deploys |
| `airbrake_get_deploy` | read | Get a deploy |
| `airbrake_list_activities` | read | List project activity |
| `airbrake_get_project_stats` | read | Get project statistics |
| `airbrake_mute_group` | **write** | Mute an error group |
| `airbrake_unmute_group` | **write** | Unmute an error group |
| `airbrake_usage_status` | meta | Usage status (free-tier meter) |
| `airbrake_upgrade` | meta | Upgrade to Pro (unlimited) |
| `airbrake_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `airbrake_upgrade` (it returns a Stripe Checkout link). Cancel any time with `airbrake_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `airbrake_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Airbrake.
