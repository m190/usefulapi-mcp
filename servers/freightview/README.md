# Freightview MCP by usefulapi

Use your [Freightview](https://www.freightview.com) account from Claude, Cursor, or any MCP client. Rate, book, track and cancel LTL, parcel and truckload shipments, and read account carriers and locations. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://freightview.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://freightview.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http freightview https://freightview.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=freightview&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffreightview.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "freightview": {
      "url": "https://freightview.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Freightview credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/freightview/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Freightview client ID** and a **Freightview client secret** (Freightview → **User settings → API Integration**). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `freightview_get_account_users` | read | List account users |
| `freightview_get_account_locations` | read | List account locations |
| `freightview_get_account_carriers` | read | List account carriers |
| `freightview_get_carrier` | read | Get carrier metadata |
| `freightview_search_shipments` | read | Search shipments |
| `freightview_get_shipment` | read | Get shipment |
| `freightview_get_shipment_quotes` | read | Get shipment quotes |
| `freightview_get_shipment_tracking` | read | Get shipment tracking |
| `freightview_create_ltl_shipment` | **write** | Create LTL shipment |
| `freightview_create_parcel_shipment` | **write** | Create parcel shipment |
| `freightview_create_truckload_shipment` | **write** | Create truckload shipment |
| `freightview_book_ltl_shipment` | **write** | Book LTL shipment |
| `freightview_book_ltl_freight_collect` | **write** | Book LTL freight-collect shipment |
| `freightview_book_parcel_shipment` | **write** | Book parcel shipment |
| `freightview_book_parcel_freight_collect` | **write** | Book parcel freight-collect shipment |
| `freightview_cancel_ltl_shipment` | **write** | Cancel LTL shipment |
| `freightview_cancel_parcel_shipment` | **write** | Cancel parcel shipment |
| `freightview_cancel_truckload_shipment` | **write** | Cancel truckload shipment |
| `freightview_award_truckload_shipment` | **write** | Award truckload shipment |
| `freightview_confirm_truckload_shipment` | **write** | Confirm truckload pickup |
| `freightview_retract_truckload_award` | **write** | Retract truckload award |
| `freightview_book_truckload_freight_collect` | **write** | Book truckload freight-collect shipment |
| `freightview_usage_status` | meta | Usage status (free-tier meter) |
| `freightview_request_feature` | meta | Request a missing feature |
| `freightview_upgrade` | meta | Upgrade to Pro or Pro+ |
| `freightview_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `freightview_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `freightview_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `freightview_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
