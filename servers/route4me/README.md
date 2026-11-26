# Route4Me MCP by usefulapi

Use your [Route4Me](https://route4me.com) account from Claude, Cursor, or any MCP client. Read routes, vehicles, orders and addresses, optimize routes, create addresses, and create or update orders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://route4me.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://route4me.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http route4me https://route4me.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=route4me&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Froute4me.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "route4me": {
      "url": "https://route4me.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Route4Me credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/route4me/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Route4Me API key** (account settings). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `route4me_get_account` | read | Get account |
| `route4me_list_users` | read | List team members |
| `route4me_list_vehicles` | read | List vehicles |
| `route4me_get_vehicle` | read | Get a vehicle |
| `route4me_get_vehicle_track` | read | Get vehicle track |
| `route4me_list_routes` | read | List routes |
| `route4me_get_route` | read | Get a route |
| `route4me_list_orders` | read | List orders |
| `route4me_list_customers` | read | List customers |
| `route4me_get_customer` | read | Get a customer |
| `route4me_list_facilities` | read | List facilities |
| `route4me_list_addresses` | read | Search addresses |
| `route4me_list_groups` | read | List address groups |
| `route4me_geocode_address` | read | Geocode an address |
| `route4me_list_optimizations` | read | List or get optimizations |
| `route4me_create_optimization` | **write** | Create a route optimization |
| `route4me_rerun_optimization` | **write** | Re-run a route optimization |
| `route4me_create_order` | **write** | Create an order |
| `route4me_update_order` | **write** | Update an order |
| `route4me_create_address` | **write** | Create an address |
| `route4me_usage_status` | meta | Usage status (free-tier meter) |
| `route4me_request_feature` | meta | Request a missing feature |
| `route4me_upgrade` | meta | Upgrade to Pro or Pro+ |
| `route4me_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `route4me_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `route4me_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `route4me_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
