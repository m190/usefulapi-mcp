# Timeneye MCP by usefulapi

Use your [Timeneye](https://www.timeneye.com) account from Claude, Cursor, or any MCP client. Read time entries, projects, clients, allocations and time-off requests, and log time on a project. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://timeneye.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://timeneye.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http timeneye https://timeneye.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=timeneye&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftimeneye.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "timeneye": {
      "url": "https://timeneye.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Timeneye credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/timeneye/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Timeneye personal access token** (side menu Support → Developers portal in Timeneye). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `timeneye_get_account` | read | Get account |
| `timeneye_list_users` | read | List users |
| `timeneye_list_clients` | read | List clients |
| `timeneye_get_client` | read | Get a client |
| `timeneye_list_projects` | read | List projects |
| `timeneye_get_project` | read | Get a project |
| `timeneye_list_phases` | read | List phases |
| `timeneye_list_entries` | read | List time entries |
| `timeneye_get_entry` | read | Get a time entry |
| `timeneye_list_allocations` | read | List allocations |
| `timeneye_list_time_off_requests` | read | List time-off requests |
| `timeneye_create_entry` | **write** | Create a time entry |
| `timeneye_usage_status` | meta | Usage status (free-tier meter) |
| `timeneye_request_feature` | meta | Request a missing feature |
| `timeneye_upgrade` | meta | Upgrade to Pro or Pro+ |
| `timeneye_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `timeneye_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `timeneye_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `timeneye_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
