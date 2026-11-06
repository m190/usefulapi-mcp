# AgencyZoom MCP by usefulapi

Use your [AgencyZoom](https://www.agencyzoom.com) account from Claude, Cursor, or any MCP client. Read leads, customers, policies and tasks, and add notes, tasks and leads. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://agencyzoom.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://agencyzoom.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http agencyzoom https://agencyzoom.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=agencyzoom&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fagencyzoom.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "agencyzoom": {
      "url": "https://agencyzoom.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your AgencyZoom credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/agencyzoom/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **AgencyZoom e-mail** and **AgencyZoom password**, the login of your AgencyZoom user. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `agencyzoom_search_leads` | read | Search leads |
| `agencyzoom_get_lead` | read | Get lead |
| `agencyzoom_get_lead_notes` | read | Get lead notes |
| `agencyzoom_get_lead_tasks` | read | Get lead tasks |
| `agencyzoom_get_lead_opportunities` | read | Get lead opportunities |
| `agencyzoom_search_customers` | read | Search customers |
| `agencyzoom_get_customer` | read | Get customer |
| `agencyzoom_get_customer_policies` | read | Get customer policies |
| `agencyzoom_get_customer_tasks` | read | Get customer tasks |
| `agencyzoom_search_tasks` | read | Search tasks |
| `agencyzoom_get_task` | read | Get task |
| `agencyzoom_search_service_tickets` | read | Search service tickets |
| `agencyzoom_get_sales_summary` | read | Get sales summary |
| `agencyzoom_list_pipelines` | read | List pipelines and stages |
| `agencyzoom_list_employees` | read | List employees |
| `agencyzoom_list_lead_sources` | read | List lead sources |
| `agencyzoom_list_carriers` | read | List carriers |
| `agencyzoom_list_product_lines` | read | List product lines |
| `agencyzoom_list_tags` | read | List tags |
| `agencyzoom_list_service_ticket_options` | read | List service ticket categories and priorities |
| `agencyzoom_create_lead` | **write** | Create lead |
| `agencyzoom_add_lead_note` | **write** | Add lead note |
| `agencyzoom_add_customer_note` | **write** | Add customer note |
| `agencyzoom_create_task` | **write** | Create task |
| `agencyzoom_complete_task` | **write** | Complete task |
| `agencyzoom_reopen_task` | **write** | Reopen task |
| `agencyzoom_move_lead_stage` | **write** | Move lead to a stage |
| `agencyzoom_create_service_ticket` | **write** | Create service ticket |
| `agencyzoom_usage_status` | meta | Usage status (free-tier meter) |
| `agencyzoom_request_feature` | meta | Request a missing feature |
| `agencyzoom_upgrade` | meta | Upgrade to Pro or Pro+ |
| `agencyzoom_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `agencyzoom_upgrade` (it returns a Stripe Checkout link). Cancel any time with `agencyzoom_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `agencyzoom_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
