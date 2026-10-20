# Tick MCP by usefulapi

Use [Tick](https://www.tickspot.com) from Claude, Cursor, or any MCP client — clients, projects, tasks, users and time entries, plus logging time against budgets.
Hosted, no local install: connect with your own Tick credentials.

**Live endpoint:** `https://tick.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/tick

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://tick.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http tick https://tick.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=tick&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftick.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "tick": {
      "url": "https://tick.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Tick credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/tick/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `tick_list_clients` | read | List clients |
| `tick_get_client` | read | Get client |
| `tick_list_projects` | read | List projects |
| `tick_get_project` | read | Get project |
| `tick_list_tasks` | read | List tasks |
| `tick_get_task` | read | Get task |
| `tick_list_users` | read | List users |
| `tick_list_entries` | read | List time entries |
| `tick_get_entry` | read | Get time entry |
| `tick_create_entry` | **write** | Log time entry |
| `tick_update_entry` | **write** | Update time entry |
| `tick_create_client` | **write** | Create client |
| `tick_create_project` | **write** | Create project |
| `tick_create_task` | **write** | Create task |
| `tick_usage_status` | meta | Usage status (free-tier meter) |
| `tick_request_feature` | meta | Request a missing feature |
| `tick_upgrade` | meta | Upgrade to Pro (unlimited) |
| `tick_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `tick_upgrade` (it returns a Stripe Checkout link). Cancel any time with `tick_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `tick_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Tick.
