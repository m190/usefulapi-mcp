# BrewMan MCP by usefulapi

Use your [BrewMan](https://premiersystems.com) account from Claude, Cursor, or any MCP client. Read orders, outlets, items, stock and purchase orders, and create or cancel orders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://brewman.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://brewman.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http brewman https://brewman.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=brewman&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbrewman.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "brewman": {
      "url": "https://brewman.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your BrewMan credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/brewman/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **BrewMan Api-Token** (created in the BrewMan web app for a dedicated user) and your **BrewMan tenant ID** (shown on the same screen). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `brewman_get_current_user` | read | Get the current user |
| `brewman_list_outlets` | read | List outlets |
| `brewman_get_outlet` | read | Get an outlet |
| `brewman_list_orders` | read | List orders |
| `brewman_get_order` | read | Get an order |
| `brewman_list_items` | read | List items |
| `brewman_get_stock_levels` | read | Get stock levels |
| `brewman_get_stock_incoming_outgoing` | read | Get incoming and outgoing stock |
| `brewman_list_price_lists` | read | List price lists |
| `brewman_list_purchase_orders` | read | List purchase orders |
| `brewman_create_order` | **write** | Create an order |
| `brewman_add_order_line` | **write** | Add a line to an order |
| `brewman_delete_order_lines` | **write** | Delete order lines |
| `brewman_cancel_order` | **write** | Cancel an order |
| `brewman_usage_status` | meta | Usage status (free-tier meter) |
| `brewman_request_feature` | meta | Request a missing feature |
| `brewman_upgrade` | meta | Upgrade to Pro or Pro+ |
| `brewman_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `brewman_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `brewman_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `brewman_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
