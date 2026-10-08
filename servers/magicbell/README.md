# MagicBell MCP by usefulapi

Query and manage your MagicBell notification infrastructure from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your MagicBell API key.

**Live endpoint:** `https://magicbell.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/magicbell

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://magicbell.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http magicbell https://magicbell.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=magicbell&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmagicbell.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "magicbell": {
      "url": "https://magicbell.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/magicbell/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your MagicBell API key (and secret). It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `magicbell_list_broadcasts` | read | List broadcasts |
| `magicbell_get_broadcast` | read | Get a broadcast |
| `magicbell_list_users` | read | List users |
| `magicbell_get_user` | read | Get a user |
| `magicbell_list_events` | read | List events |
| `magicbell_get_event` | read | Get an event |
| `magicbell_list_workflows` | read | List workflows |
| `magicbell_list_workflow_runs` | read | List workflow runs |
| `magicbell_get_workflow_run` | read | Get a workflow run |
| `magicbell_list_channels` | read | List channels |
| `magicbell_list_integrations` | read | List integrations |
| `magicbell_create_user` | **write** | Create a user |
| `magicbell_update_user` | **write** | Update a user |
| `magicbell_usage_status` | meta | Usage status (free-tier meter) |
| `magicbell_upgrade` | meta | Upgrade to Pro (unlimited) |
| `magicbell_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `magicbell_upgrade` (it returns a Stripe Checkout link). Cancel any time with `magicbell_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `magicbell_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
