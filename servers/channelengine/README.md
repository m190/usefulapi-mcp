# ChannelEngine MCP by usefulapi

Use your [ChannelEngine](https://channelengine.com) account from Claude, Cursor, or any MCP client. It reads orders, products, stock, shipments, returns, cancellations and notifications, and it can acknowledge orders and set stock levels. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://channelengine.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://channelengine.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http channelengine https://channelengine.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=channelengine&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fchannelengine.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "channelengine": {
      "url": "https://channelengine.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ChannelEngine credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/channelengine/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **ChannelEngine tenant subdomain** and **Merchant API key** (in ChannelEngine under Settings, Merchant API keys; the subdomain is the part before .channelengine.net). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `channelengine_list_channels` | read | List channels |
| `channelengine_get_settings` | read | Get account settings |
| `channelengine_list_stock_locations` | read | List stock locations |
| `channelengine_list_orders` | read | List orders |
| `channelengine_get_new_orders` | read | Get new orders |
| `channelengine_acknowledge_order` | **write** | Acknowledge order (write) |
| `channelengine_list_products` | read | List products |
| `channelengine_get_product` | read | Get product |
| `channelengine_list_channel_listings` | read | List products on a channel |
| `channelengine_get_stock` | read | Get stock levels |
| `channelengine_update_stock` | **write** | Update stock levels (write) |
| `channelengine_list_shipments` | read | List shipments |
| `channelengine_list_returns` | read | List returns |
| `channelengine_list_cancellations` | read | List cancellations |
| `channelengine_list_notifications` | read | List notifications |
| `channelengine_usage_status` | meta | Usage status (free-tier meter) |
| `channelengine_request_feature` | meta | Request a missing feature |
| `channelengine_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `channelengine_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `channelengine_upgrade` (it returns a Stripe Checkout link). Cancel any time with `channelengine_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `channelengine_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
