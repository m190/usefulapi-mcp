# Billomat MCP by usefulapi

Use [Billomat](https://www.billomat.com) from Claude, Cursor, or any MCP client — clients, articles, invoices, offers, credit notes, reminders and incoming invoices, plus draft invoices and offers.
Hosted, no local install: connect with your own Billomat credentials.

**Live endpoint:** `https://billomat.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/billomat

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://billomat.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http billomat https://billomat.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=billomat&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbillomat.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "billomat": {
      "url": "https://billomat.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Billomat credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/billomat/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `billomat_get_current_user` | read | Get the current user |
| `billomat_get_company` | read | Get the own company data |
| `billomat_list_clients` | read | List or search clients |
| `billomat_get_client` | read | Get a client |
| `billomat_list_articles` | read | List articles |
| `billomat_get_article` | read | Get an article |
| `billomat_list_suppliers` | read | List suppliers |
| `billomat_get_supplier` | read | Get a supplier |
| `billomat_list_invoices` | read | List invoices |
| `billomat_invoice_totals` | read | Invoice totals by group |
| `billomat_get_invoice` | read | Get an invoice |
| `billomat_list_invoice_items` | read | List the items of an invoice |
| `billomat_list_invoice_payments` | read | List invoice payments |
| `billomat_list_recurring_invoices` | read | List recurring invoices |
| `billomat_list_offers` | read | List offers |
| `billomat_get_offer` | read | Get an offer |
| `billomat_list_confirmations` | read | List order confirmations |
| `billomat_get_confirmation` | read | Get an order confirmation |
| `billomat_list_delivery_notes` | read | List delivery notes |
| `billomat_get_delivery_note` | read | Get a delivery note |
| `billomat_list_credit_notes` | read | List credit notes |
| `billomat_get_credit_note` | read | Get a credit note |
| `billomat_list_reminders` | read | List reminders |
| `billomat_get_reminder` | read | Get a reminder |
| `billomat_list_incoming_invoices` | read | List incoming invoices |
| `billomat_get_incoming_invoice` | read | Get an incoming invoice |
| `billomat_list_taxes` | read | List tax rates |
| `billomat_list_units` | read | List units |
| `billomat_create_client` | **write** | Create a client |
| `billomat_update_client` | **write** | Update a client |
| `billomat_create_article` | **write** | Create an article |
| `billomat_create_draft_invoice` | **write** | Create a draft invoice |
| `billomat_add_invoice_item` | **write** | Add an item to a draft invoice |
| `billomat_create_draft_offer` | **write** | Create a draft offer |
| `billomat_usage_status` | meta | Usage status (free-tier meter) |
| `billomat_request_feature` | meta | Request a missing feature |
| `billomat_upgrade` | meta | Upgrade to Pro (unlimited) |
| `billomat_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `billomat_upgrade` (it returns a Stripe Checkout link). Cancel any time with `billomat_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `billomat_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Billomat.
