# Rentlio MCP by usefulapi

Use your [Rentlio](https://rentl.io/en) account from Claude, Cursor, or any MCP client. It reads reservations, guests and folios for one property, and it checks reservations in and adds notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://rentlio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://rentlio.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http rentlio https://rentlio.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=rentlio&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frentlio.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "rentlio": {
      "url": "https://rentlio.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Rentlio credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/rentlio/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Rentlio API key**, from **Account settings → API keys**, and your **Rentlio property ID**, from **Property settings**. The server validates the key and the property and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `rentlio_get_account` | read | Get account |
| `rentlio_list_properties` | read | List properties |
| `rentlio_list_todays_reservations` | read | List today's reservations |
| `rentlio_list_reservations` | read | List reservations |
| `rentlio_get_reservation` | read | Get a reservation |
| `rentlio_list_reservation_guests` | read | List reservation guests |
| `rentlio_list_folios` | read | List folios |
| `rentlio_list_checked_in_guests` | read | List checked-in guests |
| `rentlio_check_in_reservation` | **write** | Check in a reservation |
| `rentlio_add_reservation_note` | **write** | Add a reservation note |
| `rentlio_usage_status` | meta | Usage status (free-tier meter) |
| `rentlio_request_feature` | meta | Request a missing feature |
| `rentlio_upgrade` | meta | Upgrade to Pro or Pro+ |
| `rentlio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `rentlio_upgrade` (it returns a Stripe Checkout link). Cancel any time with `rentlio_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `rentlio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
