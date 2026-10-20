# SmartBill MCP by usefulapi

Use [SmartBill](https://www.smartbill.ro) from Claude, Cursor, or any MCP client — document series, VAT rates, stock, payment status, clients, suppliers, products and warehouses, plus invoices and estimates (drafts by default), storno, cancel/restore, payments and sending documents by e-mail.
Hosted, no local install: connect with your own SmartBill credentials.

**Live endpoint:** `https://smartbill.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/smartbill

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://smartbill.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http smartbill https://smartbill.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=smartbill&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsmartbill.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "smartbill": {
      "url": "https://smartbill.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SmartBill credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/smartbill/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `smartbill_list_series` | read | List document series |
| `smartbill_list_taxes` | read | List VAT rates (V1) |
| `smartbill_get_stock` | read | Get stock levels |
| `smartbill_get_invoice_payment_status` | read | Get invoice payment status |
| `smartbill_get_estimate_invoices` | read | Get invoices of a proforma |
| `smartbill_list_clients` | read | List or search clients |
| `smartbill_get_client` | read | Get a client |
| `smartbill_list_suppliers` | read | List or search suppliers |
| `smartbill_get_supplier` | read | Get a supplier |
| `smartbill_list_products` | read | List or search products and services |
| `smartbill_get_product` | read | Get a product or service |
| `smartbill_list_warehouses` | read | List warehouses |
| `smartbill_list_vat_rates` | read | List VAT rates (V3) |
| `smartbill_create_invoice` | **write** | Create an invoice |
| `smartbill_create_invoice_from_estimate` | **write** | Create an invoice from a proforma |
| `smartbill_create_estimate` | **write** | Create a proforma |
| `smartbill_reverse_invoice` | **write** | Reverse an invoice (storno) |
| `smartbill_cancel_invoice` | **write** | Cancel an invoice |
| `smartbill_restore_invoice` | **write** | Restore a cancelled invoice |
| `smartbill_cancel_estimate` | **write** | Cancel a proforma |
| `smartbill_restore_estimate` | **write** | Restore a cancelled proforma |
| `smartbill_record_invoice_payment` | **write** | Record a payment against invoices |
| `smartbill_send_document` | **write** | Email an invoice or proforma |
| `smartbill_usage_status` | meta | Usage status (free-tier meter) |
| `smartbill_request_feature` | meta | Request a missing feature |
| `smartbill_upgrade` | meta | Upgrade to Pro (unlimited) |
| `smartbill_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per company) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `smartbill_upgrade` (it returns a Stripe Checkout link). Cancel any time with `smartbill_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `smartbill_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by SmartBill.
