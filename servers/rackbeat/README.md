# Rackbeat MCP by usefulapi

https://rackbeat.usefulapi.io/mcp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://rackbeat.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http rackbeat https://rackbeat.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=rackbeat&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frackbeat.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "rackbeat": {
      "url": "https://rackbeat.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Rackbeat credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/rackbeat/

<!-- connect:end (generated above, edit below) -->

Connect your own Rackbeat credentials through the hosted sign-in page.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `rackbeat_account` | read | Read Rackbeat account |
| `rackbeat_products` | read | Search Rackbeat products |
| `rackbeat_get_product` | read | Read Rackbeat product stock |
| `rackbeat_product_locations` | read | Read Rackbeat stock by location |
| `rackbeat_orders` | read | Search Rackbeat sales orders |
| `rackbeat_get_order` | read | Read Rackbeat sales order |
| `rackbeat_customers` | read | Search Rackbeat customers |
| `rackbeat_usage_status` | meta | Usage status (free-tier meter) |
| `rackbeat_request_feature` | meta | Request a missing feature |
| `rackbeat_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `rackbeat_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `rackbeat_upgrade` (it returns a Stripe Checkout link). Cancel any time with `rackbeat_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `rackbeat_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
