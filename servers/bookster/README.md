# Bookster MCP by usefulapi

Use your [Bookster](https://www.booksterhq.com/) account from Claude, Cursor, or any MCP client. It reads bookings, properties, availability and stay prices, and sets booking tags. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://bookster.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bookster.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bookster https://bookster.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bookster&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbookster.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bookster": {
      "url": "https://bookster.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Bookster credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bookster/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Bookster API key** (Bookster → Account). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bookster_list_bookings` | read | List bookings |
| `bookster_get_booking` | read | Get a booking |
| `bookster_list_booking_tags` | read | List booking tags |
| `bookster_set_booking_tags` | **write** | Set booking tags |
| `bookster_list_properties` | read | List properties |
| `bookster_get_property` | read | Get a property |
| `bookster_get_availability` | read | Get property availability |
| `bookster_get_length_of_stay_prices` | read | Get length-of-stay prices |
| `bookster_get_booking_setup_state` | read | Get booking setup state |
| `bookster_get_booking_setup_document` | read | Get a booking setup document |
| `bookster_usage_status` | meta | Usage status (free-tier meter) |
| `bookster_request_feature` | meta | Request a missing feature |
| `bookster_upgrade` | meta | Upgrade to Pro or Pro+ |
| `bookster_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `bookster_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `bookster_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `bookster_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
