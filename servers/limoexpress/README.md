# LimoExpress MCP by usefulapi

Use your [LimoExpress](https://limoexpress.me) account from Claude, Cursor, or any MCP client. Read bookings, clients, vehicles, invoices and trip prices, confirm a booking and mark an invoice as paid. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://limoexpress.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://limoexpress.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http limoexpress https://limoexpress.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=limoexpress&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flimoexpress.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "limoexpress": {
      "url": "https://limoexpress.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your LimoExpress credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/limoexpress/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **LimoExpress API token** (LimoExpress → Advanced settings). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `limoexpress_list_vehicles` | read | List vehicles |
| `limoexpress_list_vehicle_classes` | read | List vehicle classes |
| `limoexpress_list_subcontractors` | read | List subcontractors |
| `limoexpress_list_events` | read | List events |
| `limoexpress_list_clients` | read | List clients |
| `limoexpress_list_invoices` | read | List invoices |
| `limoexpress_list_booking_offers` | read | List booking offers |
| `limoexpress_list_passengers` | read | List passengers |
| `limoexpress_list_users` | read | List users |
| `limoexpress_list_expenses` | read | List expenses |
| `limoexpress_list_payment_methods` | read | List payment methods |
| `limoexpress_list_all_currencies` | read | List all currencies |
| `limoexpress_list_countries` | read | List countries |
| `limoexpress_list_bookings` | read | List bookings |
| `limoexpress_list_booking_types` | read | List booking types |
| `limoexpress_list_booking_statuses` | read | List booking statuses |
| `limoexpress_list_organisation_currencies` | read | List organisation currencies |
| `limoexpress_get_pricing` | read | Get trip pricing |
| `limoexpress_list_discount_vouchers` | read | List discount vouchers |
| `limoexpress_get_extra_fees_pricing` | read | Get extra fees pricing |
| `limoexpress_mark_booking_as_confirmed` | **write** | Mark booking as confirmed |
| `limoexpress_mark_invoice_as_paid` | **write** | Mark invoice as paid |
| `limoexpress_usage_status` | meta | Usage status (free-tier meter) |
| `limoexpress_request_feature` | meta | Request a missing feature |
| `limoexpress_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `limoexpress_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `limoexpress_upgrade` (it returns a Stripe Checkout link). Cancel any time with `limoexpress_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `limoexpress_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
