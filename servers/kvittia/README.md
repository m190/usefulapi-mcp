# Kvittia MCP by usefulapi

Use your [Kvittia](https://kvittia.se) account from Claude, Cursor, or any MCP client. It reads receipts, supplier and customer invoices, bank lines and company risk data, and it uploads and updates receipts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://kvittia.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://kvittia.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http kvittia https://kvittia.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=kvittia&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fkvittia.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "kvittia": {
      "url": "https://kvittia.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Kvittia credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/kvittia/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Kvittia API key** (it starts with `kv_live_`), created in Kvittia under **Inställningar → API → Skapa nyckel**. Choose **Läsa** for read-only use, or **Läsa och skriva** to upload and change receipts. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `kvittia_get_company` | read | Get the company |
| `kvittia_list_references` | read | List reference values |
| `kvittia_list_receipts` | read | List receipts |
| `kvittia_get_receipt` | read | Get a receipt |
| `kvittia_list_suppliers` | read | List suppliers |
| `kvittia_list_supplier_invoices` | read | List supplier invoices |
| `kvittia_get_supplier_invoice` | read | Get a supplier invoice |
| `kvittia_list_customer_invoices` | read | List customer invoices |
| `kvittia_list_bank_transactions` | read | List bank transactions |
| `kvittia_list_invoices` | read | List invoices |
| `kvittia_get_invoice` | read | Get an invoice |
| `kvittia_lookup_company` | read | Look up a company |
| `kvittia_upload_receipt` | **write** | Upload a receipt |
| `kvittia_update_receipt` | **write** | Update a receipt |
| `kvittia_usage_status` | meta | Usage status (free-tier meter) |
| `kvittia_request_feature` | meta | Request a missing feature |
| `kvittia_upgrade` | meta | Upgrade to Pro or Pro+ |
| `kvittia_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `kvittia_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `kvittia_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `kvittia_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
