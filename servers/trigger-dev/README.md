# Trigger.dev MCP by usefulapi

Debug background jobs — runs, traces, spans, schedules, queues and deployments. Hosted, no local install.

**Live endpoint:** `https://trigger-dev.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://trigger-dev.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http trigger-dev https://trigger-dev.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=trigger-dev&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftrigger-dev.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "trigger-dev": {
      "url": "https://trigger-dev.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Trigger.dev credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/trigger-dev/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Trigger.dev credentials**. They are validated,
stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `trigger_list_runs` | read | List runs |
| `trigger_get_run` | read | Get one run |
| `trigger_get_run_trace` | read | Get a run's trace |
| `trigger_get_run_span` | read | Get one span of a run |
| `trigger_list_run_events` | read | List a run's events |
| `trigger_get_run_metadata` | read | Get a run's metadata |
| `trigger_get_batch_results` | read | Get a batch's results |
| `trigger_list_schedules` | read | List schedules |
| `trigger_get_schedule` | read | Get one schedule |
| `trigger_list_queues` | read | List queues |
| `trigger_get_queue` | read | Get one queue |
| `trigger_get_current_deployment` | read | Get the current deployment |
| `trigger_list_env_vars` | read | List environment variables |
| `trigger_list_waitpoint_tokens` | read | List waitpoint tokens |
| `trigger_list_bulk_actions` | read | List bulk actions |
| `trigger_cancel_run` | **write** | Cancel a run |
| `trigger_replay_run` | **write** | Replay a run |
| `trigger_reschedule_run` | **write** | Reschedule a delayed run |
| `trigger_add_run_tags` | **write** | Add tags to a run |
| `trigger_activate_schedule` | **write** | Activate a schedule |
| `trigger_deactivate_schedule` | **write** | Deactivate a schedule |
| `trigger_pause_queue` | **write** | Pause or resume a queue |
| `trigger_dev_usage_status` | meta | Usage status (free-tier meter) |
| `trigger_dev_upgrade` | meta | Upgrade to Pro (unlimited) |
| `trigger_dev_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `trigger_dev_upgrade` (it returns a Stripe Checkout link). Cancel any time with `trigger_dev_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `trigger_dev_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
