# UpKeep MCP by usefulapi

Read UpKeep work orders, assets, parts and meters; create requests and work orders.

**Live endpoint:** `https://upkeep.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/upkeep

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://upkeep.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http upkeep https://upkeep.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=upkeep&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fupkeep.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "upkeep": {
      "url": "https://upkeep.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your UpKeep credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/upkeep/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste an UpKeep **organization API token** (Settings → API Tokens; it starts with uk_pat_).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `upkeep_get_account` | read | Check API token |
| `upkeep_list_work_orders` | read | List work orders |
| `upkeep_get_work_order` | read | Get work order |
| `upkeep_list_assets` | read | List assets |
| `upkeep_get_asset` | read | Get asset |
| `upkeep_list_locations` | read | List locations |
| `upkeep_get_location` | read | Get location |
| `upkeep_list_parts` | read | List parts (inventory) |
| `upkeep_get_part` | read | Get part |
| `upkeep_list_meters` | read | List meters |
| `upkeep_get_meter` | read | Get meter |
| `upkeep_list_meter_readings` | read | List meter readings |
| `upkeep_add_meter_reading` | **write** | Add meter reading |
| `upkeep_list_requests` | read | List work requests |
| `upkeep_get_request` | read | Get work request |
| `upkeep_create_request` | **write** | Create work request |
| `upkeep_approve_request` | **write** | Approve work request |
| `upkeep_create_work_order` | **write** | Create work order |
| `upkeep_update_work_order` | **write** | Update work order |
| `upkeep_add_work_order_message` | **write** | Add work order message |
| `upkeep_update_part_quantity` | **write** | Update part quantity |
| `upkeep_list_users` | read | List users |
| `upkeep_get_user` | read | Get user |
| `upkeep_list_teams` | read | List teams |
| `upkeep_list_vendors` | read | List vendors |
| `upkeep_list_customers` | read | List customers |
| `upkeep_list_purchase_orders` | read | List purchase orders |
| `upkeep_get_purchase_order` | read | Get purchase order |
| `upkeep_list_preventive_maintenance` | read | List preventive maintenance plans |
| `upkeep_usage_status` | meta | Usage status (free-tier meter) |
| `upkeep_request_feature` | meta | Request a missing feature |
| `upkeep_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `upkeep_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `upkeep_upgrade` (it returns a Stripe Checkout link). Cancel any time with `upkeep_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `upkeep_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by UpKeep.
