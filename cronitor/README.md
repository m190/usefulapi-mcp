# Cronitor MCP by usefulapi

Manage Cronitor monitors and send telemetry pings from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Cronitor API key.

**Live endpoint:** `https://cronitor.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/cronitor

## Add to Claude

```json
{
  "mcpServers": {
    "cronitor": {
      "url": "https://cronitor.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Cronitor API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cronitor_list_monitors` | read | List monitors and their passing/failing status |
| `cronitor_get_monitor` | read | Get one monitor's detail, events and health |
| `cronitor_create_monitor` | **write** | Create a job, check, heartbeat or site monitor |
| `cronitor_update_monitor` | **write** | Update a monitor — reschedule, pause or resume |
| `cronitor_delete_monitor` | **write** | Delete a monitor |
| `cronitor_ping_monitor` | **write** | Send a telemetry event (run/complete/fail/ok) |
| `cronitor_usage_status` | meta | Your tier + usage this month |
| `cronitor_upgrade` | meta | Upgrade to Pro |

Read tools are annotated `readOnlyHint`; write tools are `destructiveHint` so clients confirm before mutating.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
