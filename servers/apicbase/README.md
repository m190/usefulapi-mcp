# Apicbase MCP by usefulapi

Use your [Apicbase](https://www.apicbase.com) account from Claude, Cursor, or any MCP client. Read recipes, ingredients, suppliers, outlets, stock, menus, waste and purchase orders, read-only. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://apicbase.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://apicbase.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http apicbase https://apicbase.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=apicbase&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fapicbase.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "apicbase": {
      "url": "https://apicbase.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you enter your own Apicbase app's client ID and secret, then sign in with your Apicbase account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/apicbase/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **client ID** and **client secret** of an application you create in Apicbase (Library Settings > API Settings), then approve access in Apicbase. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `apicbase_get_active_library` | read | Get the active library |
| `apicbase_list_libraries` | read | List libraries |
| `apicbase_get_currency` | read | Get the default currency |
| `apicbase_list_custom_fields` | read | List custom field definitions |
| `apicbase_list_outlets` | read | List outlets |
| `apicbase_list_users` | read | List users |
| `apicbase_get_user` | read | Get a user |
| `apicbase_list_user_roles` | read | List user roles |
| `apicbase_list_suppliers` | read | List suppliers |
| `apicbase_get_supplier` | read | Get a supplier |
| `apicbase_list_supplier_packages` | read | List supplier packages |
| `apicbase_list_ingredients` | read | List ingredients |
| `apicbase_get_ingredient` | read | Get an ingredient |
| `apicbase_list_recipes` | read | List recipes |
| `apicbase_get_recipe` | read | Get a recipe |
| `apicbase_get_recipe_financials` | read | Get recipe financials |
| `apicbase_list_menus` | read | List menus |
| `apicbase_list_stock_items` | read | List stock items |
| `apicbase_list_waste_events` | read | List waste events |
| `apicbase_list_purchase_orders` | read | List purchase orders |
| `apicbase_get_purchase_order` | read | Get a purchase order |
| `apicbase_global_search` | read | Search the library |
| `apicbase_usage_status` | meta | Usage status (free-tier meter) |
| `apicbase_request_feature` | meta | Request a missing feature |
| `apicbase_upgrade` | meta | Upgrade to Pro or Pro+ |
| `apicbase_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `apicbase_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `apicbase_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `apicbase_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
