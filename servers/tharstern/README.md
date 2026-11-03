# Tharstern MCP by usefulapi

Use your [Tharstern](https://www.tharstern.com) account from Claude, Cursor, or any MCP client. Read customers, jobs, estimates, orders, invoices, stock, prices and operator work, all read-only. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://tharstern.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://tharstern.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http tharstern https://tharstern.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=tharstern&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftharstern.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "tharstern": {
      "url": "https://tharstern.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Tharstern credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/tharstern/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Tharstern user email** and **Tharstern password** of a user enabled for API access (the password is not stored). The server validates it and stores only the access token per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `tharstern_list_customers` | read | List customers |
| `tharstern_list_suppliers` | read | List suppliers |
| `tharstern_list_estimates` | read | List estimates |
| `tharstern_list_jobs` | read | List jobs |
| `tharstern_list_orders` | read | List sales orders |
| `tharstern_list_delivery_notes` | read | List delivery notes |
| `tharstern_list_invoices` | read | List invoices |
| `tharstern_list_purchase_orders` | read | List purchase orders |
| `tharstern_list_products` | read | List products and stock |
| `tharstern_get_product_price` | read | Get product price |
| `tharstern_list_stock_locations` | read | List stock locations |
| `tharstern_list_projects` | read | List projects |
| `tharstern_list_tasks` | read | List tasks |
| `tharstern_list_notes` | read | List notes |
| `tharstern_list_operators` | read | List operators |
| `tharstern_list_working_operations` | read | List working operations |
| `tharstern_list_milestones` | read | List milestone definitions |
| `tharstern_list_currencies` | read | List currencies |
| `tharstern_get_licence` | read | Get licence details |
| `tharstern_usage_status` | meta | Usage status (free-tier meter) |
| `tharstern_request_feature` | meta | Request a missing feature |
| `tharstern_upgrade` | meta | Upgrade to Pro or Pro+ |
| `tharstern_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `tharstern_upgrade` (it returns a Stripe Checkout link). Cancel any time with `tharstern_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `tharstern_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
