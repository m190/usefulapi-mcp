# Vital MCP by usefulapi

Read wearables and lab health data — sleep, activity, workouts, timeseries, and lab results — from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Vital API key.

**Live endpoint:** `https://vital.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/vital

## Add to Claude

```json
{
  "mcpServers": {
    "vital": {
      "url": "https://vital.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Vital API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `vital_list_users` | read | List users |
| `vital_get_user` | read | Get user |
| `vital_resolve_user` | read | Resolve user |
| `vital_get_user_connected_providers` | read | Get user connected providers |
| `vital_get_user_latest_info` | read | Get user latest info |
| `vital_list_providers` | read | List providers |
| `vital_get_sleep` | read | Get sleep |
| `vital_get_activity` | read | Get activity |
| `vital_get_workouts` | read | Get workouts |
| `vital_get_body` | read | Get body |
| `vital_get_meal` | read | Get meal |
| `vital_get_menstrual_cycle` | read | Get menstrual cycle |
| `vital_get_profile` | read | Get profile |
| `vital_get_timeseries` | read | Get timeseries |
| `vital_list_lab_tests` | read | List lab tests |
| `vital_get_lab_test` | read | Get lab test |
| `vital_list_orders` | read | List orders |
| `vital_get_order` | read | Get order |
| `vital_get_order_results` | read | Get order results |
| `vital_create_user` | **write** | Create user |
| `vital_create_link_token` | **write** | Create link token |
| `vital_usage_status` | meta | Usage status (free-tier meter) |
| `vital_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
