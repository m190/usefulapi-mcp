# RepairDesk MCP by usefulapi

Remote MCP endpoint: https://repairdesk.usefulapi.io/mcp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://repairdesk.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http repairdesk https://repairdesk.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=repairdesk&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frepairdesk.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "repairdesk": {
      "url": "https://repairdesk.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your RepairDesk credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/repairdesk/

<!-- connect:end (generated above, edit below) -->

Connect with your RepairDesk credentials using the hosted authorization flow.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `repairdesk_list_customers` | read | List customers |
| `repairdesk_get_customer` | read | Get a customer |
| `repairdesk_list_tickets` | read | List repair tickets |
| `repairdesk_get_ticket` | read | Get a repair ticket |
| `repairdesk_list_invoices` | read | List invoices |
| `repairdesk_get_invoice` | read | Get an invoice |
| `repairdesk_get_invoice_due` | read | Get invoice amount due |
| `repairdesk_list_inventory` | read | Search inventory |
| `repairdesk_list_devices` | read | List device models |
| `repairdesk_list_parts` | read | List repair parts |
| `repairdesk_list_statuses` | read | List ticket statuses |
| `repairdesk_list_repair_categories` | read | List repair categories |
| `repairdesk_list_networks` | read | List networks |
| `repairdesk_get_inventory_options` | read | Read inventory options |
| `repairdesk_list_employees` | read | List repair staff |
| `repairdesk_list_appointments` | read | List appointments and leads |
| `repairdesk_add_internal_ticket_note` | **write** | Add an internal ticket note |
| `repairdesk_usage_status` | meta | Usage status (free-tier meter) |
| `repairdesk_request_feature` | meta | Request a missing feature |
| `repairdesk_upgrade` | meta | Upgrade to Pro or Pro+ |
| `repairdesk_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API key) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per API key) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `repairdesk_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `repairdesk_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `repairdesk_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

See the repository license.
