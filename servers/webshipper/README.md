# Webshipper MCP by usefulapi

Use your [Webshipper](https://webshipper.io) account from Claude, Cursor, or any MCP client. It reads orders, shipments, tracking events, carriers and order channels, and it can create an order and get shipping rate quotes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://webshipper.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://webshipper.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http webshipper https://webshipper.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=webshipper&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwebshipper.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "webshipper": {
      "url": "https://webshipper.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Webshipper credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/webshipper/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Webshipper account name** and **access token** (in Webshipper under Settings, Access and tokens; the account name is the part before .webshipper.io). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `webshipper_list_orders` | read | List orders |
| `webshipper_get_order` | read | Get an order |
| `webshipper_list_shipments` | read | List shipments |
| `webshipper_get_shipment` | read | Get a shipment |
| `webshipper_list_tracking_events` | read | List tracking events |
| `webshipper_list_carriers` | read | List carriers |
| `webshipper_list_order_channels` | read | List order channels |
| `webshipper_create_order` | **write** | Create an order |
| `webshipper_create_rate_quote` | **write** | Get rate quotes |
| `webshipper_usage_status` | meta | Usage status (free-tier meter) |
| `webshipper_request_feature` | meta | Request a missing feature |
| `webshipper_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `webshipper_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `webshipper_upgrade` (it returns a Stripe Checkout link). Cancel any time with `webshipper_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `webshipper_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
