# Transdirect MCP by usefulapi

Use your [Transdirect](https://www.transdirect.com.au) account from Claude, Cursor, or any MCP client. Get courier quotes, book and pay for shipments, print labels, track parcels and cancel bookings. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://transdirect.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://transdirect.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http transdirect https://transdirect.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=transdirect&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftransdirect.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "transdirect": {
      "url": "https://transdirect.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Transdirect credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/transdirect/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Transdirect Custom API key** (Transdirect → **Settings → Integrations → Custom API → Connect**). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `transdirect_get_member` | read | Get member account |
| `transdirect_list_payment_methods` | read | List payment methods |
| `transdirect_list_couriers` | read | List couriers |
| `transdirect_search_locations` | read | Search suburbs and postcodes |
| `transdirect_list_bookings` | read | List bookings |
| `transdirect_get_booking` | read | Get a booking |
| `transdirect_get_label_url` | read | Get a label link |
| `transdirect_track_shipment` | read | Track a shipment |
| `transdirect_get_quotes` | **write** | Get courier quotes |
| `transdirect_confirm_booking` | **write** | Confirm and pay for a booking |
| `transdirect_cancel_booking` | **write** | Cancel a booking |
| `transdirect_usage_status` | meta | Usage status (free-tier meter) |
| `transdirect_request_feature` | meta | Request a missing feature |
| `transdirect_upgrade` | meta | Upgrade to Pro or Pro+ |
| `transdirect_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `transdirect_upgrade` (it returns a Stripe Checkout link). Cancel any time with `transdirect_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `transdirect_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
