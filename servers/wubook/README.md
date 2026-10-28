# WuBook MCP by usefulapi

**Live endpoint:** `https://wubook.usefulapi.io/mcp`

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://wubook.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http wubook https://wubook.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=wubook&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwubook.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "wubook": {
      "url": "https://wubook.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your WuBook credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/wubook/

<!-- connect:end (generated above, edit below) -->

Connect with your WuBook ZaK property API key from Settings → Configurations → ZaK API. The Essentials Module and API activation by WuBook staff are required. This integration covers ZaK, not the Wired channel manager API. Inventory changes affect bookable availability and reservations; review writes before running them. Regenerating the API key creates a new usefulapi billing identity.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `wubook_list_rooms` | read | List rooms |
| `wubook_list_room_types` | read | List room types |
| `wubook_list_rates` | read | List rates |
| `wubook_list_products` | read | List products |
| `wubook_list_meal_boards` | read | List meal boards |
| `wubook_list_extras` | read | List extras |
| `wubook_get_inventory_symbols` | read | Get inventory symbols |
| `wubook_get_room_availability` | read | Get room availability |
| `wubook_get_rate_values` | read | Get rate values |
| `wubook_update_inventory` | **write** | Update prices, availability and restrictions |
| `wubook_get_reservation` | read | Get reservation |
| `wubook_list_reservations` | read | List reservations |
| `wubook_list_todays_reservations` | read | List today's reservations |
| `wubook_create_reservation` | **write** | Create reservation |
| `wubook_check_in` | **write** | Check in |
| `wubook_check_out` | **write** | Check out |
| `wubook_undo_check_in` | **write** | Undo check-in |
| `wubook_undo_check_out` | **write** | Undo check-out |
| `wubook_get_customer` | read | Get customer (guest) |
| `wubook_usage_status` | meta | Usage status (free-tier meter) |
| `wubook_request_feature` | meta | Request a missing feature |
| `wubook_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `wubook_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API key) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `wubook_upgrade` (it returns a Stripe Checkout link). Cancel any time with `wubook_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `wubook_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
