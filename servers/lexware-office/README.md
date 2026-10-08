# Lexware Office MCP by usefulapi

Use [Lexware Office](https://www.lexware.de/office/) from Claude, Cursor, or any MCP client — read Lexware Office contacts, articles, invoices and vouchers; create contacts and draft invoices.
Hosted, no local install: connect with your own Lexware Office credentials.

**Live endpoint:** `https://lexware-office.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/lexware-office

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://lexware-office.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http lexware-office https://lexware-office.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=lexware-office&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flexware-office.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "lexware-office": {
      "url": "https://lexware-office.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/lexware-office/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Lexware Office Public API key**.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `lexware_get_profile` | read | Get the company profile |
| `lexware_list_contacts` | read | List or search contacts |
| `lexware_list_articles` | read | List articles |
| `lexware_list_vouchers` | read | List vouchers (invoices, quotations, receipts...) |
| `lexware_get_invoice` | read | Get an invoice |
| `lexware_get_quotation` | read | Get a quotation |
| `lexware_get_credit_note` | read | Get a credit note |
| `lexware_get_order_confirmation` | read | Get an order confirmation |
| `lexware_get_delivery_note` | read | Get a delivery note |
| `lexware_get_down_payment_invoice` | read | Get a down payment invoice |
| `lexware_get_dunning` | read | Get a dunning |
| `lexware_get_bookkeeping_voucher` | read | Get a bookkeeping voucher |
| `lexware_get_article` | read | Get an article |
| `lexware_get_contact` | read | Get a contact |
| `lexware_get_payments` | read | Get a voucher's payments |
| `lexware_list_countries` | read | List countries |
| `lexware_list_payment_conditions` | read | List payment conditions |
| `lexware_list_posting_categories` | read | List posting categories |
| `lexware_create_contact` | **write** | Create a contact |
| `lexware_create_draft_invoice` | **write** | Create a draft invoice |
| `lexware_create_draft_quotation` | **write** | Create a draft quotation |
| `lexware_usage_status` | meta | Usage status (free-tier meter) |
| `lexware_upgrade` | meta | Upgrade to Pro (unlimited) |
| `lexware_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per organization) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `lexware_upgrade` (it returns a Stripe Checkout link). Cancel any time with `lexware_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `lexware_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Lexware Office.
