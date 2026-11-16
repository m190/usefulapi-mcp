# Quendoo MCP by usefulapi

Use your [Quendoo](https://quendoo.com) account from Claude, Cursor, or any MCP client. Read rooms, rates and bookings, and change availability, rates, restrictions and bookings in the hotels your token reaches. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://quendoo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://quendoo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http quendoo https://quendoo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=quendoo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fquendoo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "quendoo": {
      "url": "https://quendoo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Quendoo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/quendoo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Quendoo Connect API token** (starts with `qc_`, created under **PEM systems → Quendoo Connect → API tokens**). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `quendoo_list_properties` | read | List properties |
| `quendoo_get_property` | read | Get a property |
| `quendoo_get_structure` | read | Get property structure |
| `quendoo_list_room_types` | read | List room types |
| `quendoo_list_rate_plans` | read | List rate plans |
| `quendoo_get_availability` | read | Get availability |
| `quendoo_get_rates` | read | Get rates |
| `quendoo_search_offers` | read | Search booking offers |
| `quendoo_list_bookings` | read | List bookings |
| `quendoo_get_booking` | read | Get a booking |
| `quendoo_get_cancellation_quote` | read | Get a cancellation quote |
| `quendoo_list_booking_revisions` | read | List booking changes |
| `quendoo_update_availability` | **write** | Update availability |
| `quendoo_update_rates` | **write** | Update rates |
| `quendoo_update_restrictions` | **write** | Update restrictions |
| `quendoo_book_from_search` | **write** | Book from a search |
| `quendoo_cancel_booking` | **write** | Cancel a booking |
| `quendoo_ack_booking_revision` | **write** | Acknowledge a booking change |
| `quendoo_usage_status` | meta | Usage status (free-tier meter) |
| `quendoo_request_feature` | meta | Request a missing feature |
| `quendoo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `quendoo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `quendoo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `quendoo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `quendoo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
