# Jubelio MCP by usefulapi

Use your [Jubelio](https://jubelio.com) account from Claude, Cursor, or any MCP client. Read stock, products, sales orders, invoices, contacts and purchase orders, and create or edit contacts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://jubelio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://jubelio.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http jubelio https://jubelio.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=jubelio&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fjubelio.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "jubelio": {
      "url": "https://jubelio.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Jubelio credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/jubelio/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Jubelio email** and **Jubelio password** (the login you use at Jubelio). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `jubelio_list_products` | read | List products |
| `jubelio_get_product` | read | Get a product |
| `jubelio_get_product_by_sku` | read | Get a product by SKU |
| `jubelio_list_stock` | read | List stock |
| `jubelio_list_sales_orders` | read | List sales orders |
| `jubelio_get_sales_order` | read | Get a sales order |
| `jubelio_list_invoices` | read | List invoices |
| `jubelio_get_invoice` | read | Get an invoice |
| `jubelio_list_contacts` | read | List contacts |
| `jubelio_get_contact` | read | Get a contact |
| `jubelio_save_contact` | **write** | Create or edit a contact |
| `jubelio_list_purchase_orders` | read | List purchase orders |
| `jubelio_get_purchase_order` | read | Get a purchase order |
| `jubelio_list_locations` | read | List locations |
| `jubelio_list_stores` | read | List sales channel stores |
| `jubelio_list_couriers` | read | List couriers |
| `jubelio_usage_status` | meta | Usage status (free-tier meter) |
| `jubelio_request_feature` | meta | Request a missing feature |
| `jubelio_upgrade` | meta | Upgrade to Pro or Pro+ |
| `jubelio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `jubelio_upgrade` (it returns a Stripe Checkout link). Cancel any time with `jubelio_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `jubelio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
