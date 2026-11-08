# Farmbrite MCP by usefulapi

Read Farmbrite livestock, crops, tasks, inventory and orders; log records and tasks.

**Live endpoint:** `https://farmbrite.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/farmbrite

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://farmbrite.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http farmbrite https://farmbrite.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=farmbrite&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffarmbrite.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "farmbrite": {
      "url": "https://farmbrite.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Farmbrite credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/farmbrite/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Farmbrite **API key** (your Farmbrite user profile; API access must be enabled).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `farmbrite_list_animals` | read | List animals |
| `farmbrite_get_animal` | read | Get animal |
| `farmbrite_list_livestock_groups` | read | List livestock groups |
| `farmbrite_get_livestock_group` | read | Get livestock group |
| `farmbrite_list_animal_measurements` | read | List animal measurements |
| `farmbrite_list_feedings` | read | List feedings |
| `farmbrite_list_grazing_summary` | read | List grazing summary |
| `farmbrite_list_plants` | read | List plant types |
| `farmbrite_list_crops` | read | List crop plantings |
| `farmbrite_get_crop` | read | Get crop planting |
| `farmbrite_list_plots` | read | List fields (plots) |
| `farmbrite_get_plot` | read | Get field (plot) |
| `farmbrite_list_harvests` | read | List harvests |
| `farmbrite_list_treatments` | read | List treatments |
| `farmbrite_list_notes` | read | List notes |
| `farmbrite_list_contacts` | read | List contacts |
| `farmbrite_get_contact` | read | Get contact |
| `farmbrite_list_tasks` | read | List tasks |
| `farmbrite_get_task` | read | Get task |
| `farmbrite_list_activities` | read | List schedule activities |
| `farmbrite_list_inventory_types` | read | List inventory items |
| `farmbrite_get_inventory_type` | read | Get inventory item |
| `farmbrite_get_inventory_locations` | read | Get inventory by location |
| `farmbrite_list_warehouses` | read | List storage locations |
| `farmbrite_list_orders` | read | List orders |
| `farmbrite_get_order` | read | Get order |
| `farmbrite_list_transactions` | read | List transactions |
| `farmbrite_get_transaction` | read | Get transaction |
| `farmbrite_create_contact` | **write** | Create contact |
| `farmbrite_update_contact` | **write** | Update contact |
| `farmbrite_create_task` | **write** | Create task |
| `farmbrite_update_task` | **write** | Update task |
| `farmbrite_create_transaction` | **write** | Create transaction |
| `farmbrite_create_note` | **write** | Add note |
| `farmbrite_add_inventory` | **write** | Add inventory |
| `farmbrite_remove_inventory` | **write** | Remove inventory |
| `farmbrite_create_order` | **write** | Create order |
| `farmbrite_update_order` | **write** | Update order status |
| `farmbrite_create_animal` | **write** | Create animal |
| `farmbrite_update_animal` | **write** | Update animal |
| `farmbrite_add_animal_measurement` | **write** | Add animal measurement |
| `farmbrite_create_feeding` | **write** | Record feeding |
| `farmbrite_create_harvest` | **write** | Record harvest |
| `farmbrite_create_treatment` | **write** | Record treatment |
| `farmbrite_usage_status` | meta | Usage status (free-tier meter) |
| `farmbrite_request_feature` | meta | Request a missing feature |
| `farmbrite_upgrade` | meta | Upgrade to Pro or Pro+ |
| `farmbrite_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `farmbrite_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `farmbrite_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `farmbrite_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Farmbrite.
