# Kantata MCP by usefulapi

Use your [Kantata](https://www.kantata.com) account from Claude, Cursor, or any MCP client. Read workspaces, tasks and time entries, create and update tasks, and log time. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://kantata.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://kantata.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http kantata https://kantata.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=kantata&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fkantata.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "kantata": {
      "url": "https://kantata.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Kantata credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/kantata/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Kantata OX OAuth token**, which you copy from Settings → API → Registered Applications → Show OAuth Token. It needs a paid Kantata OX account and the Account Administrator role. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `kantata_get_current_user` | read | Get the current user |
| `kantata_list_users` | read | List users |
| `kantata_list_organizations` | read | List organizations |
| `kantata_list_workspaces` | read | List workspaces |
| `kantata_get_workspace` | read | Get a workspace |
| `kantata_list_stories` | read | List stories (tasks) |
| `kantata_get_story` | read | Get a story (task) |
| `kantata_create_story` | **write** | Create a story (task) |
| `kantata_update_story` | **write** | Update a story (task) |
| `kantata_list_time_entries` | read | List time entries |
| `kantata_list_timesheet_submissions` | read | List timesheet submissions |
| `kantata_log_time` | **write** | Log time |
| `kantata_usage_status` | meta | Usage status (free-tier meter) |
| `kantata_request_feature` | meta | Request a missing feature |
| `kantata_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `kantata_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `kantata_upgrade` (it returns a Stripe Checkout link). Cancel any time with `kantata_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `kantata_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
