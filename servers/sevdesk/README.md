# sevdesk MCP by usefulapi

Use [sevdesk](https://sevdesk.de) from Claude, Cursor, or any MCP client — look up contacts, invoices, vouchers, credit notes, orders, parts, payment accounts and bank transactions, and create contacts and draft invoices.
Hosted, no local install: connect with your own sevdesk credentials.

**Live endpoint:** `https://sevdesk.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/sevdesk

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sevdesk.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sevdesk https://sevdesk.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sevdesk&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsevdesk.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sevdesk": {
      "url": "https://sevdesk.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sevdesk/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **sevDesk API token** (Settings → Users → your user → API token).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sevdesk_get_bookkeeping_system_version` | read | Get the bookkeeping system version |
| `sevdesk_list_contacts` | read | List contacts |
| `sevdesk_get_contact` | read | Get one contact |
| `sevdesk_list_communication_ways` | read | List contact emails, phones and websites |
| `sevdesk_list_communication_way_keys` | read | List communication way keys |
| `sevdesk_list_invoices` | read | List invoices |
| `sevdesk_get_invoice` | read | Get one invoice |
| `sevdesk_get_invoice_positions` | read | Get an invoice's line items |
| `sevdesk_list_vouchers` | read | List vouchers (receipts) |
| `sevdesk_get_voucher` | read | Get one voucher |
| `sevdesk_list_credit_notes` | read | List credit notes |
| `sevdesk_list_orders` | read | List orders and quotes |
| `sevdesk_list_parts` | read | List parts (products) |
| `sevdesk_list_check_accounts` | read | List payment accounts |
| `sevdesk_get_check_account_balance` | read | Get a payment account's balance at a date |
| `sevdesk_list_transactions` | read | List bank transactions |
| `sevdesk_create_contact` | **write** | Create a contact |
| `sevdesk_update_contact` | **write** | Update a contact |
| `sevdesk_add_communication_way` | **write** | Add an email, phone or website to a contact |
| `sevdesk_create_draft_invoice` | **write** | Create a draft invoice |
| `sevdesk_usage_status` | meta | Usage status (free-tier meter) |
| `sevdesk_upgrade` | meta | Upgrade to Pro (unlimited) |
| `sevdesk_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `sevdesk_upgrade` (it returns a Stripe Checkout link). Cancel any time with `sevdesk_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `sevdesk_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by sevdesk.
