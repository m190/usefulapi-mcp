# ShippingEasy MCP by usefulapi

Use your [ShippingEasy](https://www.shippingeasy.com) account from Claude, Cursor, or any MCP client. List stores and orders, update an order status, and cancel an order. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://shippingeasy.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://shippingeasy.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http shippingeasy https://shippingeasy.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=shippingeasy&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fshippingeasy.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "shippingeasy": {
      "url": "https://shippingeasy.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ShippingEasy credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/shippingeasy/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **API key** and **API secret**, found in ShippingEasy under **Settings → API Credentials**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `shippingeasy_list_stores` | read | List stores |
| `shippingeasy_search_orders` | read | Search orders |
| `shippingeasy_search_store_orders` | read | Search store orders |
| `shippingeasy_get_order` | read | Get an order |
| `shippingeasy_update_order_status` | **write** | Update order status |
| `shippingeasy_cancel_order` | **write** | Cancel an order |
| `shippingeasy_usage_status` | meta | Usage status (free-tier meter) |
| `shippingeasy_request_feature` | meta | Request a missing feature |
| `shippingeasy_upgrade` | meta | Upgrade to Pro or Pro+ |
| `shippingeasy_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `shippingeasy_upgrade` (it returns a Stripe Checkout link). Cancel any time with `shippingeasy_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `shippingeasy_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
