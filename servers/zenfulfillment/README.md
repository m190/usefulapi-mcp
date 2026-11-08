# Zenfulfillment MCP by usefulapi

Connect your API-enabled warehouse to an AI assistant.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://zenfulfillment.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http zenfulfillment https://zenfulfillment.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=zenfulfillment&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fzenfulfillment.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "zenfulfillment": {
      "url": "https://zenfulfillment.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Zenfulfillment credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/zenfulfillment/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `zenfulfillment_list_orders` | read | List orders |
| `zenfulfillment_get_order` | read | Get order |
| `zenfulfillment_list_stock` | read | List stock levels |
| `zenfulfillment_list_inventory_shipments` | read | List inbound shipments |
| `zenfulfillment_get_inventory_shipment` | read | Get inbound shipment |
| `zenfulfillment_list_returns` | read | List returns |
| `zenfulfillment_import_order` | **write** | Create or update an order |
| `zenfulfillment_cancel_orders` | **write** | Cancel orders |
| `zenfulfillment_mark_return_done` | **write** | Mark return as refunded |
| `zenfulfillment_usage_status` | meta | Usage status (free-tier meter) |
| `zenfulfillment_request_feature` | meta | Request a missing feature |
| `zenfulfillment_upgrade` | meta | Upgrade to Pro or Pro+ |
| `zenfulfillment_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API key and environment) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per API key and environment) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `zenfulfillment_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `zenfulfillment_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `zenfulfillment_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
