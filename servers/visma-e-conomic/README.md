# e-conomic MCP by usefulapi

Use your [e-conomic](https://www.e-conomic.com) account from Claude, Cursor, or any MCP client. Read invoices, customers, products and the ledger, and create customers, products and draft invoices that are never booked or sent. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://visma-e-conomic.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://visma-e-conomic.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http visma-e-conomic https://visma-e-conomic.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=visma-e-conomic&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fvisma-e-conomic.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "visma-e-conomic": {
      "url": "https://visma-e-conomic.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your e-conomic credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/visma-e-conomic/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **agreement grant token** (e-conomic → All settings → Extensions → Apps). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `economic_get_self` | read | Get agreement |
| `economic_list_customers` | read | List customers |
| `economic_get_customer` | read | Get customer |
| `economic_create_customer` | **write** | Create customer |
| `economic_list_booked_invoices` | read | List booked invoices |
| `economic_get_booked_invoice` | read | Get booked invoice |
| `economic_list_unpaid_invoices` | read | List unpaid invoices |
| `economic_list_overdue_invoices` | read | List overdue invoices |
| `economic_list_draft_invoices` | read | List draft invoices |
| `economic_get_draft_invoice` | read | Get draft invoice |
| `economic_create_draft_invoice` | **write** | Create draft invoice |
| `economic_list_products` | read | List products |
| `economic_get_product` | read | Get product |
| `economic_create_product` | **write** | Create product |
| `economic_list_accounts` | read | List accounts |
| `economic_get_account` | read | Get account |
| `economic_list_journals` | read | List journals |
| `economic_list_journal_vouchers` | read | List journal vouchers |
| `economic_list_suppliers` | read | List suppliers |
| `economic_get_supplier` | read | Get supplier |
| `economic_list_currencies` | read | List currencies |
| `economic_list_payment_terms` | read | List payment terms |
| `economic_list_vat_zones` | read | List VAT zones |
| `economic_list_customer_groups` | read | List customer groups |
| `economic_list_product_groups` | read | List product groups |
| `economic_list_units` | read | List units |
| `economic_list_layouts` | read | List layouts |
| `economic_list_accounting_years` | read | List accounting years |
| `economic_usage_status` | meta | Usage status (free-tier meter) |
| `economic_request_feature` | meta | Request a missing feature |
| `economic_upgrade` | meta | Upgrade to Pro or Pro+ |
| `economic_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `economic_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `economic_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `economic_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
