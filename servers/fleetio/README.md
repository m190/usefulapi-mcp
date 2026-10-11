# Fleetio MCP by usefulapi

Use [Fleetio](https://www.fleetio.com) from Claude, Cursor, or any MCP client — vehicles, work orders, service entries and reminders, issues, inspections, fuel, parts and contacts, plus issues, meter entries and comments.
Hosted, no local install: connect with your own Fleetio credentials.

**Live endpoint:** `https://fleetio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/fleetio

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://fleetio.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http fleetio https://fleetio.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=fleetio&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffleetio.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "fleetio": {
      "url": "https://fleetio.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Fleetio credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/fleetio/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fleetio_list_accounts` | read | List accounts |
| `fleetio_list_vehicles` | read | List vehicles |
| `fleetio_list_vehicle_meter_entries` | read | List a vehicle's meter entries |
| `fleetio_list_meter_entries` | read | List meter entries |
| `fleetio_list_vehicle_assignments` | read | List vehicle assignments |
| `fleetio_list_equipment` | read | List equipment |
| `fleetio_list_work_orders` | read | List work orders |
| `fleetio_list_service_entries` | read | List service entries |
| `fleetio_list_vehicle_service_entries` | read | List a vehicle's service entries |
| `fleetio_list_service_reminders` | read | List service reminders |
| `fleetio_list_issues` | read | List issues |
| `fleetio_list_faults` | read | List faults |
| `fleetio_list_inspection_forms` | read | List inspection forms |
| `fleetio_list_submitted_inspections` | read | List submitted inspections |
| `fleetio_list_fuel_entries` | read | List fuel entries |
| `fleetio_list_parts` | read | List parts |
| `fleetio_list_part_stock` | read | List part stock by location |
| `fleetio_list_contacts` | read | List contacts |
| `fleetio_list_vendors` | read | List vendors |
| `fleetio_list_vehicle_renewal_reminders` | read | List vehicle renewal reminders |
| `fleetio_list_comments` | read | List comments |
| `fleetio_list_vehicle_statuses` | read | List vehicle statuses |
| `fleetio_list_vehicle_types` | read | List vehicle types |
| `fleetio_list_work_order_statuses` | read | List work order statuses |
| `fleetio_list_issue_priorities` | read | List issue priorities |
| `fleetio_list_groups` | read | List groups |
| `fleetio_list_labels` | read | List labels |
| `fleetio_list_service_tasks` | read | List service tasks |
| `fleetio_list_places` | read | List places |
| `fleetio_get_vehicle` | read | Get vehicle |
| `fleetio_get_equipment` | read | Get equipment |
| `fleetio_get_work_order` | read | Get work order |
| `fleetio_get_service_entry` | read | Get service entry |
| `fleetio_get_part` | read | Get part |
| `fleetio_get_contact` | read | Get contact |
| `fleetio_get_vendor` | read | Get vendor |
| `fleetio_get_submitted_inspection` | read | Get submitted inspection |
| `fleetio_get_inspection_form` | read | Get inspection form |
| `fleetio_get_issue` | read | Get issue |
| `fleetio_list_work_order_line_items` | read | List work order line items |
| `fleetio_list_service_entry_line_items` | read | List service entry line items |
| `fleetio_create_issue` | **write** | Create issue |
| `fleetio_create_meter_entry` | **write** | Add meter entry |
| `fleetio_add_comment` | **write** | Add comment |
| `fleetio_usage_status` | meta | Usage status (free-tier meter) |
| `fleetio_request_feature` | meta | Request a missing feature |
| `fleetio_upgrade` | meta | Upgrade to Pro (unlimited) |
| `fleetio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `fleetio_upgrade` (it returns a Stripe Checkout link). Cancel any time with `fleetio_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `fleetio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Fleetio.
