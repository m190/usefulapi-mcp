# Parsley MCP by usefulapi

Read Parsley menu items, nutrition, allergens, ingredients and events; record event sales and waste.

**Live endpoint:** `https://parsley.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/parsley

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://parsley.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http parsley https://parsley.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=parsley&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fparsley.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "parsley": {
      "url": "https://parsley.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Parsley credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/parsley/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste a **Parsley API key**, generated in your Parsley account (the Open API is switched on per account; if you do not see API keys, ask Parsley support at devel@parsleyapp.com). The key acts with the permissions of the user who created it.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `parsley_list_menu_items` | read | List menu items |
| `parsley_get_menu_item` | read | Get menu item (nutrition, allergens, ingredients) |
| `parsley_list_menus` | read | List menus |
| `parsley_get_menu` | read | Get menu |
| `parsley_list_ingredients` | read | List ingredients |
| `parsley_get_ingredient` | read | Get ingredient (costing and suppliers) |
| `parsley_list_events` | read | List events |
| `parsley_get_event` | read | Get event |
| `parsley_list_serving_stations` | read | List serving stations |
| `parsley_list_chef_tags` | read | List chef tags |
| `parsley_list_chef_users` | read | List chef users |
| `parsley_create_event` | **write** | Create event |
| `parsley_update_event_covers` | **write** | Update event covers |
| `parsley_record_event_sales` | **write** | Record event sales |
| `parsley_record_waste_leftover` | **write** | Record waste and leftover |
| `parsley_usage_status` | meta | Usage status (free-tier meter) |
| `parsley_request_feature` | meta | Request a missing feature |
| `parsley_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `parsley_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API key) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `parsley_upgrade` (it returns a Stripe Checkout link). Cancel any time with `parsley_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `parsley_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
