# Zenventory MCP by usefulapi

Use your [Zenventory](https://www.zenventory.com) account from Claude, Cursor, or any MCP client. Read items, stock, customer orders, purchase orders, transfer orders and cycle counts, and create items and orders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://zenventory.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://zenventory.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http zenventory https://zenventory.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=zenventory&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fzenventory.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "zenventory": {
      "url": "https://zenventory.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Zenventory credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/zenventory/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Zenventory API Key and API Secret**, created under Admin → Users → API Keys. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `zenventory_list_items` | read | List items |
| `zenventory_get_item` | read | Get an item |
| `zenventory_list_inventory` | read | List stock levels |
| `zenventory_list_customer_orders` | read | List customer orders |
| `zenventory_get_customer_order` | read | Get a customer order |
| `zenventory_list_purchase_orders` | read | List purchase orders |
| `zenventory_get_purchase_order` | read | Get a purchase order |
| `zenventory_list_transfer_orders` | read | List transfer orders |
| `zenventory_get_transfer_order` | read | Get a transfer order |
| `zenventory_list_cycle_counts` | read | List cycle counts |
| `zenventory_create_item` | **write** | Create an item |
| `zenventory_create_customer_order` | **write** | Create a customer order |
| `zenventory_cancel_customer_order` | **write** | Cancel a customer order |
| `zenventory_create_purchase_order` | **write** | Create a purchase order |
| `zenventory_usage_status` | meta | Usage status (free-tier meter) |
| `zenventory_request_feature` | meta | Request a missing feature |
| `zenventory_upgrade` | meta | Upgrade to Pro or Pro+ |
| `zenventory_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `zenventory_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `zenventory_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `zenventory_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
