# keyCRM MCP by usefulapi

Use your [keyCRM](https://keycrm.app) account from Claude, Cursor, or any MCP client. It reads orders, buyers, products, stock levels, pipeline cards and users, and it adds or removes order tags. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://keycrm.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://keycrm.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http keycrm https://keycrm.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=keycrm&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fkeycrm.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "keycrm": {
      "url": "https://keycrm.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your keyCRM credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/keycrm/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **keyCRM API key**, created in keyCRM under **Settings → Main → API key** by the account owner or an admin. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `keycrm_list_orders` | read | List orders |
| `keycrm_get_order` | read | Get an order |
| `keycrm_list_order_statuses` | read | List order statuses |
| `keycrm_list_order_sources` | read | List order sources |
| `keycrm_list_order_tags` | read | List order tags |
| `keycrm_list_buyers` | read | List buyers |
| `keycrm_get_buyer` | read | Get a buyer |
| `keycrm_list_products` | read | List products |
| `keycrm_get_product` | read | Get a product |
| `keycrm_list_offers` | read | List product variants |
| `keycrm_list_stock_levels` | read | List stock levels |
| `keycrm_list_pipeline_cards` | read | List pipeline cards |
| `keycrm_list_users` | read | List users |
| `keycrm_add_order_tag` | **write** | Add a tag to an order |
| `keycrm_remove_order_tag` | **write** | Remove a tag from an order |
| `keycrm_usage_status` | meta | Usage status (free-tier meter) |
| `keycrm_request_feature` | meta | Request a missing feature |
| `keycrm_upgrade` | meta | Upgrade to Pro or Pro+ |
| `keycrm_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `keycrm_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `keycrm_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `keycrm_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
