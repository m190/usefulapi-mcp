# ServiceBridge MCP by usefulapi

Use your [ServiceBridge](https://www.servicebridge.com) account from Claude, Cursor, or any MCP client. Read customers, work orders, estimates, invoices and tasks, and add leads, tasks and notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://servicebridge.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://servicebridge.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http servicebridge https://servicebridge.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=servicebridge&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fservicebridge.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "servicebridge": {
      "url": "https://servicebridge.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ServiceBridge credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/servicebridge/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **API User ID** and **API User password** (ServiceBridge → Settings → Public API Settings → API Users). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `servicebridge_whoami` | read | Current API user |
| `servicebridge_list_customers` | read | List customers |
| `servicebridge_get_customer` | read | Get customer |
| `servicebridge_list_contacts` | read | List contacts |
| `servicebridge_list_locations` | read | List locations |
| `servicebridge_list_work_orders` | read | List work orders |
| `servicebridge_get_work_order` | read | Get work order |
| `servicebridge_list_estimates` | read | List estimates |
| `servicebridge_get_estimate` | read | Get estimate |
| `servicebridge_list_invoices` | read | List invoices |
| `servicebridge_get_invoice` | read | Get invoice |
| `servicebridge_list_payments` | read | List payments |
| `servicebridge_list_tasks` | read | List tasks |
| `servicebridge_get_task` | read | Get task |
| `servicebridge_list_leads` | read | List leads |
| `servicebridge_get_lead` | read | Get lead |
| `servicebridge_list_employees` | read | List employees |
| `servicebridge_list_activity_notes` | read | List activity notes |
| `servicebridge_list_teams` | read | List teams |
| `servicebridge_list_payment_methods` | read | List payment methods |
| `servicebridge_get_invoice_statistics` | read | Invoice statistics |
| `servicebridge_create_customer` | **write** | Create customer |
| `servicebridge_update_customer` | **write** | Update customer |
| `servicebridge_create_lead` | **write** | Create lead |
| `servicebridge_create_task` | **write** | Create task |
| `servicebridge_add_activity_note` | **write** | Add activity note |
| `servicebridge_usage_status` | meta | Usage status (free-tier meter) |
| `servicebridge_request_feature` | meta | Request a missing feature |
| `servicebridge_upgrade` | meta | Upgrade to Pro or Pro+ |
| `servicebridge_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `servicebridge_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `servicebridge_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `servicebridge_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
