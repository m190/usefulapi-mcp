# StatusCake MCP by usefulapi

Use [StatusCake](https://www.statuscake.com) from Claude, Cursor, or any MCP client — review uptime, SSL, pagespeed and heartbeat checks, uptime history, alerts and maintenance windows, and create checks.
Hosted, no local install: connect with your own StatusCake credentials.

**Live endpoint:** `https://statuscake.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/statuscake

## Add to Claude

```json
{
  "mcpServers": {
    "statuscake": {
      "url": "https://statuscake.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **StatusCake API key** (Account → API Keys).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `statuscake_list_uptime_checks` | read | List uptime checks |
| `statuscake_get_uptime_check` | read | Get one uptime check |
| `statuscake_get_uptime_history` | read | Get uptime check history |
| `statuscake_get_uptime_periods` | read | Get uptime check up/down periods |
| `statuscake_list_uptime_alerts` | read | List uptime check alerts |
| `statuscake_list_ssl_checks` | read | List SSL checks |
| `statuscake_get_ssl_check` | read | Get one SSL check |
| `statuscake_list_pagespeed_checks` | read | List pagespeed checks |
| `statuscake_get_pagespeed_history` | read | Get pagespeed check history |
| `statuscake_list_heartbeat_checks` | read | List heartbeat checks |
| `statuscake_get_heartbeat_check` | read | Get one heartbeat check |
| `statuscake_list_contact_groups` | read | List contact groups |
| `statuscake_list_maintenance_windows` | read | List maintenance windows |
| `statuscake_get_maintenance_window` | read | Get one maintenance window |
| `statuscake_list_uptime_locations` | read | List uptime monitoring locations |
| `statuscake_list_pagespeed_locations` | read | List pagespeed monitoring locations |
| `statuscake_create_uptime_check` | **write** | Create an uptime check |
| `statuscake_update_uptime_check` | **write** | Update an uptime check |
| `statuscake_create_ssl_check` | **write** | Create an SSL check |
| `statuscake_create_heartbeat_check` | **write** | Create a heartbeat check |
| `statuscake_create_maintenance_window` | **write** | Create a maintenance window |
| `statuscake_usage_status` | meta | Usage status (free-tier meter) |
| `statuscake_upgrade` | meta | Upgrade to Pro (unlimited) |
| `statuscake_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `statuscake_upgrade` (it returns a Stripe Checkout link). Cancel any time with `statuscake_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `statuscake_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by StatusCake.
