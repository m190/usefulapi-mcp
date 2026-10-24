# Számlázz.hu MCP by usefulapi

Use [Számlázz.hu](https://www.szamlazz.hu) through the Számla Agent API from Claude, Cursor, or any MCP client — get invoices and their PDFs, receipts and taxpayer data, plus issuing and reversing invoices, deleting pro formas, registering payments, and creating, reversing and sending receipts. Needs the Számla Agent add-on and an Agent key.
Hosted, no local install: connect with your own Számlázz.hu credentials.

**Live endpoint:** `https://szamlazz-hu.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/szamlazz-hu

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://szamlazz-hu.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http szamlazz-hu https://szamlazz-hu.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=szamlazz-hu&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fszamlazz-hu.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "szamlazz-hu": {
      "url": "https://szamlazz-hu.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Számlázz.hu credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/szamlazz-hu/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `szamlazz_get_invoice` | read | Get an invoice |
| `szamlazz_get_invoice_pdf` | read | Get the PDF of an invoice |
| `szamlazz_check_taxpayer` | read | Check a Hungarian taxpayer |
| `szamlazz_get_receipt` | read | Get a receipt |
| `szamlazz_create_invoice` | **write** | Issue an invoice (fiscal, cannot be undone) |
| `szamlazz_reverse_invoice` | **write** | Reverse (storno) an invoice (fiscal, cannot be undone) |
| `szamlazz_delete_proforma` | **write** | Delete a pro forma invoice |
| `szamlazz_register_payment` | **write** | Register payments on an invoice |
| `szamlazz_create_receipt` | **write** | Issue a receipt (fiscal, cannot be undone) |
| `szamlazz_reverse_receipt` | **write** | Reverse (storno) a receipt (fiscal, cannot be undone) |
| `szamlazz_send_receipt` | **write** | E-mail a receipt |
| `szamlazz_usage_status` | meta | Usage status (free-tier meter) |
| `szamlazz_request_feature` | meta | Request a missing feature |
| `szamlazz_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `szamlazz_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per Agent key) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `szamlazz_upgrade` (it returns a Stripe Checkout link). Cancel any time with `szamlazz_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `szamlazz_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Számlázz.hu.
