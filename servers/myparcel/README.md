# MyParcel MCP by usefulapi

Use your [MyParcel](https://www.myparcel.nl) account from Claude, Cursor, or any MCP client. Create and delete shipments, check track and trace, and look up delivery options and pickup points. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://myparcel.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://myparcel.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http myparcel https://myparcel.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=myparcel&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmyparcel.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "myparcel": {
      "url": "https://myparcel.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your MyParcel credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/myparcel/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **MyParcel API key** (MyParcel backoffice → Shop settings → Integrations). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `myparcel_list_shipments` | read | List shipments |
| `myparcel_get_shipments` | read | Get shipments |
| `myparcel_get_tracktraces` | read | Get track and trace |
| `myparcel_list_fulfilment_orders` | read | List fulfilment orders |
| `myparcel_get_fulfilment_order` | read | Get a fulfilment order |
| `myparcel_get_delivery_options` | read | Get delivery options |
| `myparcel_list_pickup_locations` | read | List pickup locations |
| `myparcel_list_webhook_subscriptions` | read | List webhook subscriptions |
| `myparcel_create_shipments` | **write** | Create shipments |
| `myparcel_delete_shipments` | **write** | Delete shipments |
| `myparcel_usage_status` | meta | Usage status (free-tier meter) |
| `myparcel_request_feature` | meta | Request a missing feature |
| `myparcel_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `myparcel_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `myparcel_upgrade` (it returns a Stripe Checkout link). Cancel any time with `myparcel_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `myparcel_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
