# Bookeo MCP by usefulapi

Use [Bookeo](https://www.bookeo.com) from Claude, Cursor, or any MCP client — check availability, create holds and bookings, update or cancel bookings, and manage customers.
Hosted, no local install: connect with your own Bookeo credentials.

**Live endpoint:** `https://bookeo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/bookeo

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bookeo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bookeo https://bookeo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bookeo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbookeo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bookeo": {
      "url": "https://bookeo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Bookeo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bookeo/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Bookeo API key and secret key** (a Bookeo developer app authorized for your account; paid plan).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bookeo_get_api_key_info` | read | Get API key info |
| `bookeo_get_business` | read | Get the business |
| `bookeo_list_products` | read | List products |
| `bookeo_list_people_categories` | read | List people categories |
| `bookeo_list_resources` | read | List resources |
| `bookeo_get_availability_slots` | read | Get availability slots |
| `bookeo_search_matching_slots` | read | Search matching slots |
| `bookeo_list_bookings` | read | List bookings |
| `bookeo_get_booking` | read | Get a booking |
| `bookeo_list_booking_payments` | read | List a booking's payments |
| `bookeo_list_customers` | read | List customers |
| `bookeo_get_customer` | read | Get a customer |
| `bookeo_list_customer_bookings` | read | List a customer's bookings |
| `bookeo_list_payments` | read | List payments |
| `bookeo_get_payment` | read | Get a payment |
| `bookeo_create_hold` | **write** | Hold seats (price check) |
| `bookeo_create_booking` | **write** | Create a booking |
| `bookeo_update_booking` | **write** | Update a booking |
| `bookeo_cancel_booking` | **write** | Cancel a booking |
| `bookeo_create_customer` | **write** | Create a customer |
| `bookeo_update_customer` | **write** | Update a customer |
| `bookeo_usage_status` | meta | Usage status (free-tier meter) |
| `bookeo_request_feature` | meta | Request a missing feature |
| `bookeo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `bookeo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `bookeo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `bookeo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `bookeo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Bookeo.
