# Appointo MCP by usefulapi

Read Appointo bookings, availability and subscriptions; create, reschedule and cancel bookings.

**Live endpoint:** `https://appointo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/appointo

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://appointo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http appointo https://appointo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=appointo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fappointo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "appointo": {
      "url": "https://appointo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Appointo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/appointo/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Appointo **API token** (the Appointo app → Plans & Settings; paid plan).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `appointo_list_products` | read | List bookable products |
| `appointo_list_appointments` | read | List appointments (bookable services) |
| `appointo_get_availability` | read | Get appointment availability |
| `appointo_list_bookings` | read | List bookings |
| `appointo_list_cancelled_bookings` | read | List cancelled bookings |
| `appointo_list_subscription_contracts` | read | List subscription contracts |
| `appointo_create_booking` | **write** | Create booking |
| `appointo_reschedule_booking` | **write** | Reschedule booking |
| `appointo_cancel_booking` | **write** | Cancel booking |
| `appointo_update_booking_buffers` | **write** | Update booking buffer times |
| `appointo_usage_status` | meta | Usage status (free-tier meter) |
| `appointo_request_feature` | meta | Request a missing feature |
| `appointo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `appointo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `appointo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `appointo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `appointo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Appointo.
