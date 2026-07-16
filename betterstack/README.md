# Better Stack MCP by usefulapi

Manage [Better Stack](https://betterstack.com) Uptime from Claude, Cursor, or any MCP client — read
monitors, incidents, heartbeats, on-call schedules and status pages, and acknowledge/resolve
incidents. Hosted, no local install: connect with your Better Stack API token.

**Live endpoint:** `https://betterstack.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "betterstack": {
      "url": "https://betterstack.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Better Stack API token** (Better Stack → Settings → API tokens).
It's validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `list_monitors` | read | List uptime monitors |
| `get_monitor` | read | Get one monitor |
| `list_incidents` | read | List incidents |
| `get_incident` | read | Get one incident |
| `list_heartbeats` | read | List heartbeats |
| `list_on_call` | read | List on-call schedules |
| `list_status_pages` | read | List status pages |
| `acknowledge_incident` | **write** | Acknowledge an incident |
| `resolve_incident` | **write** | Resolve an incident |
| `betterstack_usage_status` | meta | Your current tier + usage this month |
| `betterstack_upgrade` | meta | Upgrade to Pro |

Read tools are annotated `readOnlyHint`; the two write tools are annotated `destructiveHint` so
clients can confirm before mutating Better Stack.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Upgrade in-client with `betterstack_upgrade`.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
