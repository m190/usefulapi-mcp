# Sellize MCP by usefulapi

Use your [Sellize](https://sellize.io) account from Claude, Cursor, or any MCP client. Read orders, products, customers, coupons and licence keys, and change products, stock and coupons. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://sellize.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sellize.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sellize https://sellize.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sellize&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsellize.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sellize": {
      "url": "https://sellize.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Sellize credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sellize/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Sellize store API key** (Sellize → System & Security → API keys; start with read scopes). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sellize_get_store` | read | Get the store |
| `sellize_list_products` | read | List products |
| `sellize_get_product` | read | Get a product |
| `sellize_list_orders` | read | List orders |
| `sellize_get_order` | read | Get an order |
| `sellize_list_customers` | read | List customers |
| `sellize_list_coupons` | read | List coupons |
| `sellize_check_license` | read | Check a licence key |
| `sellize_validate_license` | read | Validate a licence key on an installation |
| `sellize_create_product` | **write** | Create a product |
| `sellize_update_product` | **write** | Update a product |
| `sellize_add_stock` | **write** | Add stock to a product |
| `sellize_create_coupon` | **write** | Create a coupon |
| `sellize_usage_status` | meta | Usage status (free-tier meter) |
| `sellize_request_feature` | meta | Request a missing feature |
| `sellize_upgrade` | meta | Upgrade to Pro or Pro+ |
| `sellize_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `sellize_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `sellize_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `sellize_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
