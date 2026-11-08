# Billy MCP by usefulapi

Use [Billy](https://www.billy.dk) from Claude, Cursor, or any MCP client — invoices, bills, contacts, products, accounts, bank lines and postings, plus contacts and draft invoices.
Hosted, no local install: connect with your own Billy credentials.

**Live endpoint:** `https://billy.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/billy

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://billy.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http billy https://billy.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=billy&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbilly.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "billy": {
      "url": "https://billy.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Billy credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/billy/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `billy_get_organization` | read | Get the company |
| `billy_list_contacts` | read | List contacts |
| `billy_get_contact` | read | Get a contact |
| `billy_list_invoices` | read | List invoices |
| `billy_get_invoice` | read | Get an invoice |
| `billy_list_bills` | read | List bills (supplier invoices) |
| `billy_get_bill` | read | Get a bill |
| `billy_list_products` | read | List products |
| `billy_get_product` | read | Get a product |
| `billy_list_accounts` | read | List accounts (chart of accounts) |
| `billy_list_tax_rates` | read | List tax (VAT) rates |
| `billy_list_bank_lines` | read | List bank lines |
| `billy_list_postings` | read | List ledger postings |
| `billy_create_contact` | **write** | Create a contact |
| `billy_create_draft_invoice` | **write** | Create a draft invoice |
| `billy_usage_status` | meta | Usage status (free-tier meter) |
| `billy_request_feature` | meta | Request a missing feature |
| `billy_upgrade` | meta | Upgrade to Pro or Pro+ |
| `billy_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `billy_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `billy_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `billy_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Billy.
