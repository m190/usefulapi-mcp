# GoTable MCP by usefulapi

Use your [GoTable](https://gotable.app) account from Claude, Cursor, or any MCP client. Read table availability, reservations, guests and offers, and create, change or cancel reservations. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://gotable.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://gotable.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http gotable https://gotable.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=gotable&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgotable.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "gotable": {
      "url": "https://gotable.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your GoTable credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/gotable/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **GoTable API key**. Create a restaurant key in GoTable under your restaurant, **Integrations**. Or create an account key for all your restaurants in your personal account, **Settings**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `gotable_list_restaurants` | read | List restaurants |
| `gotable_get_restaurant` | read | Get a restaurant |
| `gotable_list_accounts` | read | List accounts of a restaurant |
| `gotable_get_availability` | read | Get availability |
| `gotable_get_offer_availability` | read | Get availability of an offer |
| `gotable_list_offers` | read | List offers |
| `gotable_get_offer` | read | Get an offer |
| `gotable_list_reservations` | read | List reservations |
| `gotable_get_reservation` | read | Get a reservation |
| `gotable_list_reservation_notes` | read | List notes of a reservation |
| `gotable_list_guests` | read | List guests |
| `gotable_get_guest` | read | Get a guest |
| `gotable_list_tables` | read | List tables |
| `gotable_list_combinations` | read | List table combinations |
| `gotable_list_reviews` | read | List reviews |
| `gotable_create_reservation` | **write** | Create a reservation |
| `gotable_update_reservation` | **write** | Update a reservation |
| `gotable_cancel_reservation` | **write** | Cancel a reservation |
| `gotable_create_reservation_note` | **write** | Add a note to a reservation |
| `gotable_create_guest` | **write** | Create a guest |
| `gotable_update_guest` | **write** | Update a guest |
| `gotable_usage_status` | meta | Usage status (free-tier meter) |
| `gotable_request_feature` | meta | Request a missing feature |
| `gotable_upgrade` | meta | Upgrade to Pro or Pro+ |
| `gotable_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `gotable_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `gotable_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `gotable_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
