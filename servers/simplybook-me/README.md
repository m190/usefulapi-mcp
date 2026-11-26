# SimplyBook.me MCP by usefulapi

Use your [SimplyBook.me](https://simplybook.me) account from Claude, Cursor, or any MCP client. It reads services, providers, slots, bookings, clients and invoices, and it creates bookings and clients and cancels bookings. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://simplybook-me.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://simplybook-me.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http simplybook-me https://simplybook-me.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=simplybook-me&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsimplybook-me.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "simplybook-me": {
      "url": "https://simplybook-me.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SimplyBook.me credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/simplybook-me/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **company login** (the account name in SimplyBook.me), the **user login** of the key's owner, your **API User Key** (Settings → API User Keys in SimplyBook.me admin) and your **SimplyBook.me region** (.me, .it, .asia or .us). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `simplybook_get_company_info` | read | Get company information |
| `simplybook_list_categories` | read | List service categories |
| `simplybook_list_locations` | read | List locations |
| `simplybook_list_statuses` | read | List booking statuses |
| `simplybook_list_services` | read | List services |
| `simplybook_get_service` | read | Get a service |
| `simplybook_list_providers` | read | List providers |
| `simplybook_get_provider` | read | Get a provider |
| `simplybook_get_available_slots` | read | Get available time slots |
| `simplybook_list_bookings` | read | List bookings |
| `simplybook_get_booking` | read | Get a booking |
| `simplybook_create_booking` | **write** | Create a booking |
| `simplybook_cancel_booking` | **write** | Cancel a booking |
| `simplybook_list_clients` | read | List clients |
| `simplybook_get_client` | read | Get a client |
| `simplybook_create_client` | **write** | Create a client |
| `simplybook_list_invoices` | read | List invoices |
| `simplybook_usage_status` | meta | Usage status (free-tier meter) |
| `simplybook_request_feature` | meta | Request a missing feature |
| `simplybook_upgrade` | meta | Upgrade to Pro or Pro+ |
| `simplybook_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `simplybook_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `simplybook_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `simplybook_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
