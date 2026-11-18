# Merchant360 MCP by usefulapi

Use your [Merchant360](TODO-HOMEPAGE) account from Claude, Cursor, or any MCP client. Read the staff roster, shifts and time-off or shift-trade requests, and create, change, delete or publish shifts and decide requests. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://merchant360.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://merchant360.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http merchant360 https://merchant360.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=merchant360&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmerchant360.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "merchant360": {
      "url": "https://merchant360.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Merchant360 credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/merchant360/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Merchant360 API key** (`m360_live_…` or `m360_test_…`, created under **Developers & API**, owner only, with the `scheduling:read` scope and `scheduling:write` to change shifts). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `merchant360_check_key` | read | Check the API key |
| `merchant360_list_staff` | read | List staff |
| `merchant360_list_shifts` | read | List shifts |
| `merchant360_get_shift` | read | Get a shift |
| `merchant360_list_schedule_requests` | read | List schedule requests |
| `merchant360_create_shift` | **write** | Create a draft shift |
| `merchant360_update_shift` | **write** | Update a shift |
| `merchant360_delete_shift` | **write** | Delete a shift |
| `merchant360_publish_shifts` | **write** | Publish shifts |
| `merchant360_decide_schedule_request` | **write** | Approve or deny a schedule request |
| `merchant360_list_payments` | read | List payments |
| `merchant360_get_payment` | read | Get a payment |
| `merchant360_list_invoices` | read | List invoices |
| `merchant360_get_invoice` | read | Get an invoice |
| `merchant360_list_estimates` | read | List estimates |
| `merchant360_list_customers` | read | List customers |
| `merchant360_get_customer` | read | Get a customer |
| `merchant360_list_catalog` | read | List catalog items |
| `merchant360_get_catalog_item` | read | Get a catalog item |
| `merchant360_list_subscriptions` | read | List subscriptions |
| `merchant360_get_subscription` | read | Get a subscription |
| `merchant360_list_plans` | read | List subscription plans |
| `merchant360_list_appointments` | read | List appointments |
| `merchant360_get_appointment` | read | Get an appointment |
| `merchant360_list_reservations` | read | List reservations |
| `merchant360_get_reservation` | read | Get a reservation |
| `merchant360_list_classes` | read | List classes |
| `merchant360_list_class_sessions` | read | List class sessions |
| `merchant360_list_session_bookings` | read | List a class session's roster |
| `merchant360_list_credit_memos` | read | List credit memos |
| `merchant360_list_statements` | read | List statement months |
| `merchant360_list_tax_rates` | read | List tax rates |
| `merchant360_list_payment_links` | read | List payment links |
| `merchant360_create_customer` | **write** | Create a customer |
| `merchant360_update_customer` | **write** | Update a customer |
| `merchant360_create_invoice` | **write** | Create an invoice |
| `merchant360_create_estimate` | **write** | Create an estimate |
| `merchant360_send_invoice` | **write** | Send an invoice |
| `merchant360_create_catalog_item` | **write** | Create a catalog item |
| `merchant360_update_catalog_item` | **write** | Update a catalog item |
| `merchant360_create_appointment` | **write** | Create an appointment |
| `merchant360_update_appointment_status` | **write** | Update an appointment's status |
| `merchant360_usage_status` | meta | Usage status (free-tier meter) |
| `merchant360_request_feature` | meta | Request a missing feature |
| `merchant360_upgrade` | meta | Upgrade to Pro or Pro+ |
| `merchant360_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `merchant360_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `merchant360_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `merchant360_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
