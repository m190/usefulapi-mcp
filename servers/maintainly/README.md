# Maintainly MCP by usefulapi

Use your [Maintainly](https://maintainly.com) account from Claude, Cursor, or any MCP client. Read maintenance tasks and work requests, assign tasks, post comments, and report new problems. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://maintainly.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://maintainly.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http maintainly https://maintainly.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=maintainly&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmaintainly.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "maintainly": {
      "url": "https://maintainly.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Maintainly credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/maintainly/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Maintainly personal access token** (Settings → API tokens in Maintainly) and, only if the token reaches more than one organisation, the **organisation key** (for example `acme`). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `maintainly_get_me` | read | Get my Maintainly account |
| `maintainly_list_tasks` | read | List tasks |
| `maintainly_get_task` | read | Get a task |
| `maintainly_list_task_assignment` | read | List who is assigned to a task |
| `maintainly_list_work_requests` | read | List work requests |
| `maintainly_get_work_request` | read | Get a work request |
| `maintainly_assign_task` | **write** | Set a task's assignees |
| `maintainly_add_task_comment` | **write** | Add a comment to a task |
| `maintainly_create_work_request` | **write** | Report a work request |
| `maintainly_usage_status` | meta | Usage status (free-tier meter) |
| `maintainly_request_feature` | meta | Request a missing feature |
| `maintainly_upgrade` | meta | Upgrade to Pro or Pro+ |
| `maintainly_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `maintainly_upgrade` (it returns a Stripe Checkout link). Cancel any time with `maintainly_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `maintainly_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
