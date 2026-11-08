# ExpenseOnDemand MCP by usefulapi

Use your [ExpenseOnDemand](https://developer.expenseondemand.com) account from Claude, Cursor, or any MCP client. Read accounting exports, payroll totals, users, customers, cost centres, categories and grades, and add or update employees, customers and cost centres, or deactivate an employee. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://expenseondemand.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://expenseondemand.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http expenseondemand https://expenseondemand.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=expenseondemand&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fexpenseondemand.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "expenseondemand": {
      "url": "https://expenseondemand.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ExpenseOnDemand credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/expenseondemand/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **API subscription key** (from the ExpenseOnDemand developer portal), your **ClientID** and your **ClientKey** (both shown in the ExpenseOnDemand app for your subscription). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `expenseondemand_export_accounting` | read | Export accounting data |
| `expenseondemand_get_payroll_export` | read | Get payroll export |
| `expenseondemand_list_export_templates` | read | List export templates |
| `expenseondemand_list_expense_categories` | read | List expense categories |
| `expenseondemand_list_grades` | read | List grades |
| `expenseondemand_list_customers` | read | List customers |
| `expenseondemand_add_customer` | **write** | Add a customer |
| `expenseondemand_update_customer` | **write** | Update a customer |
| `expenseondemand_list_cost_centres` | read | List cost centres |
| `expenseondemand_add_cost_centre` | **write** | Add a cost centre |
| `expenseondemand_update_cost_centre` | **write** | Update a cost centre |
| `expenseondemand_list_users` | read | List users |
| `expenseondemand_add_employee` | **write** | Invite an employee |
| `expenseondemand_update_employee` | **write** | Update an employee |
| `expenseondemand_deactivate_employee` | **write** | Deactivate an employee |
| `expenseondemand_usage_status` | meta | Usage status (free-tier meter) |
| `expenseondemand_request_feature` | meta | Request a missing feature |
| `expenseondemand_upgrade` | meta | Upgrade to Pro or Pro+ |
| `expenseondemand_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `expenseondemand_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `expenseondemand_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `expenseondemand_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
