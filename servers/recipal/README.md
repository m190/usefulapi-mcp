# ReciPal MCP by usefulapi

Connect your ReciPal account.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://recipal.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http recipal https://recipal.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=recipal&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frecipal.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "recipal": {
      "url": "https://recipal.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ReciPal credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/recipal/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `recipal_list_recipes` | read | List recipes |
| `recipal_get_recipe` | read | Get recipe |
| `recipal_list_recipe_ingredients` | read | List recipe ingredients |
| `recipal_get_recipe_ingredient` | read | Get recipe ingredient |
| `recipal_list_ingredients` | read | List ingredients |
| `recipal_get_ingredient` | read | Get ingredient |
| `recipal_list_ingredient_costs` | read | List costs of an ingredient |
| `recipal_list_current_ingredient_costs` | read | List current ingredient costs |
| `recipal_get_ingredient_cost` | read | Get ingredient cost |
| `recipal_get_label` | read | Get label |
| `recipal_start_label_render` | **write** | Start label render |
| `recipal_get_label_render_status` | read | Get label render status |
| `recipal_list_inventories` | read | List raw-material inventory |
| `recipal_get_inventory` | read | Get raw-material inventory row |
| `recipal_list_inventory_tags` | read | List ingredient tags |
| `recipal_list_finished_goods` | read | List finished goods inventory |
| `recipal_get_finished_good` | read | Get finished goods row |
| `recipal_list_finished_good_tags` | read | List recipe tags |
| `recipal_create_recipe` | **write** | Create recipe |
| `recipal_update_recipe` | **write** | Update recipe |
| `recipal_scale_recipe` | **write** | Copy or scale recipe |
| `recipal_create_recipe_from_ingredients` | **write** | Create recipe with ingredients |
| `recipal_create_subrecipe` | **write** | Turn recipe into subrecipe |
| `recipal_add_recipe_ingredient` | **write** | Add ingredient to recipe |
| `recipal_update_recipe_ingredient` | **write** | Update recipe ingredient amount |
| `recipal_remove_recipe_ingredient` | **write** | Remove ingredient from recipe |
| `recipal_create_ingredient` | **write** | Create ingredient |
| `recipal_update_ingredient` | **write** | Update ingredient |
| `recipal_create_ingredient_cost` | **write** | Add ingredient cost |
| `recipal_update_ingredient_cost` | **write** | Update ingredient cost |
| `recipal_usage_status` | meta | Usage status (free-tier meter) |
| `recipal_request_feature` | meta | Request a missing feature |
| `recipal_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `recipal_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per ReciPal API key) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `recipal_upgrade` (it returns a Stripe Checkout link). Cancel any time with `recipal_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `recipal_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
