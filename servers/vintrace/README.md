# vintrace MCP by usefulapi

Read vintrace vessels, batches, work orders, lab results, stock; assign work orders, add notes.

**Live endpoint:** `https://vintrace.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/vintrace

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://vintrace.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http vintrace https://vintrace.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=vintrace&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fvintrace.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "vintrace": {
      "url": "https://vintrace.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your vintrace credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/vintrace/

<!-- connect:end (generated above, edit below) -->

On first connect you'll enter your vintrace **login URL** (the address you sign in with, e.g. https://us36.vintrace.net/yourcode/1.app) and an **API token** that a vintrace admin (Local vintrace Admin permission) creates under API tokens in vintrace.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `vintrace_list_work_orders` | read | List work orders |
| `vintrace_list_wine_batches` | read | List wine batches |
| `vintrace_get_vessel_details_report` | read | Vessel contents report |
| `vintrace_get_vessel` | read | Get vessel |
| `vintrace_list_lab_requests` | read | List lab requests |
| `vintrace_list_trial_blends` | read | List trial blends |
| `vintrace_search_transactions` | read | Search winemaking transactions |
| `vintrace_list_barrel_treatments` | read | List barrel treatments |
| `vintrace_list_blocks` | read | List vineyard blocks |
| `vintrace_list_block_assessments` | read | List block assessments |
| `vintrace_list_bookings` | read | List fruit bookings |
| `vintrace_list_bulk_intakes` | read | List bulk intakes |
| `vintrace_search_fruit_intakes` | read | Search fruit intakes |
| `vintrace_list_stock_dispatches` | read | List stock dispatches |
| `vintrace_list_shipments` | read | List bulk shipments |
| `vintrace_list_cost_transactions` | read | List bulk wine cost movements |
| `vintrace_list_brand_allocations` | read | List brand allocations |
| `vintrace_get_purchase_order` | read | Get purchase order |
| `vintrace_list_inventory` | read | List stock inventory |
| `vintrace_lookup_stock_item` | read | Look up stock item |
| `vintrace_get_stock_item` | read | Get stock item details |
| `vintrace_list_stock_item_notes` | read | List stock item notes |
| `vintrace_list_products` | read | List products (wines in vessels) |
| `vintrace_get_product` | read | Get product |
| `vintrace_list_sales_orders` | read | List sales orders |
| `vintrace_get_sales_order` | read | Get sales order |
| `vintrace_list_parties` | read | List parties (customers, growers, owners) |
| `vintrace_get_party` | read | Get party |
| `vintrace_get_work_order` | read | Get work order |
| `vintrace_list_work_orders_v6` | read | List work orders (operator view) |
| `vintrace_search_items` | read | Search vintrace items by type |
| `vintrace_add_stock_item_note` | **write** | Add a note to a stock item |
| `vintrace_assign_work_order` | **write** | Assign a work order |
| `vintrace_deactivate_booking` | **write** | Deactivate a fruit booking |
| `vintrace_usage_status` | meta | Usage status (free-tier meter) |
| `vintrace_request_feature` | meta | Request a missing feature |
| `vintrace_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `vintrace_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `vintrace_upgrade` (it returns a Stripe Checkout link). Cancel any time with `vintrace_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `vintrace_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by vintrace.
