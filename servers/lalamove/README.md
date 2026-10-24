# Lalamove MCP by usefulapi

Read Lalamove cities, vehicles, quotations and orders; quote, place, tip and cancel deliveries.

**Live endpoint:** `https://lalamove.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/lalamove

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://lalamove.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http lalamove https://lalamove.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=lalamove&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flalamove.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "lalamove": {
      "url": "https://lalamove.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Lalamove credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/lalamove/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Lalamove **API key** and API secret and choose the market and environment (Lalamove Partner Portal, Developers tab).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `lalamove_list_cities` | read | List cities, vehicles and special requests |
| `lalamove_get_quotation` | read | Get quotation |
| `lalamove_get_order` | read | Get order |
| `lalamove_get_driver` | read | Get driver and location |
| `lalamove_track_order` | read | Track order |
| `lalamove_create_quotation` | **write** | Get a delivery quotation |
| `lalamove_place_order` | **write** | Place delivery order (charges the wallet) |
| `lalamove_add_priority_fee` | **write** | Add priority fee (tip, charges the wallet) |
| `lalamove_cancel_order` | **write** | Cancel order |
| `lalamove_change_driver` | **write** | Change driver |
| `lalamove_usage_status` | meta | Usage status (free-tier meter) |
| `lalamove_request_feature` | meta | Request a missing feature |
| `lalamove_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `lalamove_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `lalamove_upgrade` (it returns a Stripe Checkout link). Cancel any time with `lalamove_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `lalamove_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Lalamove.
