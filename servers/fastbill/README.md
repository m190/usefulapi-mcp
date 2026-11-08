# FastBill MCP by usefulapi

**Live endpoint:** `https://fastbill.usefulapi.io/mcp`

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://fastbill.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http fastbill https://fastbill.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=fastbill&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffastbill.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "fastbill": {
      "url": "https://fastbill.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your FastBill credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/fastbill/

<!-- connect:end (generated above, edit below) -->

On first connect you will paste your **FastBill login e-mail and API key**. They are validated, stored per-user, and scoped to you. No keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fastbill_list_customers` | read | List customers |
| `fastbill_get_customer` | read | Get customer |
| `fastbill_list_contacts` | read | List contacts |
| `fastbill_list_invoices` | read | List invoices |
| `fastbill_get_invoice` | read | Get invoice |
| `fastbill_list_recurring_invoices` | read | List recurring invoices |
| `fastbill_list_estimates` | read | List estimates |
| `fastbill_list_expenses` | read | List expenses |
| `fastbill_list_revenues` | read | List revenues |
| `fastbill_list_articles` | read | List products |
| `fastbill_list_projects` | read | List projects |
| `fastbill_list_time_entries` | read | List time entries |
| `fastbill_list_templates` | read | List document templates |
| `fastbill_create_customer` | **write** | Create customer |
| `fastbill_update_customer` | **write** | Update customer |
| `fastbill_create_invoice` | **write** | Create invoice |
| `fastbill_complete_invoice` | **write** | Finalize invoice |
| `fastbill_set_invoice_paid` | **write** | Mark invoice paid |
| `fastbill_create_estimate` | **write** | Create estimate |
| `fastbill_create_article` | **write** | Create product |
| `fastbill_create_project` | **write** | Create project |
| `fastbill_create_time_entry` | **write** | Create time entry |
| `fastbill_usage_status` | meta | Usage status (free-tier meter) |
| `fastbill_request_feature` | meta | Request a missing feature |
| `fastbill_upgrade` | meta | Upgrade to Pro or Pro+ |
| `fastbill_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per account) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `fastbill_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `fastbill_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `fastbill_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
