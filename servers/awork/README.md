# awork MCP by usefulapi

Use your [awork](https://www.awork.com) account from Claude, Cursor, or any MCP client. Read projects, task lists, tasks, companies, types of work and time entries, and create tasks, comments and time entries. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://awork.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://awork.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http awork https://awork.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=awork&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fawork.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "awork": {
      "url": "https://awork.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your awork credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/awork/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **awork API key** (Settings → Integrations → API clients → Manage API keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `awork_whoami` | read | Current user and workspace |
| `awork_list_users` | read | List users |
| `awork_list_projects` | read | List projects |
| `awork_get_project` | read | Get a project |
| `awork_list_task_lists` | read | List task lists of a project |
| `awork_list_task_statuses` | read | List task statuses of a project |
| `awork_get_task` | read | Get a task |
| `awork_list_companies` | read | List companies |
| `awork_get_company` | read | Get a company |
| `awork_list_types_of_work` | read | List types of work |
| `awork_list_time_entries` | read | List time entries |
| `awork_get_time_entry` | read | Get a time entry |
| `awork_create_task` | **write** | Create a task |
| `awork_add_task_comment` | **write** | Add a task comment |
| `awork_create_time_entry` | **write** | Create a time entry |
| `awork_usage_status` | meta | Usage status (free-tier meter) |
| `awork_request_feature` | meta | Request a missing feature |
| `awork_upgrade` | meta | Upgrade to Pro or Pro+ |
| `awork_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `awork_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `awork_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `awork_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
