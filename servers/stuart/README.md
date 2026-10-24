# Stuart MCP by usefulapi

Quote, validate, book and track Stuart courier deliveries; cancel jobs and check zone coverage.

**Live endpoint:** `https://stuart.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/stuart

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://stuart.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http stuart https://stuart.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=stuart&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstuart.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "stuart": {
      "url": "https://stuart.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Stuart credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/stuart/

<!-- connect:end (generated above, edit below) -->

On first connect you'll pick the environment (production or sandbox) and paste your Stuart **API client ID** and **API client secret** (Stuart admin → API credentials: https://admin.stuart.com for production, https://admin.sandbox.stuart.com for the sandbox; the two environments have separate credentials). Creating a job on production books a real, charged courier: use the sandbox to try things out.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `stuart_list_jobs` | read | List delivery jobs |
| `stuart_get_job` | read | Get a delivery job |
| `stuart_estimate_price` | read | Get a delivery price quote |
| `stuart_validate_job` | read | Validate a delivery job |
| `stuart_estimate_pickup_eta` | read | Estimate courier arrival at pickup |
| `stuart_estimate_dropoff_eta` | read | Estimate time to dropoff |
| `stuart_validate_address` | read | Validate a pickup or dropoff address |
| `stuart_get_zone_coverage` | read | Get a zone's coverage area |
| `stuart_get_zone_schedule_slots` | read | Get a zone's scheduling slots |
| `stuart_get_courier_phone` | read | Get the courier's anonymous phone number |
| `stuart_create_job` | **write** | Create a delivery job (dispatches a courier) |
| `stuart_update_job` | **write** | Update delivery details |
| `stuart_cancel_job` | **write** | Cancel a delivery job |
| `stuart_cancel_delivery` | **write** | Cancel one delivery |
| `stuart_mark_order_ready` | **write** | Signal that an order is ready for pickup |
| `stuart_usage_status` | meta | Usage status (free-tier meter) |
| `stuart_request_feature` | meta | Request a missing feature |
| `stuart_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `stuart_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `stuart_upgrade` (it returns a Stripe Checkout link). Cancel any time with `stuart_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `stuart_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
