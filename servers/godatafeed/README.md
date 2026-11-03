# GoDataFeed MCP by usefulapi

Use your [GoDataFeed](https://www.godatafeed.com) account from Claude, Cursor, or any MCP client. Reads product feeds and marketplace orders, and acknowledges orders, updates order status or records shipments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://godatafeed.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://godatafeed.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http godatafeed https://godatafeed.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=godatafeed&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgodatafeed.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "godatafeed": {
      "url": "https://godatafeed.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your GoDataFeed credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/godatafeed/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **GoDataFeed Consumer Key** (Settings > Stores > your store > GoDataFeed API; leave the IP allowlist blank). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `godatafeed_count_feeds` | read | Count feeds |
| `godatafeed_list_feeds` | read | List feeds |
| `godatafeed_get_feed` | read | Get a feed |
| `godatafeed_count_orders` | read | Count orders |
| `godatafeed_list_orders` | read | List orders |
| `godatafeed_get_order` | read | Get an order |
| `godatafeed_get_order_fulfillments` | read | List order fulfillments |
| `godatafeed_get_order_fulfillment` | read | Get an order fulfillment |
| `godatafeed_acknowledge_order` | **write** | Acknowledge an order |
| `godatafeed_update_order_status` | **write** | Update order status |
| `godatafeed_insert_fulfillment` | **write** | Record a fulfillment |
| `godatafeed_usage_status` | meta | Usage status (free-tier meter) |
| `godatafeed_request_feature` | meta | Request a missing feature |
| `godatafeed_upgrade` | meta | Upgrade to Pro or Pro+ |
| `godatafeed_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `godatafeed_upgrade` (it returns a Stripe Checkout link). Cancel any time with `godatafeed_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `godatafeed_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
