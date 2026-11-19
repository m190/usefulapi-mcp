# TS Facturas MCP by usefulapi

Use your [TS Facturas](https://www.billin.net) account from Claude, Cursor, or any MCP client. Read invoices, expenses, contacts and payments, and create contacts, products and payments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://ts-facturas.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ts-facturas.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ts-facturas https://ts-facturas.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ts-facturas&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fts-facturas.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ts-facturas": {
      "url": "https://ts-facturas.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TS Facturas credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ts-facturas/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **API client ID** and **API client secret** of your business (TS Facturas → Integraciones → API Pública → Generar credenciales). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `tsfacturas_get_account` | read | Get account |
| `tsfacturas_list_invoices` | read | List invoices |
| `tsfacturas_get_invoice` | read | Get invoice |
| `tsfacturas_list_contacts` | read | List contacts |
| `tsfacturas_list_expenses` | read | List expenses |
| `tsfacturas_list_payments` | read | List payments |
| `tsfacturas_create_contact` | **write** | Create contact |
| `tsfacturas_create_product` | **write** | Create product |
| `tsfacturas_create_payment` | **write** | Create payment |
| `tsfacturas_usage_status` | meta | Usage status (free-tier meter) |
| `tsfacturas_request_feature` | meta | Request a missing feature |
| `tsfacturas_upgrade` | meta | Upgrade to Pro or Pro+ |
| `tsfacturas_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `tsfacturas_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `tsfacturas_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `tsfacturas_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
