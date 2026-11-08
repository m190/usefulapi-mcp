# FieldEdge MCP by usefulapi

Use your [FieldEdge](https://www.fieldedge.com) account from Claude, Cursor, or any MCP client. Read work orders, customers, invoices and agreements, and create customers, notes and work orders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://fieldedge.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://fieldedge.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http fieldedge https://fieldedge.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=fieldedge&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffieldedge.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "fieldedge": {
      "url": "https://fieldedge.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your FieldEdge credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/fieldedge/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Client ID** and **Client secret** from a FieldEdge Marketplace app, and your **Tenant ID** from the FieldEdge web portal. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fieldedge_list_work_orders` | read | List work orders |
| `fieldedge_get_work_order` | read | Get a work order |
| `fieldedge_search_work_orders_by_address` | read | Find work orders at an address |
| `fieldedge_list_work_order_assignments` | read | List a work order's technician assignments |
| `fieldedge_search_customers` | read | Search customers |
| `fieldedge_get_customer` | read | Get a customer |
| `fieldedge_get_customer_by_phone` | read | Find a customer by phone number |
| `fieldedge_search_customers_by_address` | read | Find customers at an address |
| `fieldedge_list_customer_notes` | read | List a customer's notes |
| `fieldedge_list_customer_attachments` | read | List a customer's file attachments |
| `fieldedge_list_tags` | read | List customer tags |
| `fieldedge_list_invoices` | read | List invoices |
| `fieldedge_get_invoice` | read | Get an invoice |
| `fieldedge_list_quotes` | read | List quotes |
| `fieldedge_get_quote` | read | Get a quote |
| `fieldedge_list_agreements` | read | List service agreements |
| `fieldedge_get_agreement` | read | Get a service agreement |
| `fieldedge_list_employees` | read | List employees |
| `fieldedge_get_employee` | read | Get an employee |
| `fieldedge_list_business_units` | read | List business units |
| `fieldedge_get_business_unit` | read | Get a business unit |
| `fieldedge_list_lead_sources` | read | List lead sources |
| `fieldedge_get_lead_source` | read | Get a lead source |
| `fieldedge_list_tasks` | read | List tasks (service types) |
| `fieldedge_get_task_bundle` | read | Get a task with department and skill |
| `fieldedge_list_items` | read | List inventory items |
| `fieldedge_get_item` | read | Get an inventory item |
| `fieldedge_list_item_categories` | read | List item categories |
| `fieldedge_get_item_category` | read | Get an item category |
| `fieldedge_list_sales_tax_codes` | read | List sales tax codes |
| `fieldedge_list_warehouses` | read | List warehouses |
| `fieldedge_get_warehouse` | read | Get a warehouse |
| `fieldedge_get_lead` | read | Get a lead |
| `fieldedge_get_company` | read | Get a company name |
| `fieldedge_create_customer` | **write** | Create a customer |
| `fieldedge_create_customer_note` | **write** | Add a note to a customer |
| `fieldedge_update_customer_note` | **write** | Edit a customer note |
| `fieldedge_create_tag` | **write** | Create a customer tag |
| `fieldedge_add_customer_tag` | **write** | Tag a customer |
| `fieldedge_remove_customer_tag` | **write** | Remove a tag from a customer |
| `fieldedge_create_work_order` | **write** | Create a work order |
| `fieldedge_update_work_order` | **write** | Update a work order |
| `fieldedge_assign_technician` | **write** | Assign a technician to a work order |
| `fieldedge_update_assignment_status` | **write** | Change a technician assignment's status |
| `fieldedge_remove_assignment` | **write** | Remove a technician from a work order |
| `fieldedge_usage_status` | meta | Usage status (free-tier meter) |
| `fieldedge_request_feature` | meta | Request a missing feature |
| `fieldedge_upgrade` | meta | Upgrade to Pro or Pro+ |
| `fieldedge_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `fieldedge_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `fieldedge_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `fieldedge_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
