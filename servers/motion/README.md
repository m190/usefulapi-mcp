# Motion MCP by usefulapi

Use your [Motion](https://www.usemotion.com) account from Claude, Cursor, or any MCP client. Read workspaces, projects, tasks and working schedules, and create tasks. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://motion.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://motion.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http motion https://motion.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=motion&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmotion.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "motion": {
      "url": "https://motion.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Motion credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/motion/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Motion API key** (Motion → Settings → API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `motion_get_my_user` | read | Get my user |
| `motion_list_workspaces` | read | List workspaces |
| `motion_list_projects` | read | List projects |
| `motion_list_tasks` | read | List tasks |
| `motion_get_task` | read | Get a task |
| `motion_create_task` | **write** | Create a task |
| `motion_get_schedules` | read | Get schedules |
| `motion_usage_status` | meta | Usage status (free-tier meter) |
| `motion_request_feature` | meta | Request a missing feature |
| `motion_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `motion_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `motion_upgrade` (it returns a Stripe Checkout link). Cancel any time with `motion_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `motion_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
