# Olark MCP by usefulapi

Manage your Olark live-chat operators and teams from Claude, Cursor, or any MCP client — list, create and update operators, and assign them to groups.

**Live endpoint:** `https://olark.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/olark

## Add to Claude

```json
{
  "mcpServers": {
    "olark": {
      "url": "https://olark.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Olark account API key** (Olark dashboard → Settings → Integrations → API). It's sent as HTTP Basic auth (key as username, empty password).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `list_operators` | read | List operators |
| `get_operator` | read | Get an operator |
| `list_groups` | read | List groups |
| `olark_request` | read | Raw read request |
| `create_operator` | **write** | Create an operator |
| `update_operator` | **write** | Update an operator |
| `add_operator_to_group` | **write** | Add operator to group |
| `remove_operator_from_group` | **write** | Remove operator from group |
| `olark_usage_status` | meta | Usage status (free-tier meter) |
| `olark_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT © usefulapi. Not affiliated with or endorsed by Olark.
