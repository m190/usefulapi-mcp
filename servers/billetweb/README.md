# Billetweb MCP by usefulapi

Use your [Billetweb](https://www.billetweb.fr) account from Claude, Cursor, or any MCP client. Read events, seats, attendees, sales and payouts, and check in tickets or create orders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://billetweb.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://billetweb.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http billetweb https://billetweb.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=billetweb&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbilletweb.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "billetweb": {
      "url": "https://billetweb.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Billetweb credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/billetweb/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **Billetweb API user** id and the **Billetweb API key** from the API page of your back office. Create the key there as "A third party", with read only or read and write. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `billetweb_list_events` | read | List events |
| `billetweb_get_availability` | read | Get availability |
| `billetweb_list_tickets` | read | List ticket types |
| `billetweb_list_sessions` | read | List sessions |
| `billetweb_list_attendees` | read | List attendees of an event |
| `billetweb_list_all_attendees` | read | List attendees across all events |
| `billetweb_list_waiting_list` | read | List waiting list |
| `billetweb_list_accounting` | read | List sales and refunds (accounting) |
| `billetweb_list_payouts` | read | List payouts |
| `billetweb_get_payout` | read | Get payout detail |
| `billetweb_list_crm_contacts` | read | List CRM contacts |
| `billetweb_list_crm_segments` | read | List CRM segments |
| `billetweb_list_lists` | read | List custom lists |
| `billetweb_get_list_data` | read | Get custom list content |
| `billetweb_check_tickets` | **write** | Check tickets in or out |
| `billetweb_mark_orders_paid` | **write** | Mark reservations as paid |
| `billetweb_send_payment_requests` | **write** | Send payment request emails |
| `billetweb_create_offline_orders` | **write** | Create offline orders |
| `billetweb_usage_status` | meta | Usage status (free-tier meter) |
| `billetweb_request_feature` | meta | Request a missing feature |
| `billetweb_upgrade` | meta | Upgrade to Pro or Pro+ |
| `billetweb_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `billetweb_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `billetweb_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `billetweb_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
