# smallinvoice MCP by usefulapi

**Live endpoint:** `https://smallinvoice.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/smallinvoice

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://smallinvoice.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http smallinvoice https://smallinvoice.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=smallinvoice&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsmallinvoice.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "smallinvoice": {
      "url": "https://smallinvoice.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your smallinvoice credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/smallinvoice/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `smallinvoice_get_owner` | read | Get the account owner |
| `smallinvoice_list_contacts` | read | List contacts |
| `smallinvoice_get_contact` | read | Get a contact |
| `smallinvoice_list_contact_addresses` | read | List a contact's addresses |
| `smallinvoice_list_contact_people` | read | List a contact's people |
| `smallinvoice_list_contact_groups` | read | List contact groups |
| `smallinvoice_list_invoices` | read | List invoices |
| `smallinvoice_get_invoice` | read | Get an invoice |
| `smallinvoice_list_invoice_payments` | read | List payments of an invoice |
| `smallinvoice_list_offers` | read | List offers |
| `smallinvoice_get_offer` | read | Get an offer |
| `smallinvoice_list_order_confirmations` | read | List order confirmations |
| `smallinvoice_get_order_confirmation` | read | Get an order confirmation |
| `smallinvoice_list_delivery_notes` | read | List delivery notes |
| `smallinvoice_get_delivery_note` | read | Get a delivery note |
| `smallinvoice_list_products` | read | List catalog products |
| `smallinvoice_list_services` | read | List catalog services |
| `smallinvoice_list_units` | read | List units |
| `smallinvoice_list_bank_accounts` | read | List bank accounts |
| `smallinvoice_list_projects` | read | List projects |
| `smallinvoice_get_project` | read | Get a project |
| `smallinvoice_list_working_hours` | read | List working hours |
| `smallinvoice_list_efforts` | read | List efforts |
| `smallinvoice_list_activities` | read | List activities |
| `smallinvoice_list_cost_units` | read | List cost units |
| `smallinvoice_create_contact` | **write** | Create a contact |
| `smallinvoice_create_invoice` | **write** | Create an invoice |
| `smallinvoice_usage_status` | meta | Usage status (free-tier meter) |
| `smallinvoice_request_feature` | meta | Request a missing feature |
| `smallinvoice_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `smallinvoice_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `smallinvoice_upgrade` (it returns a Stripe Checkout link). Cancel any time with `smallinvoice_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `smallinvoice_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
