# Shippit MCP by usefulapi

Get Shippit quotes, track and manage orders; create, label, book and cancel shipments on approval.

**Live endpoint:** `https://shippit.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/shippit

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://shippit.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http shippit https://shippit.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=shippit&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fshippit.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "shippit": {
      "url": "https://shippit.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Shippit credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/shippit/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Shippit **API key** and choose the environment (production or staging).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `shippit_get_merchant` | read | Get merchant account |
| `shippit_get_operating_hours` | read | Get store operating hours |
| `shippit_list_webhooks` | read | List webhooks |
| `shippit_get_quotes` | read | Get shipping quotes |
| `shippit_estimate_delivery_dates` | read | Estimate delivery dates |
| `shippit_get_order` | read | Get order |
| `shippit_get_tracking` | read | Get order tracking |
| `shippit_get_manifest_document` | read | Get manifest document |
| `shippit_create_order` | **write** | Create order |
| `shippit_label_order` | **write** | Label order |
| `shippit_book_orders` | **write** | Book orders with carriers |
| `shippit_cancel_order` | **write** | Cancel order |
| `shippit_usage_status` | meta | Usage status (free-tier meter) |
| `shippit_request_feature` | meta | Request a missing feature |
| `shippit_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `shippit_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `shippit_upgrade` (it returns a Stripe Checkout link). Cancel any time with `shippit_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `shippit_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Shippit.
