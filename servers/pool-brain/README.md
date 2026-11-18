# Pool Brain MCP by usefulapi

Use your [Pool Brain](https://www.poolbrain.com) account from Claude, Cursor, or any MCP client. Read customers, routes, jobs, invoices and alerts, and create or update customers and add notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://pool-brain.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://pool-brain.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http pool-brain https://pool-brain.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=pool-brain&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpool-brain.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "pool-brain": {
      "url": "https://pool-brain.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Pool Brain credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/pool-brain/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Pool Brain ACCESS-KEY** (an Open API key that Pool Brain issues on request) and, optionally, a **COMPANY-ID** (leave it empty for a Master API Key). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `poolbrain_list_companies` | read | List companies |
| `poolbrain_list_users` | read | List users |
| `poolbrain_get_billing_defaults` | read | Get billing defaults |
| `poolbrain_list_service_levels` | read | List service levels |
| `poolbrain_search_customers` | read | Search customers |
| `poolbrain_list_customer_notes` | read | List customer notes |
| `poolbrain_list_quotes` | read | List quotes |
| `poolbrain_get_pool_details` | read | Get water body details |
| `poolbrain_list_products` | read | List products and services |
| `poolbrain_list_product_categories` | read | List product categories |
| `poolbrain_list_invoices` | read | List invoices |
| `poolbrain_get_invoice_details` | read | Get invoice details |
| `poolbrain_list_payments` | read | List payments |
| `poolbrain_list_one_time_jobs` | read | List one-time jobs |
| `poolbrain_get_one_time_job` | read | Get one-time job details |
| `poolbrain_list_route_stop_jobs` | read | List route stop jobs |
| `poolbrain_get_route_stop_job` | read | Get route stop job details |
| `poolbrain_list_alerts` | read | List alerts |
| `poolbrain_get_technician` | read | Get technician jobs |
| `poolbrain_get_technician_routes` | read | Get technician routes |
| `poolbrain_get_technician_pay` | read | Get technician pay |
| `poolbrain_create_customer` | **write** | Create customer |
| `poolbrain_update_customer` | **write** | Update customer details |
| `poolbrain_create_customer_note` | **write** | Add customer note |
| `poolbrain_usage_status` | meta | Usage status (free-tier meter) |
| `poolbrain_request_feature` | meta | Request a missing feature |
| `poolbrain_upgrade` | meta | Upgrade to Pro or Pro+ |
| `poolbrain_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `poolbrain_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `poolbrain_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `poolbrain_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
