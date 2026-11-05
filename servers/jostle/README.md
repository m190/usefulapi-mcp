# Jostle MCP by usefulapi

Use your [Jostle](https://www.jostle.me) account from Claude, Cursor, or any MCP client. Read tasks, task comments, users and list presets, and create or update tasks and post comments as your own user. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://jostle.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://jostle.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http jostle https://jostle.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=jostle&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fjostle.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "jostle": {
      "url": "https://jostle.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Jostle credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/jostle/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Jostle Tasks API token** (open Tasks in Jostle and create an API token; a system administrator must first give your user Tasks API access). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `jostle_list_users` | read | List users |
| `jostle_list_presets` | read | List presets |
| `jostle_get_task` | read | Get a task |
| `jostle_list_task_comments` | read | List task comments |
| `jostle_create_task` | **write** | Create a task |
| `jostle_update_task` | **write** | Update a task |
| `jostle_add_task_comment` | **write** | Comment on a task |
| `jostle_usage_status` | meta | Usage status (free-tier meter) |
| `jostle_request_feature` | meta | Request a missing feature |
| `jostle_upgrade` | meta | Upgrade to Pro or Pro+ |
| `jostle_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `jostle_upgrade` (it returns a Stripe Checkout link). Cancel any time with `jostle_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `jostle_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
