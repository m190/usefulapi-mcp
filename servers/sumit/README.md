# SUMIT MCP by usefulapi

Use your [SUMIT](https://sumit.co.il) account from Claude, Cursor, or any MCP client. It reads accounting documents, customer debts, catalog items, stock levels, VAT rates and exchange rates. It is read only. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://sumit.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sumit.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sumit https://sumit.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sumit&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsumit.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sumit": {
      "url": "https://sumit.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SUMIT credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sumit/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **SUMIT company ID** (from the same SUMIT account) and a **SUMIT API key**, created at app.sumit.co.il/developers/keys. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sumit_list_documents` | read | List documents |
| `sumit_get_document` | read | Get a document |
| `sumit_get_next_document_number` | read | Get next document number |
| `sumit_get_customer_debt` | read | Get a customer's debt |
| `sumit_get_debt_report` | read | Get the debt report |
| `sumit_list_income_items` | read | List income items |
| `sumit_list_stock_levels` | read | List stock levels |
| `sumit_get_vat_rate` | read | Get the VAT rate |
| `sumit_get_exchange_rate` | read | Get an exchange rate |
| `sumit_usage_status` | meta | Usage status (free-tier meter) |
| `sumit_request_feature` | meta | Request a missing feature |
| `sumit_upgrade` | meta | Upgrade to Pro or Pro+ |
| `sumit_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `sumit_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `sumit_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `sumit_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
