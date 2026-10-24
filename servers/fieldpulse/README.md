# FieldPulse MCP by usefulapi

Use [FieldPulse](https://www.fieldpulse.com) from Claude, Cursor, or any MCP client — read customers and contacts, jobs and job statuses, estimates, invoices, payments, assets, locations, projects, contracts, items, purchase orders, vendors, users, teams and timesheets, and create or update customers and jobs (each write needs an explicit confirmation).
Hosted, no local install: connect with a FieldPulse API key (FieldPulse support issues it).

**Live endpoint:** `https://fieldpulse.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/fieldpulse

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://fieldpulse.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http fieldpulse https://fieldpulse.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=fieldpulse&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffieldpulse.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "fieldpulse": {
      "url": "https://fieldpulse.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your FieldPulse credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/fieldpulse/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fieldpulse_list_customers` | read | List customers |
| `fieldpulse_get_customer` | read | Get customer |
| `fieldpulse_list_customer_contacts` | read | List customer contacts |
| `fieldpulse_get_customer_contact` | read | Get customer contact |
| `fieldpulse_list_jobs` | read | List jobs |
| `fieldpulse_get_job` | read | Get job |
| `fieldpulse_list_job_status_workflows` | read | List job status workflows |
| `fieldpulse_list_job_workflow_statuses` | read | List job workflow statuses |
| `fieldpulse_list_estimates` | read | List estimates |
| `fieldpulse_get_estimate` | read | Get estimate |
| `fieldpulse_list_invoices` | read | List invoices |
| `fieldpulse_get_invoice` | read | Get invoice |
| `fieldpulse_list_payments` | read | List payments |
| `fieldpulse_get_payment` | read | Get payment |
| `fieldpulse_list_assets` | read | List assets |
| `fieldpulse_get_asset` | read | Get asset |
| `fieldpulse_list_asset_categories` | read | List asset categories |
| `fieldpulse_list_locations` | read | List locations |
| `fieldpulse_get_location` | read | Get location |
| `fieldpulse_list_projects` | read | List projects |
| `fieldpulse_get_project` | read | Get project |
| `fieldpulse_list_contracts` | read | List contracts |
| `fieldpulse_get_contract` | read | Get contract |
| `fieldpulse_list_items` | read | List items |
| `fieldpulse_get_item` | read | Get item |
| `fieldpulse_list_purchase_orders` | read | List purchase orders |
| `fieldpulse_get_purchase_order` | read | Get purchase order |
| `fieldpulse_list_vendors` | read | List vendors |
| `fieldpulse_get_vendor` | read | Get vendor |
| `fieldpulse_list_company_profiles` | read | List company profiles |
| `fieldpulse_list_users` | read | List users |
| `fieldpulse_list_teams` | read | List teams |
| `fieldpulse_list_tags` | read | List tags |
| `fieldpulse_list_lead_sources` | read | List lead sources |
| `fieldpulse_list_pipeline_statuses` | read | List pipeline statuses |
| `fieldpulse_list_custom_fields` | read | List custom fields |
| `fieldpulse_list_comments` | read | List comments |
| `fieldpulse_list_subtasks` | read | List subtasks |
| `fieldpulse_list_timesheets` | read | List timesheets |
| `fieldpulse_create_customer` | **write** | Create customer |
| `fieldpulse_update_customer` | **write** | Update customer |
| `fieldpulse_create_job` | **write** | Create job |
| `fieldpulse_update_job` | **write** | Update job |
| `fieldpulse_usage_status` | meta | Usage status (free-tier meter) |
| `fieldpulse_request_feature` | meta | Request a missing feature |
| `fieldpulse_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `fieldpulse_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API key) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `fieldpulse_upgrade` (it returns a Stripe Checkout link). Cancel any time with `fieldpulse_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `fieldpulse_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by FieldPulse.
