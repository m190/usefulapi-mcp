# Apilo MCP by usefulapi

Use your [Apilo](https://apilo.com) account from Claude, Cursor, or any MCP client. Read orders, shipments, products and stock, and set an order status, add an internal note or change a stock quantity. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://apilo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://apilo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http apilo https://apilo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=apilo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fapilo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "apilo": {
      "url": "https://apilo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Apilo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/apilo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Apilo address** (`<account>.apilo.com`), **Client ID**, **Client Secret** and a single-use **authorization code** (valid 3 hours), which Apilo shows when you create an application under **Administracja → Klucze API Apilo → Nowa aplikacja**. The server validates it and stores only the access token per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `apilo_whoami` | read | Get API key info |
| `apilo_get_map` | read | Get lookup table |
| `apilo_list_orders` | read | List orders |
| `apilo_get_order` | read | Get order |
| `apilo_list_order_notes` | read | List order notes |
| `apilo_list_order_documents` | read | List order documents |
| `apilo_list_order_shipments` | read | List order shipments |
| `apilo_get_shipment` | read | Get order shipment |
| `apilo_list_shipment_tracking` | read | List shipment tracking |
| `apilo_list_products` | read | List products |
| `apilo_get_product` | read | Get product |
| `apilo_list_categories` | read | List categories |
| `apilo_list_locations` | read | List warehouse locations |
| `apilo_list_finance_documents` | read | List accounting documents |
| `apilo_update_order_status` | **write** | Update order status |
| `apilo_add_order_note` | **write** | Add internal order note |
| `apilo_set_product_stock` | **write** | Set product stock quantity |
| `apilo_usage_status` | meta | Usage status (free-tier meter) |
| `apilo_request_feature` | meta | Request a missing feature |
| `apilo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `apilo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `apilo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `apilo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `apilo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
