# Smoobu MCP by usefulapi

Use [Smoobu](https://smoobu.com) from Claude, Cursor, or any MCP client — check properties, reservations, rates, availability, guest messages and guests, and create or update bookings.
Hosted, no local install: connect with your own Smoobu credentials.

**Live endpoint:** `https://smoobu.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/smoobu

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://smoobu.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http smoobu https://smoobu.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=smoobu&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsmoobu.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "smoobu": {
      "url": "https://smoobu.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Smoobu credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/smoobu/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Smoobu API key and API secret** (Settings → Advanced → API Keys).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `smoobu_get_user` | read | Get the current user |
| `smoobu_list_apartments` | read | List properties |
| `smoobu_get_apartment` | read | Get one property |
| `smoobu_list_reservations` | read | List reservations |
| `smoobu_get_reservation` | read | Get one reservation |
| `smoobu_list_price_elements` | read | List a reservation's price elements |
| `smoobu_get_reservation_placeholders` | read | Get a reservation's message placeholders |
| `smoobu_get_rates` | read | Get rates and availability |
| `smoobu_check_availability` | read | Check availability and quote a stay |
| `smoobu_list_message_threads` | read | List inbox threads |
| `smoobu_list_reservation_messages` | read | List a reservation's messages |
| `smoobu_list_guests` | read | List guests |
| `smoobu_get_guest` | read | Get one guest |
| `smoobu_list_addons` | read | List add-ons |
| `smoobu_list_custom_placeholders` | read | List custom placeholders |
| `smoobu_create_reservation` | **write** | Create a reservation |
| `smoobu_update_reservation` | **write** | Update a reservation |
| `smoobu_set_rates` | **write** | Set rates and minimum stays |
| `smoobu_send_message_to_guest` | **write** | Send a message to a guest |
| `smoobu_send_message_to_host` | **write** | Post a message to the host |
| `smoobu_usage_status` | meta | Usage status (free-tier meter) |
| `smoobu_upgrade` | meta | Upgrade to Pro (unlimited) |
| `smoobu_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `smoobu_upgrade` (it returns a Stripe Checkout link). Cancel any time with `smoobu_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `smoobu_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Smoobu.
