# ServiceM8 MCP by usefulapi

Use your [ServiceM8](https://www.servicem8.com) account from Claude, Cursor, or any MCP client. Read jobs, clients, staff, bookings, materials and attachments, and create jobs or update their status. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://servicem8.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://servicem8.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http servicem8 https://servicem8.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=servicem8&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fservicem8.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "servicem8": {
      "url": "https://servicem8.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ServiceM8 credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/servicem8/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **ServiceM8 API key** (Settings → API Keys in ServiceM8). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `servicem8_list_jobs` | read | List jobs |
| `servicem8_get_job` | read | Get a job |
| `servicem8_list_clients` | read | List clients |
| `servicem8_get_client` | read | Get a client |
| `servicem8_list_client_contacts` | read | List client contacts |
| `servicem8_list_staff` | read | List staff |
| `servicem8_get_staff` | read | Get a staff member |
| `servicem8_list_job_activities` | read | List job activities |
| `servicem8_get_job_activity` | read | Get a job activity |
| `servicem8_list_job_materials` | read | List job materials |
| `servicem8_list_job_contacts` | read | List job contacts |
| `servicem8_list_job_queues` | read | List job queues |
| `servicem8_list_attachments` | read | List attachments |
| `servicem8_get_attachment` | read | Get an attachment |
| `servicem8_create_job` | **write** | Create a job |
| `servicem8_update_job` | **write** | Update a job |
| `servicem8_usage_status` | meta | Usage status (free-tier meter) |
| `servicem8_request_feature` | meta | Request a missing feature |
| `servicem8_upgrade` | meta | Upgrade to Pro or Pro+ |
| `servicem8_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `servicem8_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `servicem8_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `servicem8_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
