# Synchroteam MCP by usefulapi

Use [Synchroteam](https://www.synchroteam.com) from Claude, Cursor, or any MCP client — jobs, customers, sites, equipment, technicians, parts, invoices and quotes, plus job creation and scheduling.
Hosted, no local install: connect with your own Synchroteam credentials.

**Live endpoint:** `https://synchroteam.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/synchroteam

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://synchroteam.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http synchroteam https://synchroteam.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=synchroteam&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsynchroteam.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "synchroteam": {
      "url": "https://synchroteam.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Synchroteam credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/synchroteam/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `synchroteam_list_customers` | read | List customers |
| `synchroteam_get_customer` | read | Get customer |
| `synchroteam_list_sites` | read | List sites |
| `synchroteam_get_site` | read | Get site |
| `synchroteam_list_equipment` | read | List equipment |
| `synchroteam_get_equipment` | read | Get equipment |
| `synchroteam_list_jobs` | read | List jobs |
| `synchroteam_get_job` | read | Get job |
| `synchroteam_get_job_photos` | read | Get job photos |
| `synchroteam_list_job_types` | read | List job types |
| `synchroteam_list_users` | read | List users (technicians and staff) |
| `synchroteam_get_user` | read | Get user |
| `synchroteam_list_teams` | read | List teams |
| `synchroteam_list_parts` | read | List parts and services |
| `synchroteam_get_part` | read | Get part |
| `synchroteam_list_depots` | read | List stock depots |
| `synchroteam_get_depot` | read | Get depot stock |
| `synchroteam_list_part_requests` | read | List part requests |
| `synchroteam_list_invoices` | read | List invoices |
| `synchroteam_get_invoice` | read | Get invoice |
| `synchroteam_list_quotations` | read | List quotations |
| `synchroteam_get_quotation` | read | Get quotation |
| `synchroteam_list_contracts` | read | List contracts |
| `synchroteam_list_projects` | read | List projects |
| `synchroteam_list_activities` | read | List technician activities |
| `synchroteam_create_customer` | **write** | Create customer |
| `synchroteam_update_customer` | **write** | Update customer |
| `synchroteam_create_site` | **write** | Create site |
| `synchroteam_create_equipment` | **write** | Create equipment |
| `synchroteam_create_job` | **write** | Create job |
| `synchroteam_schedule_job` | **write** | Schedule job |
| `synchroteam_start_job` | **write** | Start job |
| `synchroteam_complete_job` | **write** | Complete job |
| `synchroteam_usage_status` | meta | Usage status (free-tier meter) |
| `synchroteam_request_feature` | meta | Request a missing feature |
| `synchroteam_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `synchroteam_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `synchroteam_upgrade` (it returns a Stripe Checkout link). Cancel any time with `synchroteam_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `synchroteam_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Synchroteam.
