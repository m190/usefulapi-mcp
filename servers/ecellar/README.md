# eCellar MCP by usefulapi

Use your [eCellar](https://www.ecellar1.com) account from Claude, Cursor, or any MCP client. Read orders, customers, club subscriptions, products, inventory and reservations, and record tracking, shipping and stock changes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://ecellar.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ecellar.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ecellar https://ecellar.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ecellar&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fecellar.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ecellar": {
      "url": "https://ecellar.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your eCellar credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ecellar/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **eXchange username** and **eXchange password** (API access that eCellar support issues on request). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ecellar_get_reference_data` | read | Get reference data |
| `ecellar_search_customers` | read | Search customers |
| `ecellar_search_addresses` | read | Search customer addresses |
| `ecellar_search_notes` | read | Search customer notes |
| `ecellar_search_orders` | read | Search orders |
| `ecellar_search_order_lines` | read | Search order lines |
| `ecellar_search_order_payments` | read | Search order payments |
| `ecellar_search_order_trackings` | read | Search order tracking records |
| `ecellar_search_products` | read | Search products |
| `ecellar_search_product_categories` | read | Search product categories |
| `ecellar_get_inventory_counts` | read | Get inventory counts |
| `ecellar_search_club_subscriptions` | read | Search club subscriptions |
| `ecellar_search_club_tiers` | read | Search club tiers |
| `ecellar_search_club_events` | read | Search club events |
| `ecellar_search_reservations` | read | Search reservations |
| `ecellar_mark_order_shipped` | **write** | Mark order shipped |
| `ecellar_mark_order_delivered` | **write** | Mark order delivered |
| `ecellar_add_order_tracking` | **write** | Add order tracking record |
| `ecellar_adjust_inventory_count` | **write** | Adjust inventory count |
| `ecellar_usage_status` | meta | Usage status (free-tier meter) |
| `ecellar_request_feature` | meta | Request a missing feature |
| `ecellar_upgrade` | meta | Upgrade to Pro or Pro+ |
| `ecellar_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `ecellar_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `ecellar_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `ecellar_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
