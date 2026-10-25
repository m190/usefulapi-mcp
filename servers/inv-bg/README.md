# inv.bg MCP by usefulapi

Use [inv.bg](https://inv.bg) from Claude, Cursor, or any MCP client — work with your invoices, clients, items, payments and bank transactions. Hosted, no local install: connect with your own inv.bg credentials.

**Live endpoint:** `https://inv-bg.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/inv-bg

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://inv-bg.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http inv-bg https://inv-bg.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=inv-bg&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Finv-bg.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "inv-bg": {
      "url": "https://inv-bg.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your inv.bg credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/inv-bg/

<!-- connect:end (generated above, edit below) -->

On first connect you'll enter your **inv.bg API token** (Settings > About the Company > API access). It is validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `invbg_get_account` | read | Get account |
| `invbg_get_firm` | read | Get company |
| `invbg_list_invoices` | read | List invoices |
| `invbg_get_invoice` | read | Get invoice |
| `invbg_list_invoice_types` | read | List document types |
| `invbg_get_next_invoice_number` | read | Get next invoice number |
| `invbg_list_number_sets` | read | List number sets |
| `invbg_list_payment_methods` | read | List payment methods |
| `invbg_list_vat_exemption_reasons` | read | List VAT exemption reasons |
| `invbg_list_clients` | read | List clients |
| `invbg_get_client` | read | Get client |
| `invbg_list_client_contacts` | read | List client contacts |
| `invbg_list_items` | read | List items |
| `invbg_get_item` | read | Get item |
| `invbg_list_item_units` | read | List units of measure |
| `invbg_list_payments` | read | List payments |
| `invbg_get_payment` | read | Get payment |
| `invbg_list_bank_accounts` | read | List bank accounts |
| `invbg_list_bank_transactions` | read | List bank transactions |
| `invbg_list_cashboxes` | read | List cashboxes |
| `invbg_get_exchange_rate` | read | Get exchange rate |
| `invbg_create_client` | **write** | Create client |
| `invbg_update_client` | **write** | Update client |
| `invbg_create_item` | **write** | Create item |
| `invbg_create_invoice` | **write** | Create invoice |
| `invbg_send_invoice_email` | **write** | Email invoice |
| `invbg_record_invoice_payment` | **write** | Record invoice payment |
| `invbg_usage_status` | meta | Usage status (free-tier meter) |
| `invbg_request_feature` | meta | Request a missing feature |
| `invbg_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `invbg_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per company) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `invbg_upgrade` (it returns a Stripe Checkout link). Cancel any time with `invbg_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `invbg_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
