# reenio MCP by usefulapi

Use your [reenio](https://reenio.cz) account from Claude, Cursor, or any MCP client. It reads reservations, customers, payment documents and reviews, and it changes reservation states, paid flags and blocked times. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://reenio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://reenio.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http reenio https://reenio.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=reenio&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Freenio.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "reenio": {
      "url": "https://reenio.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your reenio credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/reenio/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **reenio API key**, created in reenio under **Settings → API**. The API is a PREMIUM plan feature, and a read-only key is enough for the read tools. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `reenio_check_access` | read | Check API key access |
| `reenio_get_user_info` | read | Get account and key owner |
| `reenio_list_reservations` | read | List reservations |
| `reenio_get_reservation` | read | Get a reservation |
| `reenio_find_reservation_by_code` | read | Find a reservation by code |
| `reenio_get_reservations` | read | Get several reservations |
| `reenio_list_customers` | read | List customers |
| `reenio_get_customer` | read | Get a customer |
| `reenio_get_customer_credit` | read | Get customer credit |
| `reenio_list_payment_documents` | read | List payment documents |
| `reenio_get_reservation_payment_documents` | read | Get payment documents for a reservation |
| `reenio_list_resources` | read | List places, services and employees |
| `reenio_list_blocking_times` | read | List blocked times |
| `reenio_list_reviews` | read | List customer reviews |
| `reenio_search_coupon_code` | read | Search a coupon code |
| `reenio_set_reservation_state` | **write** | Change reservation state |
| `reenio_set_reservation_paid` | **write** | Mark reservation paid or unpaid |
| `reenio_cancel_reservation` | **write** | Cancel a reservation |
| `reenio_create_blocking_time` | **write** | Block a time |
| `reenio_delete_blocking_time` | **write** | Delete a blocked time |
| `reenio_update_customer` | **write** | Update customer details |
| `reenio_redeem_coupon_code` | **write** | Redeem a coupon code |
| `reenio_usage_status` | meta | Usage status (free-tier meter) |
| `reenio_request_feature` | meta | Request a missing feature |
| `reenio_upgrade` | meta | Upgrade to Pro or Pro+ |
| `reenio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `reenio_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `reenio_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `reenio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
