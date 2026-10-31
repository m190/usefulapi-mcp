# bookingkit MCP by usefulapi

Use your [bookingkit](https://bookingkit.com) account from Claude, Cursor, or any MCP client. Read events, open dates, orders, tickets, payments, vouchers, coupons and staff users. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://bookingkit.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bookingkit.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bookingkit https://bookingkit.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bookingkit&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbookingkit.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bookingkit": {
      "url": "https://bookingkit.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your bookingkit credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bookingkit/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **API client ID** and **API client secret** of a vendor API client with read scopes (`calendar_read`, `orders_read_owned`). Ask bookingkit support in the admin chat to issue them. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bookingkit_list_vendors` | read | List vendors |
| `bookingkit_get_vendor` | read | Get a vendor |
| `bookingkit_list_events` | read | List events (experiences) |
| `bookingkit_get_event` | read | Get an event |
| `bookingkit_list_event_dates` | read | List dates (availability) |
| `bookingkit_list_orders` | read | List orders (bookings) |
| `bookingkit_get_order` | read | Get an order |
| `bookingkit_list_order_payments` | read | List payments of an order |
| `bookingkit_list_order_tickets` | read | List tickets of an order |
| `bookingkit_list_categories` | read | List categories |
| `bookingkit_list_products` | read | List products |
| `bookingkit_list_vouchers` | read | List vouchers |
| `bookingkit_list_coupons` | read | List coupons |
| `bookingkit_list_users` | read | List users |
| `bookingkit_usage_status` | meta | Usage status (free-tier meter) |
| `bookingkit_request_feature` | meta | Request a missing feature |
| `bookingkit_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `bookingkit_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `bookingkit_upgrade` (it returns a Stripe Checkout link). Cancel any time with `bookingkit_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `bookingkit_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
