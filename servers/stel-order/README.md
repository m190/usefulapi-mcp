# STEL Order MCP by usefulapi

Use your [STEL Order](https://www.stelorder.com) account from Claude, Cursor, or any MCP client. It reads clients, products, sales documents, invoices, invoice receipts and stock, and it creates or updates clients and creates contacts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://stel-order.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://stel-order.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http stel-order https://stel-order.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=stel-order&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstel-order.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "stel-order": {
      "url": "https://stel-order.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your STEL Order credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/stel-order/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **STEL Order APIKEY**. Find it in STEL Order under **Functionalities → API**, using a superadmin account. The server validates the key and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `stelorder_get_company` | read | Get company |
| `stelorder_list_clients` | read | List clients |
| `stelorder_get_client` | read | Get a client |
| `stelorder_list_contacts` | read | List contacts |
| `stelorder_list_products` | read | List products |
| `stelorder_get_product` | read | Get a product |
| `stelorder_list_sales_estimates` | read | List sales estimates |
| `stelorder_list_sales_orders` | read | List sales orders |
| `stelorder_list_ordinary_invoices` | read | List ordinary invoices |
| `stelorder_get_ordinary_invoice` | read | Get an ordinary invoice |
| `stelorder_list_invoice_receipts` | read | List invoice receipts |
| `stelorder_list_warehouses` | read | List warehouses |
| `stelorder_list_stock_movements` | read | List stock movements |
| `stelorder_create_client` | **write** | Create a client |
| `stelorder_update_client` | **write** | Update a client |
| `stelorder_create_contact` | **write** | Create a contact |
| `stelorder_usage_status` | meta | Usage status (free-tier meter) |
| `stelorder_request_feature` | meta | Request a missing feature |
| `stelorder_upgrade` | meta | Upgrade to Pro or Pro+ |
| `stelorder_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `stelorder_upgrade` (it returns a Stripe Checkout link). Cancel any time with `stelorder_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `stelorder_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
