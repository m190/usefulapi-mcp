# MagicBell MCP by usefulapi

Query and manage your MagicBell notification infrastructure from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your MagicBell API key.

**Live endpoint:** `https://magicbell.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/magicbell

## Add to Claude

```json
{
  "mcpServers": {
    "magicbell": {
      "url": "https://magicbell.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your MagicBell API key (and secret). It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `magicbell_list_broadcasts` | read | List broadcasts (notification-send batches) with cursor pagination. |
| `magicbell_get_broadcast` | read | Fetch a single broadcast by id. |
| `magicbell_list_users` | read | List users (notification recipients) with cursor pagination. |
| `magicbell_get_user` | read | Fetch a single user by MagicBell id or external id. |
| `magicbell_list_events` | read | List notification delivery events with cursor pagination. |
| `magicbell_get_event` | read | Fetch a single delivery event by id. |
| `magicbell_list_workflows` | read | List notification workflows with cursor pagination. |
| `magicbell_list_workflow_runs` | read | List workflow runs (execution history) with cursor pagination. |
| `magicbell_get_workflow_run` | read | Fetch a single workflow run by id. |
| `magicbell_list_channels` | read | List delivery channels (in-app, email, push, SMS). |
| `magicbell_list_integrations` | read | List configured provider integrations (Sendgrid, APNs, FCM, etc.). |
| `magicbell_create_user` | **write** | Create a user (recipient) record. Additive — sends no notification. |
| `magicbell_update_user` | **write** | Update a user record. Reversible — sends no notification. |
| `magicbell_usage_status` | meta | Your tier + usage this month |
| `magicbell_upgrade` | meta | Upgrade to Pro |

Read tools are annotated `readOnlyHint`; write tools are `destructiveHint` so clients confirm before mutating.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
