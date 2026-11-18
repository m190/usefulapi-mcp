# BKG MCP by usefulapi

Use your [BKG](https://bkg.dk) account from Claude, Cursor, or any MCP client. It reads services, staff, locations, availability, bookings, clients and payments. It creates or cancels bookings and creates clients. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://bkg.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bkg.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bkg https://bkg.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bkg&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbkg.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bkg": {
      "url": "https://bkg.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your BKG credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bkg/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **BKG API key** (Integrations → API & webhooks in BKG; needs the Pro plan or the API add-on). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bkg_me` | read | Show the salon for this key |
| `bkg_list_services` | read | List services |
| `bkg_get_service` | read | Get a service |
| `bkg_list_staff` | read | List staff |
| `bkg_list_locations` | read | List locations |
| `bkg_get_staff_schedule` | read | Get staff working hours |
| `bkg_search_availability` | read | Search free times |
| `bkg_list_bookings` | read | List bookings |
| `bkg_get_booking` | read | Get a booking |
| `bkg_list_clients` | read | List or search clients |
| `bkg_get_client` | read | Get a client |
| `bkg_list_payments` | read | List payments |
| `bkg_create_booking` | **write** | Create a booking |
| `bkg_cancel_booking` | **write** | Cancel a booking |
| `bkg_create_client` | **write** | Create a client |
| `bkg_usage_status` | meta | Usage status (free-tier meter) |
| `bkg_request_feature` | meta | Request a missing feature |
| `bkg_upgrade` | meta | Upgrade to Pro or Pro+ |
| `bkg_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `bkg_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `bkg_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `bkg_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
