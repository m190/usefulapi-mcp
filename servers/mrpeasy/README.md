# MRPeasy MCP by usefulapi

Use your [MRPeasy](https://www.mrpeasy.com) account from Claude, Cursor, or any MCP client. Read stock, inventory, customer and purchase orders, bills of materials, manufacturing orders, vendors and shipments; it cannot change data. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://mrpeasy.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://mrpeasy.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http mrpeasy https://mrpeasy.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=mrpeasy&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmrpeasy.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "mrpeasy": {
      "url": "https://mrpeasy.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your MRPeasy credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/mrpeasy/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **MRPeasy API key** and an **MRPeasy API secret** (in MRPeasy: Settings → Integration → API access; the API needs the Unlimited plan). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `mrpeasy_list_sites` | read | List sites |
| `mrpeasy_get_site` | read | Get a site |
| `mrpeasy_list_customers` | read | List customers |
| `mrpeasy_get_customer` | read | Get a customer |
| `mrpeasy_list_customer_orders` | read | List customer orders |
| `mrpeasy_get_customer_order` | read | Get a customer order |
| `mrpeasy_list_sales_invoices` | read | List sales invoices |
| `mrpeasy_get_sales_invoice` | read | Get a sales invoice |
| `mrpeasy_list_stock_items` | read | List stock items |
| `mrpeasy_get_stock_item` | read | Get a stock item |
| `mrpeasy_list_inventory` | read | List inventory |
| `mrpeasy_get_inventory_item` | read | Get inventory of a stock item |
| `mrpeasy_list_critical_inventory` | read | List critical on-hand stock |
| `mrpeasy_list_boms` | read | List bills of materials |
| `mrpeasy_get_bom` | read | Get a bill of materials |
| `mrpeasy_list_manufacturing_orders` | read | List manufacturing orders |
| `mrpeasy_get_manufacturing_order` | read | Get a manufacturing order |
| `mrpeasy_list_purchase_orders` | read | List purchase orders |
| `mrpeasy_get_purchase_order` | read | Get a purchase order |
| `mrpeasy_list_vendors` | read | List vendors |
| `mrpeasy_get_vendor` | read | Get a vendor |
| `mrpeasy_list_shipments` | read | List shipments |
| `mrpeasy_get_shipment` | read | Get a shipment |
| `mrpeasy_usage_status` | meta | Usage status (free-tier meter) |
| `mrpeasy_request_feature` | meta | Request a missing feature |
| `mrpeasy_upgrade` | meta | Upgrade to Pro or Pro+ |
| `mrpeasy_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `mrpeasy_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `mrpeasy_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `mrpeasy_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
