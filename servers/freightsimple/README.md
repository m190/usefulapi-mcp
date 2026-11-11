# FreightSimple MCP by usefulapi

Use your [FreightSimple](https://freightsimple.com) account from Claude, Cursor, or any MCP client. Get carrier quotes, book shipments, upload customs documents, track shipment status and manage saved commodities. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://freightsimple.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://freightsimple.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http freightsimple https://freightsimple.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=freightsimple&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffreightsimple.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "freightsimple": {
      "url": "https://freightsimple.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your FreightSimple credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/freightsimple/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **FreightSimple company API key** (issued to Premium-tier companies after account-manager approval) and the **environment** (Production or Demo). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `freightsimple_list_carriers` | read | List carriers |
| `freightsimple_list_distribution_warehouse_brands` | read | List distribution warehouse brands |
| `freightsimple_list_dangerous_goods` | read | List dangerous goods |
| `freightsimple_get_shipment` | read | Get shipment |
| `freightsimple_list_saved_commodities` | read | List saved commodities |
| `freightsimple_get_saved_commodity_by_sku` | read | Get saved commodity by SKU |
| `freightsimple_start_quoting` | **write** | Start quoting |
| `freightsimple_start_booking` | **write** | Start booking |
| `freightsimple_upload_customs_documents` | **write** | Upload customs documents |
| `freightsimple_create_saved_commodity` | **write** | Create saved commodity |
| `freightsimple_update_saved_commodity` | **write** | Update saved commodity |
| `freightsimple_delete_saved_commodity` | **write** | Delete saved commodity |
| `freightsimple_usage_status` | meta | Usage status (free-tier meter) |
| `freightsimple_request_feature` | meta | Request a missing feature |
| `freightsimple_upgrade` | meta | Upgrade to Pro or Pro+ |
| `freightsimple_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `freightsimple_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `freightsimple_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `freightsimple_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
