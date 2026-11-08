# Prisync MCP by usefulapi

Use your [Prisync](https://prisync.com) account from Claude, Cursor, or any MCP client. Read products, prices, brands, categories, competitor URLs and SmartPrice suggestions, and add products and competitor URLs or edit products. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://prisync.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://prisync.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http prisync https://prisync.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=prisync&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fprisync.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "prisync": {
      "url": "https://prisync.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Prisync credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/prisync/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Prisync login email** and your **Prisync API token** (Prisync → Account). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `prisync_get_account` | read | Get account details |
| `prisync_list_products` | read | List products |
| `prisync_list_products_with_prices` | read | List products with prices |
| `prisync_list_smartprices` | read | List SmartPrice suggestions |
| `prisync_get_product` | read | Get a product |
| `prisync_list_brands` | read | List brands |
| `prisync_get_brand` | read | Get a brand |
| `prisync_list_categories` | read | List categories |
| `prisync_get_category` | read | Get a category |
| `prisync_get_url` | read | Get a competitor URL |
| `prisync_add_product` | **write** | Add a product |
| `prisync_add_url` | **write** | Add a competitor URL |
| `prisync_edit_product` | **write** | Edit a product |
| `prisync_usage_status` | meta | Usage status (free-tier meter) |
| `prisync_request_feature` | meta | Request a missing feature |
| `prisync_upgrade` | meta | Upgrade to Pro or Pro+ |
| `prisync_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `prisync_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `prisync_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `prisync_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
