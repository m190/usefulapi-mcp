# Prodigi MCP by usefulapi

Connect at `https://prodigi.usefulapi.io/mcp`.

Read print orders, production status and shipment tracking; inspect product details and calculate quotes without placing orders.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://prodigi.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http prodigi https://prodigi.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=prodigi&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fprodigi.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "prodigi": {
      "url": "https://prodigi.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Prodigi credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/prodigi/

<!-- connect:end (generated above, edit below) -->

Choose sandbox or live and use the matching Prodigi Print API v4 key from your dashboard. The connector exposes only read-only operations, including price and spine-width calculations. The key itself can also place paid orders through the vendor API. Usage and subscriptions are scoped to the environment and API key; key rotation creates a new identity.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `prodigi_list_orders` | read | List orders |
| `prodigi_get_order` | read | Get order |
| `prodigi_get_order_actions` | read | Get order actions |
| `prodigi_create_quote` | read | Get a price quote |
| `prodigi_get_product` | read | Get product details |
| `prodigi_get_spine_width` | read | Get book spine width |
| `prodigi_usage_status` | meta | Usage status (free-tier meter) |
| `prodigi_request_feature` | meta | Request a missing feature |
| `prodigi_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `prodigi_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per environment and API key) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `prodigi_upgrade` (it returns a Stripe Checkout link). Cancel any time with `prodigi_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `prodigi_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
