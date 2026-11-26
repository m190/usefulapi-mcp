# Facturapi MCP by usefulapi

Use your [Facturapi](https://www.facturapi.io) account from Claude, Cursor, or any MCP client. Read customers, products, invoices and e-receipts, search the SAT catalogs, and create customers, products and draft invoices. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://facturapi.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://facturapi.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http facturapi https://facturapi.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=facturapi&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffacturapi.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "facturapi": {
      "url": "https://facturapi.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Facturapi credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/facturapi/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Facturapi secret key** (sk_test_ or sk_live_; organization API keys in the Facturapi dashboard; account keys are refused). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `facturapi_get_organization` | read | Get the organization |
| `facturapi_list_customers` | read | List customers |
| `facturapi_get_customer` | read | Get a customer |
| `facturapi_list_products` | read | List products |
| `facturapi_get_product` | read | Get a product |
| `facturapi_search_product_keys` | read | Search SAT product keys |
| `facturapi_search_units` | read | Search SAT unit keys |
| `facturapi_list_invoices` | read | List invoices |
| `facturapi_get_invoice` | read | Get an invoice |
| `facturapi_get_invoice_download_url` | read | Get an invoice download link |
| `facturapi_list_receipts` | read | List e-receipts |
| `facturapi_get_receipt` | read | Get an e-receipt |
| `facturapi_create_customer` | **write** | Create a customer |
| `facturapi_create_product` | **write** | Create a product |
| `facturapi_create_draft_invoice` | **write** | Create a draft invoice |
| `facturapi_usage_status` | meta | Usage status (free-tier meter) |
| `facturapi_request_feature` | meta | Request a missing feature |
| `facturapi_upgrade` | meta | Upgrade to Pro or Pro+ |
| `facturapi_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `facturapi_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `facturapi_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `facturapi_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
