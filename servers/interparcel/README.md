# Interparcel MCP by usefulapi

Use your [Interparcel](https://www.interparcel.com) account from Claude, Cursor, or any MCP client. Track parcels, price courier services, book courier orders and import shipments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://interparcel.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://interparcel.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http interparcel https://interparcel.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=interparcel&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Finterparcel.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "interparcel": {
      "url": "https://interparcel.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Interparcel credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/interparcel/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Interparcel API key**, copied from your Interparcel account dashboard on the API integration page. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `interparcel_track_parcel` | read | Track a parcel |
| `interparcel_get_quote` | read | Get shipping quote |
| `interparcel_get_order` | read | Get an order |
| `interparcel_search_shipments` | read | Search shipments |
| `interparcel_get_shipment` | read | Get a shipment |
| `interparcel_list_saved_cards` | read | List saved cards |
| `interparcel_get_prepay_balance` | read | Get PrePay balance |
| `interparcel_create_order` | **write** | Create and pay for courier orders |
| `interparcel_add_shipment` | **write** | Add a shipment to Shipping Manager |
| `interparcel_usage_status` | meta | Usage status (free-tier meter) |
| `interparcel_request_feature` | meta | Request a missing feature |
| `interparcel_upgrade` | meta | Upgrade to Pro or Pro+ |
| `interparcel_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `interparcel_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `interparcel_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `interparcel_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
