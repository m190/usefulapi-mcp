# ThinkReservations MCP by usefulapi

Use your [ThinkReservations](https://www.thinkreservations.com) account from Claude, Cursor, or any MCP client. Read your property details, rooms, rates, promotions, inventory and reservations, and get price quotes for a stay. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://thinkreservations.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://thinkreservations.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http thinkreservations https://thinkreservations.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=thinkreservations&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fthinkreservations.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "thinkreservations": {
      "url": "https://thinkreservations.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ThinkReservations credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/thinkreservations/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Hotel ID** and a **Restricted API key** (ThinkReservations → Settings → API Keys; you need the permission "Can manage API keys"; the same page shows the hotel ID). Grant the `read:hotel` scope and the other read scopes you need. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `thinkreservations_get_hotel` | read | Get property details |
| `thinkreservations_list_rooms` | read | List rooms |
| `thinkreservations_list_room_types` | read | List room types |
| `thinkreservations_list_rate_types` | read | List rate types |
| `thinkreservations_get_rate_type` | read | Get rate type |
| `thinkreservations_get_daily_rates` | read | Get daily rates |
| `thinkreservations_list_promotions` | read | List promotions |
| `thinkreservations_list_reservations` | read | List reservations |
| `thinkreservations_get_inventory` | read | Get inventory |
| `thinkreservations_list_blackouts` | read | List blackouts |
| `thinkreservations_get_availability` | read | Get availability and prices |
| `thinkreservations_usage_status` | meta | Usage status (free-tier meter) |
| `thinkreservations_request_feature` | meta | Request a missing feature |
| `thinkreservations_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `thinkreservations_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `thinkreservations_upgrade` (it returns a Stripe Checkout link). Cancel any time with `thinkreservations_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `thinkreservations_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
