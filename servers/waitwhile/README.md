# Waitwhile MCP by usefulapi

Use [Waitwhile](https://waitwhile.com) from Claude, Cursor, or any MCP client — waitlist visits, bookings, customers, locations, services, resources and analytics, plus visit management.
Hosted, no local install: connect with your own Waitwhile credentials.

**Live endpoint:** `https://waitwhile.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/waitwhile

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://waitwhile.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http waitwhile https://waitwhile.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=waitwhile&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwaitwhile.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "waitwhile": {
      "url": "https://waitwhile.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Waitwhile credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/waitwhile/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `waitwhile_list_locations` | read | List locations |
| `waitwhile_get_location` | read | Get location |
| `waitwhile_list_location_status` | read | List location status (live waitlist) |
| `waitwhile_get_location_status` | read | Get location status (live waitlist) |
| `waitwhile_list_visits` | read | List visits (waitlist entries and bookings) |
| `waitwhile_search_visits` | read | Search visits |
| `waitwhile_get_visit` | read | Get visit |
| `waitwhile_list_booking_slots` | read | List booking slots |
| `waitwhile_first_available_slots` | read | First available booking slots |
| `waitwhile_list_customers` | read | List customers |
| `waitwhile_search_customers` | read | Search customers |
| `waitwhile_get_customer` | read | Get customer |
| `waitwhile_list_customer_notes` | read | List customer notes |
| `waitwhile_list_services` | read | List services |
| `waitwhile_get_service` | read | Get service |
| `waitwhile_list_resources` | read | List resources (staff, rooms, tables) |
| `waitwhile_get_resource` | read | Get resource |
| `waitwhile_resources_availability` | read | Resource availability |
| `waitwhile_list_data_fields` | read | List data fields (intake form fields) |
| `waitwhile_get_data_field` | read | Get data field |
| `waitwhile_list_users` | read | List users (staff) |
| `waitwhile_list_messages` | read | List messages |
| `waitwhile_get_message` | read | Get message |
| `waitwhile_visit_analytics` | read | Visit analytics |
| `waitwhile_list_audit_entries` | read | List audit entries |
| `waitwhile_create_visit` | **write** | Add a customer to the waitlist or create a booking |
| `waitwhile_update_visit` | **write** | Update a visit (state, tags, time, party) |
| `waitwhile_cancel_visit` | **write** | Cancel a visit |
| `waitwhile_add_customer_note` | **write** | Add a customer note |
| `waitwhile_usage_status` | meta | Usage status (free-tier meter) |
| `waitwhile_request_feature` | meta | Request a missing feature |
| `waitwhile_upgrade` | meta | Upgrade to Pro (unlimited) |
| `waitwhile_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `waitwhile_upgrade` (it returns a Stripe Checkout link). Cancel any time with `waitwhile_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `waitwhile_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Waitwhile.
