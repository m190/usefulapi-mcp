# Assignar MCP by usefulapi

Use your [Assignar](https://assignar.com) account from Claude, Cursor, or any MCP client. Read orders, clients, projects, users, timesheets, allocations and more, and create clients and orders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://assignar.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://assignar.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http assignar https://assignar.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=assignar&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fassignar.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "assignar": {
      "url": "https://assignar.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Assignar credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/assignar/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Assignar region**, **client ID** and **client secret** (Assignar → **Settings → API Access**). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `assignar_list_orders` | read | List orders |
| `assignar_list_order_statuses` | read | List order statuses |
| `assignar_list_order_types` | read | List order types |
| `assignar_list_clients` | read | List clients |
| `assignar_list_contacts` | read | List contacts |
| `assignar_list_projects` | read | List projects |
| `assignar_list_users` | read | List users |
| `assignar_list_allocations` | read | List allocations |
| `assignar_list_timesheets` | read | List timesheets |
| `assignar_list_assets` | read | List assets |
| `assignar_list_leave_requests` | read | List leave requests |
| `assignar_list_site_diaries` | read | List site diaries |
| `assignar_list_form_results` | read | List form results |
| `assignar_list_skills` | read | List skills |
| `assignar_list_inductions` | read | List inductions |
| `assignar_get_order` | read | Get order |
| `assignar_get_client` | read | Get client |
| `assignar_get_project` | read | Get project |
| `assignar_get_user` | read | Get user |
| `assignar_get_timesheet` | read | Get timesheet |
| `assignar_get_asset` | read | Get asset |
| `assignar_create_client` | **write** | Create client |
| `assignar_create_order` | **write** | Create order |
| `assignar_usage_status` | meta | Usage status (free-tier meter) |
| `assignar_request_feature` | meta | Request a missing feature |
| `assignar_upgrade` | meta | Upgrade to Pro or Pro+ |
| `assignar_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `assignar_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `assignar_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `assignar_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
