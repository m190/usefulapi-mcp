# Invoices Online MCP by usefulapi

Use your [Invoices Online](https://www.invoicesonline.co.za) account from Claude, Cursor, or any MCP client. Read clients, balances, invoices, suppliers, inventory and jobcard status, and create clients. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://invoices-online.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://invoices-online.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http invoices-online https://invoices-online.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=invoices-online&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Finvoices-online.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "invoices-online": {
      "url": "https://invoices-online.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Invoices Online credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/invoices-online/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Invoices Online API username** and **API password**, found under Settings → API Access in invoicing mode. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `invoicesonline_get_business` | read | Get business |
| `invoicesonline_list_clients` | read | List clients |
| `invoicesonline_get_client` | read | Get a client |
| `invoicesonline_find_client_id` | read | Find a client id |
| `invoicesonline_get_client_history` | read | Get client history |
| `invoicesonline_list_client_documents` | read | List client documents |
| `invoicesonline_list_suppliers` | read | List suppliers |
| `invoicesonline_get_supplier` | read | Get a supplier |
| `invoicesonline_list_inventory_items` | read | List inventory items |
| `invoicesonline_list_inventory_categories` | read | List inventory categories |
| `invoicesonline_get_document_status_ids` | read | List document status ids |
| `invoicesonline_get_document_status` | read | Get a jobcard status |
| `invoicesonline_create_client` | **write** | Create a client |
| `invoicesonline_usage_status` | meta | Usage status (free-tier meter) |
| `invoicesonline_request_feature` | meta | Request a missing feature |
| `invoicesonline_upgrade` | meta | Upgrade to Pro or Pro+ |
| `invoicesonline_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `invoicesonline_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `invoicesonline_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `invoicesonline_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
