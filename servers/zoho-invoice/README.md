# Zoho Invoice MCP by usefulapi

Use your [Zoho Invoice](https://www.zoho.com/invoice) account from Claude, Cursor, or any MCP client. It reads invoices, customers and items, and creates invoice drafts, marks invoices sent, voids them or emails them. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://zoho-invoice.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://zoho-invoice.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http zoho-invoice https://zoho-invoice.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=zoho-invoice&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fzoho-invoice.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "zoho-invoice": {
      "url": "https://zoho-invoice.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your Zoho Invoice account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/zoho-invoice/

<!-- connect:end (generated above, edit below) -->

On first connect you sign in to Zoho Invoice and approve access. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `zohoinvoice_list_organizations` | read | List organizations |
| `zohoinvoice_list_invoices` | read | List invoices |
| `zohoinvoice_get_invoice` | read | Get an invoice |
| `zohoinvoice_list_contacts` | read | List customers |
| `zohoinvoice_get_contact` | read | Get a customer |
| `zohoinvoice_list_items` | read | List items |
| `zohoinvoice_create_invoice` | **write** | Create an invoice draft |
| `zohoinvoice_mark_invoice_sent` | **write** | Mark an invoice as sent |
| `zohoinvoice_void_invoice` | **write** | Void an invoice |
| `zohoinvoice_email_invoice` | **write** | Email an invoice to the customer |
| `zohoinvoice_usage_status` | meta | Usage status (free-tier meter) |
| `zohoinvoice_request_feature` | meta | Request a missing feature |
| `zohoinvoice_upgrade` | meta | Upgrade to Pro or Pro+ |
| `zohoinvoice_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `zohoinvoice_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `zohoinvoice_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `zohoinvoice_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
