# ShipsGo MCP by usefulapi

Use your [ShipsGo](https://www.shipsgo.com) account from Claude, Cursor, or any MCP client. Track ocean container and air cargo shipments, read their routes as GeoJSON, and create, update or delete shipments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://shipsgo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://shipsgo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http shipsgo https://shipsgo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=shipsgo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fshipsgo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "shipsgo": {
      "url": "https://shipsgo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ShipsGo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/shipsgo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **ShipsGo API token** (ShipsGo dashboard → **ShipsGo API** section). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `shipsgo_list_ocean_carriers` | read | List ocean carriers |
| `shipsgo_list_ocean_shipments` | read | List ocean shipments |
| `shipsgo_get_ocean_shipment` | read | Get an ocean shipment |
| `shipsgo_get_ocean_route` | read | Get an ocean shipment route |
| `shipsgo_create_ocean_shipment` | **write** | Create an ocean shipment |
| `shipsgo_update_ocean_shipment` | **write** | Update an ocean shipment |
| `shipsgo_delete_ocean_shipment` | **write** | Delete an ocean shipment |
| `shipsgo_list_air_shipments` | read | List air shipments |
| `shipsgo_get_air_shipment` | read | Get an air shipment |
| `shipsgo_get_air_route` | read | Get an air shipment route |
| `shipsgo_create_air_shipment` | **write** | Create an air shipment |
| `shipsgo_update_air_shipment` | **write** | Update an air shipment |
| `shipsgo_delete_air_shipment` | **write** | Delete an air shipment |
| `shipsgo_usage_status` | meta | Usage status (free-tier meter) |
| `shipsgo_request_feature` | meta | Request a missing feature |
| `shipsgo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `shipsgo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `shipsgo_upgrade` (it returns a Stripe Checkout link). Cancel any time with `shipsgo_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `shipsgo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
