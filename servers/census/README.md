# Census MCP by usefulapi

Manage [Census](https://www.getcensus.com) reverse-ETL from Claude, Cursor, or any MCP client — read
sources, destinations, models, syncs and run history, and trigger syncs that push warehouse data into
your SaaS tools. Hosted, no local install: connect with your Census API key.

**Live endpoint:** `https://census.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "census": {
      "url": "https://census.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Census API key** (Census → Workspace settings → API Access). It's
validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `census_list_sources` | read | List sources |
| `census_get_source` | read | Get source |
| `census_list_destinations` | read | List destinations |
| `census_get_destination` | read | Get destination |
| `census_list_models` | read | List models |
| `census_get_model` | read | Get model |
| `census_list_syncs` | read | List syncs |
| `census_get_sync` | read | Get sync |
| `census_list_sync_runs` | read | List sync runs |
| `census_get_sync_run` | read | Get sync run |
| `census_list_segments` | read | List segments |
| `census_list_workspaces` | read | List workspaces |
| `census_trigger_sync` | **write** | Trigger sync |
| `census_usage_status` | meta | Usage status (free-tier meter) |
| `census_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
