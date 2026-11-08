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

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your MagicBell credentials.

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
| `magicbell_request_feature` | meta | Request a missing feature |
| `magicbell_upgrade` | meta | Upgrade to Pro or Pro+ |
| `magicbell_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `magicbell_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `magicbell_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `magicbell_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
