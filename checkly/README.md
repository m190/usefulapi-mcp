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
| `checkly_list_checks` | read | List synthetic monitoring checks |
| `checkly_list_check_statuses` | read | Live pass/fail/degraded status for every check |
| `checkly_list_check_results` | read | Individual run results — latency, success, location |
| `checkly_list_check_alerts` | read | Recent alert notifications |
| `checkly_get_reporting` | read | Aggregated availability / SLA reporting |
| `checkly_list_dashboards` | read | List status dashboards |
| `checkly_list_locations` | read | Public checking locations |
| `checkly_create_variable` | **write** | Create an account-level environment variable |
| `checkly_create_maintenance_window` | **write** | Schedule a maintenance window (silences alerts) |
| `checkly_usage_status` | meta | Your tier + usage this month |
| `checkly_upgrade` | meta | Upgrade to Pro |

Read tools are annotated `readOnlyHint`; write tools are `destructiveHint` so clients confirm before mutating.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
