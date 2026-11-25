# Projul MCP by usefulapi

Use your [Projul](https://www.projul.com) account from Claude, Cursor, or any MCP client. It reads clients, projects, estimates, tasks, invoices and time logs, and creates clients, tasks and notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://projul.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://projul.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http projul https://projul.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=projul&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fprojul.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "projul": {
      "url": "https://projul.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Projul credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/projul/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Projul AI Connect API key** (starts with `prjl_live_`, created under Settings → Projul AI Connect). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `projul_whoami` | read | Check the API key |
| `projul_list_clients` | read | List clients |
| `projul_get_client` | read | Get a client |
| `projul_create_client` | **write** | Create a client |
| `projul_list_projects` | read | List projects and leads |
| `projul_get_project` | read | Get a project |
| `projul_list_estimates` | read | List estimates |
| `projul_get_estimate` | read | Get an estimate |
| `projul_list_tasks` | read | List tasks |
| `projul_get_task` | read | Get a task |
| `projul_create_task` | **write** | Create a task |
| `projul_complete_task` | **write** | Complete or reopen a task |
| `projul_list_people` | read | List people |
| `projul_list_teams` | read | List teams |
| `projul_list_invoices` | read | List invoices |
| `projul_get_invoice` | read | Get an invoice |
| `projul_list_messages` | read | List messages |
| `projul_add_message` | **write** | Add a message |
| `projul_list_time_logs` | read | List time logs |
| `projul_search` | read | Search Projul |
| `projul_usage_status` | meta | Usage status (free-tier meter) |
| `projul_request_feature` | meta | Request a missing feature |
| `projul_upgrade` | meta | Upgrade to Pro or Pro+ |
| `projul_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `projul_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `projul_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `projul_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
