# Burq MCP by usefulapi

Use your [Burq](https://burqup.com) account from Claude, Cursor, or any MCP client. Estimate delivery fees, check serviceability, read order status, create orders and routes, dispatch routes, and cancel orders or routes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://burq.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://burq.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http burq https://burq.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=burq&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fburq.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "burq": {
      "url": "https://burq.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Burq credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/burq/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Burq API key** (Burq Dashboard → **Developers**). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `burq_get_estimates` | read | Get delivery fee estimates |
| `burq_check_serviceability` | read | Check serviceability |
| `burq_get_order` | read | Get an order |
| `burq_list_routes` | read | List routes |
| `burq_get_route` | read | Get a route |
| `burq_list_route_quotes` | read | List route quotes |
| `burq_get_route_quote` | read | Get a route quote |
| `burq_create_order` | **write** | Create an order |
| `burq_create_route` | **write** | Create a route |
| `burq_generate_route_quotes` | **write** | Generate route quotes |
| `burq_dispatch_route` | **write** | Dispatch a route |
| `burq_cancel_order` | **write** | Cancel an order |
| `burq_cancel_route` | **write** | Cancel a route |
| `burq_usage_status` | meta | Usage status (free-tier meter) |
| `burq_request_feature` | meta | Request a missing feature |
| `burq_upgrade` | meta | Upgrade to Pro or Pro+ |
| `burq_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `burq_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `burq_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `burq_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
