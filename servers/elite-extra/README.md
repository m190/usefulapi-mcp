# Elite EXTRA MCP by usefulapi

Use your [Elite EXTRA](https://eliteextra.com) account from Claude, Cursor, or any MCP client. Read customers, dealers, drivers, vehicles, rates, fuel, orders and returns. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://elite-extra.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://elite-extra.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http elite-extra https://elite-extra.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=elite-extra&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Felite-extra.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "elite-extra": {
      "url": "https://elite-extra.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Elite EXTRA credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/elite-extra/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Elite EXTRA site name** (the part before .eliteextra.com), and the **API user name and password** of a user on that site that may use the API. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `eliteextra_list_store_endpoints` | read | List store endpoints |
| `eliteextra_list_customers` | read | List customers |
| `eliteextra_get_customer` | read | Get customer |
| `eliteextra_list_dealers` | read | List dealers |
| `eliteextra_get_dealer` | read | Get dealer |
| `eliteextra_list_drivers` | read | List drivers |
| `eliteextra_get_driver` | read | Get driver |
| `eliteextra_list_vehicles` | read | List vehicles |
| `eliteextra_get_vehicle` | read | Get vehicle |
| `eliteextra_list_vehicle_rates` | read | List vehicle rates |
| `eliteextra_get_vehicle_rate` | read | Get vehicle rate |
| `eliteextra_list_fuels` | read | List fuels |
| `eliteextra_get_fuel` | read | Get fuel |
| `eliteextra_list_orders` | read | List orders |
| `eliteextra_list_order_status` | read | List order status |
| `eliteextra_get_return` | read | Get return |
| `eliteextra_list_return_reasons` | read | List return reasons |
| `eliteextra_usage_status` | meta | Usage status (free-tier meter) |
| `eliteextra_request_feature` | meta | Request a missing feature |
| `eliteextra_upgrade` | meta | Upgrade to Pro or Pro+ |
| `eliteextra_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `eliteextra_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `eliteextra_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `eliteextra_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
