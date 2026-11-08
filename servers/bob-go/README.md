# Bob Go MCP by usefulapi

Use your [Bob Go](https://www.bobgo.co.za) account from Claude, Cursor, or any MCP client. Compare courier and checkout rates, book and cancel shipments, print waybills and labels, and track parcels. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://bob-go.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bob-go.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bob-go https://bob-go.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bob-go&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbob-go.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bob-go": {
      "url": "https://bob-go.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Bob Go credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bob-go/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Bob Go API key** (Bob Go → **Settings → API keys**); channel keys also need the **Channel identifier (channel keys only)**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bobgo_get_checkout_rates` | read | Get checkout shipping rates |
| `bobgo_get_courier_rates` | read | Quote courier rates for parcels |
| `bobgo_get_rate_request` | read | Get a courier rate request |
| `bobgo_create_shipment` | **write** | Book a shipment (charges the account) |
| `bobgo_list_shipments` | read | List or look up shipments |
| `bobgo_cancel_shipment` | **write** | Cancel a shipment (refunds the charge) |
| `bobgo_get_waybill` | read | Get shipment waybill PDF |
| `bobgo_get_sticker_waybill` | read | Get sticker label (ZPL or PDF) |
| `bobgo_get_file` | read | Collect a queued label file |
| `bobgo_get_tracking_events` | read | Get tracking history |
| `bobgo_list_orders` | read | List or look up orders |
| `bobgo_get_order_fulfillments` | read | Get an order's fulfilments |
| `bobgo_usage_status` | meta | Usage status (free-tier meter) |
| `bobgo_request_feature` | meta | Request a missing feature |
| `bobgo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `bobgo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `bobgo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `bobgo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `bobgo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
