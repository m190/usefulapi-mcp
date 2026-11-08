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
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `jostle_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `jostle_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `jostle_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
