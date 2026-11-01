# Paydirt MCP by usefulapi

Use your [Paydirt](https://paydirtapp.com) account from Claude, Cursor, or any MCP client. Read, create and update clients, projects and jobs, and log time. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://paydirt.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://paydirt.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http paydirt https://paydirt.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=paydirt&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpaydirt.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "paydirt": {
      "url": "https://paydirt.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Paydirt credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/paydirt/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Paydirt API key**, which you find under Password Settings. Your Paydirt user needs full permissions (Team Settings). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `paydirt_list_clients` | read | List clients |
| `paydirt_get_client` | read | Get a client |
| `paydirt_create_client` | **write** | Create a client |
| `paydirt_update_client` | **write** | Update a client |
| `paydirt_list_projects` | read | List projects |
| `paydirt_get_project` | read | Get a project |
| `paydirt_create_project` | **write** | Create a project |
| `paydirt_update_project` | **write** | Update a project |
| `paydirt_list_jobs` | read | List jobs |
| `paydirt_get_job` | read | Get a job |
| `paydirt_create_job` | **write** | Create a job |
| `paydirt_update_job` | **write** | Update a job |
| `paydirt_list_time_logs` | read | List time logs |
| `paydirt_get_time_log` | read | Get a time log |
| `paydirt_create_time_log` | **write** | Log time |
| `paydirt_list_users` | read | List users |
| `paydirt_usage_status` | meta | Usage status (free-tier meter) |
| `paydirt_request_feature` | meta | Request a missing feature |
| `paydirt_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `paydirt_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `paydirt_upgrade` (it returns a Stripe Checkout link). Cancel any time with `paydirt_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `paydirt_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
