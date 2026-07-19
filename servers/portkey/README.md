# Portkey MCP by usefulapi

Manage [Portkey](https://portkey.ai) AI-gateway admin and observability from Claude, Cursor, or any MCP
client — read analytics, configs, virtual keys, workspaces, users and audit logs, and log request
feedback. Hosted, no local install: connect with your Portkey API key.

**Live endpoint:** `https://portkey.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "portkey": {
      "url": "https://portkey.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Portkey API key** (from the Portkey app → API Keys). It's
validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `portkey_get_analytics_graph` | read | Get analytics graph |
| `portkey_get_analytics_group` | read | Get analytics group |
| `portkey_list_configs` | read | List configs |
| `portkey_get_config` | read | Get config |
| `portkey_list_api_keys` | read | List API keys |
| `portkey_get_api_key` | read | Get API key |
| `portkey_list_virtual_keys` | read | List virtual keys |
| `portkey_get_virtual_key` | read | Get virtual key |
| `portkey_list_workspaces` | read | List workspaces |
| `portkey_get_workspace` | read | Get workspace |
| `portkey_list_workspace_members` | read | List workspace members |
| `portkey_list_users` | read | List users |
| `portkey_get_user` | read | Get user |
| `portkey_list_user_invites` | read | List user invites |
| `portkey_list_audit_logs` | read | List audit logs |
| `portkey_create_feedback` | **write** | Create feedback |
| `portkey_usage_status` | meta | Usage status (free-tier meter) |
| `portkey_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
