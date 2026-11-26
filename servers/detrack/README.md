# Detrack MCP by usefulapi

Use your [Detrack](https://detrack.com) account from Claude, Cursor, or any MCP client. Read delivery and collection jobs, depots and routes, and create, update or delete jobs. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://detrack.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://detrack.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http detrack https://detrack.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=detrack&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdetrack.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "detrack": {
      "url": "https://detrack.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Detrack credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/detrack/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Detrack API key** (Detrack → Settings → API Key). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `detrack_list_jobs` | read | List jobs |
| `detrack_get_job` | read | Get a job |
| `detrack_get_job_on_date` | read | Get a job on a date |
| `detrack_search_jobs` | read | Search jobs |
| `detrack_list_depots` | read | List depots |
| `detrack_get_depot` | read | Get a depot by name |
| `detrack_list_routes` | read | List routes for a date |
| `detrack_create_job` | **write** | Create a job |
| `detrack_update_job` | **write** | Update a job |
| `detrack_delete_job` | **write** | Delete a job |
| `detrack_usage_status` | meta | Usage status (free-tier meter) |
| `detrack_request_feature` | meta | Request a missing feature |
| `detrack_upgrade` | meta | Upgrade to Pro or Pro+ |
| `detrack_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `detrack_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `detrack_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `detrack_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
