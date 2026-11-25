# Picqer MCP by usefulapi

Use your [Picqer](https://www.picqer.com) account from Claude, Cursor, or any MCP client. Read products, stock per warehouse, orders, customers, picklists, purchase orders, suppliers and warehouses, and pause or resume orders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://picqer.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://picqer.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http picqer https://picqer.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=picqer&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpicqer.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "picqer": {
      "url": "https://picqer.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Picqer credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/picqer/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Picqer subdomain** (the `yourcompany` part of `yourcompany.picqer.com`) and a **Picqer API key**, created under Settings → API keys. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `picqer_list_products` | read | List products |
| `picqer_get_product` | read | Get a product |
| `picqer_get_product_stock` | read | Get product stock |
| `picqer_list_orders` | read | List orders |
| `picqer_get_order` | read | Get an order |
| `picqer_pause_order` | **write** | Pause an order |
| `picqer_resume_order` | **write** | Resume an order |
| `picqer_list_customers` | read | List customers |
| `picqer_get_customer` | read | Get a customer |
| `picqer_list_picklists` | read | List picklists |
| `picqer_list_purchaseorders` | read | List purchase orders |
| `picqer_list_suppliers` | read | List suppliers |
| `picqer_list_warehouses` | read | List warehouses |
| `picqer_usage_status` | meta | Usage status (free-tier meter) |
| `picqer_request_feature` | meta | Request a missing feature |
| `picqer_upgrade` | meta | Upgrade to Pro or Pro+ |
| `picqer_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `picqer_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `picqer_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `picqer_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
