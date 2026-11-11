# Wrapp MCP by usefulapi

Use your [Wrapp](https://wrapp.ai) account from Claude, Cursor, or any MCP client. Read invoices, their PDFs and myDATA status, and save or delete draft invoices. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://wrapp.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://wrapp.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http wrapp https://wrapp.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=wrapp&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwrapp.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "wrapp": {
      "url": "https://wrapp.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Wrapp credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/wrapp/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Wrapp API key** (in your Wrapp account settings, API) and the **email** of your Wrapp account. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `wrapp_get_account` | read | Get account details |
| `wrapp_list_branches` | read | List branches |
| `wrapp_list_billing_books` | read | List billing books |
| `wrapp_list_vat_exemptions` | read | List VAT exemption reasons |
| `wrapp_search_vat` | read | Look up a company by VAT number |
| `wrapp_list_invoices` | read | List invoices |
| `wrapp_get_invoice` | read | Get an invoice and its myDATA status |
| `wrapp_get_invoice_details` | read | Get an issued invoice in full |
| `wrapp_get_invoice_pdf` | read | Get the invoice PDF |
| `wrapp_count_issued_invoices` | read | Count issued invoices |
| `wrapp_list_open_catering_order_notes` | read | List open catering order notes |
| `wrapp_list_pos_devices` | read | List POS devices |
| `wrapp_list_catering_tables` | read | List catering tables |
| `wrapp_get_catering_table` | read | Get a catering table |
| `wrapp_list_digital_transports` | read | List digital transports |
| `wrapp_get_digital_transport` | read | Get a digital transport |
| `wrapp_get_digital_clientele` | read | Get a digital clientele entry |
| `wrapp_create_draft_invoice` | **write** | Save an invoice as a draft |
| `wrapp_set_invoice_external_id` | **write** | Set your own reference on an invoice |
| `wrapp_delete_draft_invoice` | **write** | Delete a draft invoice |
| `wrapp_usage_status` | meta | Usage status (free-tier meter) |
| `wrapp_request_feature` | meta | Request a missing feature |
| `wrapp_upgrade` | meta | Upgrade to Pro or Pro+ |
| `wrapp_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `wrapp_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `wrapp_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `wrapp_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
