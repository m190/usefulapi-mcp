# Appstle MCP by usefulapi

Use your [Appstle](https://appstle.com) account from Claude, Cursor, or any MCP client. It reads subscription contracts, customers, orders and groups, and it can skip orders, move billing dates, change intervals and pause or cancel subscriptions. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://appstle.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://appstle.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http appstle https://appstle.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=appstle&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fappstle.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "appstle": {
      "url": "https://appstle.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Appstle credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/appstle/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **Appstle Admin API key** (in Appstle, go to More → API Access; it starts with `apst_`). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `appstle_list_subscription_contracts` | read | List subscription contracts |
| `appstle_get_contract_analytics` | read | Get contract analytics |
| `appstle_search_customers` | read | Search customers with subscriptions |
| `appstle_get_customer_subscriptions` | read | Get a customer's subscriptions |
| `appstle_get_upcoming_orders` | read | Get upcoming orders |
| `appstle_list_past_orders` | read | List past orders |
| `appstle_list_subscription_groups` | read | List subscription groups |
| `appstle_get_subscription_group` | read | Get a subscription group |
| `appstle_skip_next_order` | **write** | Skip the next order |
| `appstle_unskip_order` | **write** | Unskip an order |
| `appstle_set_next_billing_date` | **write** | Set the next billing date |
| `appstle_update_delivery_interval` | **write** | Change the delivery interval |
| `appstle_set_contract_status` | **write** | Pause or resume a subscription |
| `appstle_cancel_contract` | **write** | Cancel a subscription |
| `appstle_usage_status` | meta | Usage status (free-tier meter) |
| `appstle_request_feature` | meta | Request a missing feature |
| `appstle_upgrade` | meta | Upgrade to Pro or Pro+ |
| `appstle_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `appstle_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `appstle_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `appstle_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
