# KASSA.AT MCP by usefulapi

Use your [KASSA.AT](https://kassa.at) account from Claude, Cursor, or any MCP client. Read and update articles, customers and stock of one KASSA.AT company. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://kassa-at.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://kassa-at.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http kassa-at https://kassa-at.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=kassa-at&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fkassa-at.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "kassa-at": {
      "url": "https://kassa-at.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your KASSA.AT credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/kassa-at/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **KASSA.AT company subdomain** (the part before `.kassa.at`) and your **KASSA.AT API token**. The server validates the token and stores both per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `kassa_list_articles` | read | List articles |
| `kassa_list_article_categories` | read | List article categories |
| `kassa_list_customers` | read | List customers |
| `kassa_find_customer_by_number` | read | Find a customer by number |
| `kassa_list_warehouses` | read | List warehouses |
| `kassa_list_inventories` | read | List inventories (stock per article) |
| `kassa_get_inventory_stock` | read | Get current stock |
| `kassa_create_article` | **write** | Create an article |
| `kassa_update_article` | **write** | Update an article |
| `kassa_create_customer` | **write** | Create a customer |
| `kassa_update_customer` | **write** | Update a customer |
| `kassa_record_stock_movement` | **write** | Record a stock movement |
| `kassa_usage_status` | meta | Usage status (free-tier meter) |
| `kassa_request_feature` | meta | Request a missing feature |
| `kassa_upgrade` | meta | Upgrade to Pro or Pro+ |
| `kassa_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `kassa_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `kassa_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `kassa_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
