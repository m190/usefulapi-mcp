# Reclaim.ai MCP by usefulapi

Use your [Reclaim.ai](https://reclaim.ai) account from Claude, Cursor, or any MCP client — read tasks, habits, events and scheduling links, and create or update tasks and habits. Hosted,
no local install: connect with your own credentials.

**Live endpoint:** `https://reclaimai.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "reclaimai": {
      "url": "https://reclaimai.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Reclaim.ai API key** (Settings → Developer Settings). It is validated, stored per-user, and scoped to you — no
keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `reclaim_get_current_user` | read | Get current user |
| `reclaim_list_tasks` | read | List tasks |
| `reclaim_get_task` | read | Get task |
| `reclaim_list_habits` | read | List habits |
| `reclaim_get_habit` | read | Get habit |
| `reclaim_list_events` | read | List events |
| `reclaim_create_task` | **write** | Create task |
| `reclaim_update_task` | **write** | Update task |
| `reclaim_mark_task_complete` | **write** | Mark task complete |
| `reclaim_mark_task_incomplete` | **write** | Mark task incomplete |
| `reclaim_start_task` | **write** | Start task |
| `reclaim_stop_task` | **write** | Stop task |
| `reclaim_add_time` | **write** | Add time to task |
| `reclaim_log_work` | **write** | Log work on task |
| `reclaim_delete_task` | **write** | Delete task |
| `reclaimai_usage_status` | meta | Usage status (free-tier meter) |
| `reclaimai_upgrade` | meta | Upgrade to Pro (unlimited) |
| `reclaimai_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `reclaimai_upgrade` (it returns a Stripe Checkout link). Cancel any time with `reclaimai_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `reclaimai_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
