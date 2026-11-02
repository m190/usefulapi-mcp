# Brandboom MCP by usefulapi

Use your [Brandboom](https://brandboom.com) account from Claude, Cursor, or any MCP client. It searches showrooms, products, orders, customers, invoices and shipments, and it changes nothing. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://brandboom.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://brandboom.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http brandboom https://brandboom.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=brandboom&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbrandboom.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "brandboom": {
      "url": "https://brandboom.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Brandboom credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/brandboom/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Brandboom API key** (Account Settings → Integrations → API → New API Key; a Business Plan is required). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `brandboom_list_showrooms` | read | List showrooms |
| `brandboom_list_price_tiers` | read | List price tiers |
| `brandboom_search_products` | read | Search products |
| `brandboom_search_orders` | read | Search orders |
| `brandboom_get_order_pdf` | read | Get an order PDF link |
| `brandboom_search_customers` | read | Search customers |
| `brandboom_search_invoices` | read | Search invoices |
| `brandboom_search_shipments` | read | Search shipments |
| `brandboom_usage_status` | meta | Usage status (free-tier meter) |
| `brandboom_request_feature` | meta | Request a missing feature |
| `brandboom_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `brandboom_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `brandboom_upgrade` (it returns a Stripe Checkout link). Cancel any time with `brandboom_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `brandboom_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
