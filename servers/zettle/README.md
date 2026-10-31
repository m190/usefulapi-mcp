# Zettle MCP by usefulapi

Use your [Zettle](https://www.zettle.com) account from Claude, Cursor, or any MCP client. Read sales, refunds, products, stock, balance and payouts, and create products. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://zettle.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://zettle.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http zettle https://zettle.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=zettle&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fzettle.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "zettle": {
      "url": "https://zettle.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your Zettle account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/zettle/

<!-- connect:end (generated above, edit below) -->

On first connect you sign in to Zettle and approve access. Only the Zettle account owner can approve it. You can disconnect it any time in Zettle. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `zettle_get_account` | read | Get account |
| `zettle_list_purchases` | read | List purchases |
| `zettle_get_purchase` | read | Get purchase |
| `zettle_list_products` | read | List products |
| `zettle_get_product` | read | Get product |
| `zettle_list_categories` | read | List categories |
| `zettle_get_library` | read | Get product library with discounts |
| `zettle_create_product` | **write** | Create product |
| `zettle_list_inventories` | read | List inventories (stock locations) |
| `zettle_get_stock` | read | Get stock balances |
| `zettle_get_stock_for_products` | read | Get stock for products |
| `zettle_get_account_balance` | read | Get account balance |
| `zettle_list_account_transactions` | read | List account transactions |
| `zettle_get_payout_info` | read | Get payout info |
| `zettle_usage_status` | meta | Usage status (free-tier meter) |
| `zettle_request_feature` | meta | Request a missing feature |
| `zettle_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `zettle_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `zettle_upgrade` (it returns a Stripe Checkout link). Cancel any time with `zettle_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `zettle_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
