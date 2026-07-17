# Hypertune MCP by usefulapi

Evaluate feature flags, inspect flag logic, and introspect your Hypertune schema from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Hypertune API token.

**Live endpoint:** `https://hypertune.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/hypertune

## Add to Claude

```json
{
  "mcpServers": {
    "hypertune": {
      "url": "https://hypertune.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Hypertune API token. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `hypertune_evaluate` | read | Evaluate |
| `hypertune_get_logic` | read | Get logic |
| `hypertune_list_flags` | read | List flags |
| `hypertune_introspect` | read | Introspect |
| `hypertune_query` | read | Query |
| `hypertune_usage_status` | meta | Usage status (free-tier meter) |
| `hypertune_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
