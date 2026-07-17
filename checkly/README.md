# Checkly MCP by usefulapi

Query your Checkly synthetic monitoring from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Checkly API key.

**Live endpoint:** `https://checkly.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/checkly

## Add to Claude

```json
{
  "mcpServers": {
    "checkly": {
      "url": "https://checkly.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Checkly API key (and account ID). It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `checkly_get_account` | read | Get current account |
| `checkly_list_checks` | read | List checks |
| `checkly_get_check` | read | Get a check |
| `checkly_list_check_groups` | read | List check groups |
| `checkly_get_check_group` | read | Get a check group |
| `checkly_list_check_statuses` | read | List check statuses |
| `checkly_get_check_status` | read | Get check status |
| `checkly_list_check_results` | read | List check results |
| `checkly_get_check_result` | read | Get a check result |
| `checkly_list_check_alerts` | read | List check alerts |
| `checkly_get_check_alerts` | read | Get alerts for a check |
| `checkly_get_reporting` | read | Get reporting |
| `checkly_list_dashboards` | read | List dashboards |
| `checkly_list_alert_channels` | read | List alert channels |
| `checkly_list_maintenance_windows` | read | List maintenance windows |
| `checkly_list_locations` | read | List locations |
| `checkly_list_private_locations` | read | List private locations |
| `checkly_list_snippets` | read | List snippets |
| `checkly_list_variables` | read | List variables |
| `checkly_list_runtimes` | read | List runtimes |
| `checkly_create_variable` | **write** | Create environment variable |
| `checkly_create_maintenance_window` | **write** | Create maintenance window |
| `checkly_usage_status` | meta | Usage status (free-tier meter) |
| `checkly_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
