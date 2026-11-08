# Heartland Retail MCP by usefulapi

Use your [Heartland Retail](https://www.heartlandretail.com) account from Claude, Cursor, or any MCP client. Read items, stock, customers, sales orders and POS tickets, and create or update customers. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://heartland-retail.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://heartland-retail.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http heartland-retail https://heartland-retail.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=heartland-retail&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fheartland-retail.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "heartland-retail": {
      "url": "https://heartland-retail.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Heartland Retail credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/heartland-retail/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **store subdomain** (the part before `.retail.heartland.us`) and a **Heartland Retail API token** (my account → API → Generate new token). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `heartlandretail_whoami` | read | Show the connected user |
| `heartlandretail_list_items` | read | List items |
| `heartlandretail_get_item` | read | Get item |
| `heartlandretail_list_inventory_values` | read | List inventory values |
| `heartlandretail_list_locations` | read | List locations |
| `heartlandretail_list_customers` | read | List customers |
| `heartlandretail_get_customer` | read | Get customer |
| `heartlandretail_create_customer` | **write** | Create customer |
| `heartlandretail_update_customer` | **write** | Update customer |
| `heartlandretail_list_sales_orders` | read | List sales orders |
| `heartlandretail_get_sales_order` | read | Get sales order |
| `heartlandretail_list_sales_order_lines` | read | List sales order lines |
| `heartlandretail_list_sales_invoices` | read | List sales invoices |
| `heartlandretail_list_sales_tickets` | read | List POS tickets |
| `heartlandretail_list_vendors` | read | List vendors |
| `heartlandretail_get_gift_card` | read | Get gift card |
| `heartlandretail_usage_status` | meta | Usage status (free-tier meter) |
| `heartlandretail_request_feature` | meta | Request a missing feature |
| `heartlandretail_upgrade` | meta | Upgrade to Pro or Pro+ |
| `heartlandretail_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `heartlandretail_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `heartlandretail_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `heartlandretail_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
