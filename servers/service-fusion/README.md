# Service Fusion MCP by usefulapi

Use [Service Fusion](https://www.servicefusion.com) from Claude, Cursor, or any MCP client — look up customers and their equipment, jobs, estimates, invoices, calendar tasks, technicians, crews and technician availability, and create a customer, a job or an estimate (each write needs an explicit confirmation).
Hosted, no local install: connect with the Client ID and Client Secret of a Service Fusion API credential.

**Live endpoint:** `https://service-fusion.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/service-fusion

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://service-fusion.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http service-fusion https://service-fusion.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=service-fusion&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fservice-fusion.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "service-fusion": {
      "url": "https://service-fusion.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Service Fusion credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/service-fusion/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `servicefusion_get_me` | read | Get current user |
| `servicefusion_list_customers` | read | List customers |
| `servicefusion_get_customer` | read | Get customer |
| `servicefusion_list_customer_equipment` | read | List customer equipment |
| `servicefusion_get_customer_equipment` | read | Get customer equipment |
| `servicefusion_list_jobs` | read | List jobs |
| `servicefusion_get_job` | read | Get job |
| `servicefusion_list_estimates` | read | List estimates |
| `servicefusion_get_estimate` | read | Get estimate |
| `servicefusion_list_invoices` | read | List invoices |
| `servicefusion_get_invoice` | read | Get invoice |
| `servicefusion_list_calendar_tasks` | read | List calendar tasks |
| `servicefusion_get_calendar_task` | read | Get calendar task |
| `servicefusion_get_availability` | read | Get technician availability |
| `servicefusion_list_techs` | read | List technicians |
| `servicefusion_get_tech` | read | Get technician |
| `servicefusion_list_tech_departments` | read | List technician departments |
| `servicefusion_list_crews` | read | List crews |
| `servicefusion_get_crew` | read | Get crew |
| `servicefusion_list_job_categories` | read | List job categories |
| `servicefusion_list_job_statuses` | read | List job statuses |
| `servicefusion_list_payment_types` | read | List payment types |
| `servicefusion_list_sources` | read | List lead sources |
| `servicefusion_create_customer` | **write** | Create customer |
| `servicefusion_create_job` | **write** | Create job |
| `servicefusion_create_estimate` | **write** | Create estimate |
| `servicefusion_usage_status` | meta | Usage status (free-tier meter) |
| `servicefusion_request_feature` | meta | Request a missing feature |
| `servicefusion_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `servicefusion_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `servicefusion_upgrade` (it returns a Stripe Checkout link). Cancel any time with `servicefusion_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `servicefusion_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Service Fusion.
