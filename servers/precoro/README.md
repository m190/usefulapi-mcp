# Precoro MCP by usefulapi

Read Precoro purchase orders, invoices, suppliers and budgets; approve, reject and submit documents.

**Live endpoint:** `https://precoro.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/precoro

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://precoro.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http precoro https://precoro.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=precoro&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fprecoro.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "precoro": {
      "url": "https://precoro.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Precoro credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/precoro/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Precoro **API key**, the **login email** of the same Precoro user, and pick your Precoro **region**.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `precoro_list_purchase_orders` | read | List purchase orders |
| `precoro_get_purchase_order` | read | Get a purchase order |
| `precoro_list_purchase_requisitions` | read | List purchase requisitions |
| `precoro_get_purchase_requisition` | read | Get a purchase requisition |
| `precoro_list_invoices` | read | List invoices and credit notes |
| `precoro_get_invoice` | read | Get an invoice |
| `precoro_list_expenses` | read | List expenses |
| `precoro_get_expense` | read | Get an expense |
| `precoro_list_receipts` | read | List receipts |
| `precoro_get_receipt` | read | Get a receipt |
| `precoro_list_payments` | read | List payments |
| `precoro_list_budgets` | read | List budgets |
| `precoro_list_contracts` | read | List supplier contracts |
| `precoro_list_ap_inbox` | read | List AP inbox documents |
| `precoro_list_suppliers` | read | List suppliers |
| `precoro_get_supplier` | read | Get a supplier |
| `precoro_list_items` | read | List catalog items |
| `precoro_get_item` | read | Get a catalog item |
| `precoro_list_reference_data` | read | List reference data |
| `precoro_approve_document` | **write** | Approve a document |
| `precoro_reject_document` | **write** | Reject a document |
| `precoro_submit_document` | **write** | Submit a draft for approval |
| `precoro_create_purchase_requisition` | **write** | Create a purchase requisition (draft) |
| `precoro_create_supplier` | **write** | Create a supplier |
| `precoro_usage_status` | meta | Usage status (free-tier meter) |
| `precoro_request_feature` | meta | Request a missing feature |
| `precoro_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `precoro_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `precoro_upgrade` (it returns a Stripe Checkout link). Cancel any time with `precoro_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `precoro_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Precoro.
