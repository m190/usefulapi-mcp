# Locate2u MCP by usefulapi

Use your [Locate2u](https://www.locate2u.com) account from Claude, Cursor, or any MCP client. Read stops, shipments, orders, trips, runs and delivery ratings, and add notes to stops and shipments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://locate2u.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://locate2u.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http locate2u https://locate2u.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=locate2u&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flocate2u.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "locate2u": {
      "url": "https://locate2u.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Locate2u credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/locate2u/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **Client Id** and **Client Secret** of an app (Locate2u → Team settings → Apps → +; a Team Owner can do this; copy the secret at once). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `locate2u_get_me` | read | Get the current user |
| `locate2u_get_team` | read | Get the team |
| `locate2u_list_team_members` | read | List team members |
| `locate2u_get_team_member` | read | Get a team member |
| `locate2u_list_team_regions` | read | List team regions |
| `locate2u_list_warehouses` | read | List warehouses |
| `locate2u_list_services` | read | List services |
| `locate2u_list_customers` | read | List customers |
| `locate2u_search_customers` | read | Search customers |
| `locate2u_get_customer` | read | Get a customer |
| `locate2u_search_orders` | read | Search orders |
| `locate2u_get_order` | read | Get an order |
| `locate2u_find_order` | read | Find an order by reference |
| `locate2u_list_orders_created` | read | List orders created in a date range |
| `locate2u_get_stop` | read | Get a stop |
| `locate2u_search_stops` | read | Find stops by source reference |
| `locate2u_list_scheduled_stops` | read | List scheduled stops |
| `locate2u_list_unassigned_stops` | read | List unassigned stops |
| `locate2u_list_stop_notes` | read | List notes of a stop |
| `locate2u_get_stop_pod_answers` | read | Get proof-of-delivery answers of a stop |
| `locate2u_get_shipment` | read | Get a shipment |
| `locate2u_list_unassigned_shipments` | read | List unassigned shipments |
| `locate2u_list_shipment_notes` | read | List notes of a shipment |
| `locate2u_get_team_trips_summary` | read | Summarize the team's trips for a day |
| `locate2u_list_team_trips` | read | List all trips of the team for a day |
| `locate2u_get_driver_trip` | read | Get a driver's trip for a day |
| `locate2u_get_trip` | read | Get a trip by id |
| `locate2u_list_runs` | read | List runs for a day |
| `locate2u_team_travel_statistics` | read | Team travel statistics |
| `locate2u_list_customer_ratings` | read | List delivery ratings |
| `locate2u_search_items` | read | Search inventory items |
| `locate2u_get_item` | read | Get an inventory item |
| `locate2u_add_stop_note` | **write** | Add a note to a stop |
| `locate2u_add_shipment_note` | **write** | Add a note to a shipment |
| `locate2u_usage_status` | meta | Usage status (free-tier meter) |
| `locate2u_request_feature` | meta | Request a missing feature |
| `locate2u_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `locate2u_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `locate2u_upgrade` (it returns a Stripe Checkout link). Cancel any time with `locate2u_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `locate2u_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
