# Members.dev MCP by usefulapi

Use your [Members.dev](https://members.dev) account from Claude, Cursor, or any MCP client. Read members, products, subscriptions, events, bookings, invoices, payments and benefits, and create or update members. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://members-dev.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://members-dev.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http members-dev https://members-dev.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=members-dev&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmembers-dev.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "members-dev": {
      "url": "https://members-dev.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Members.dev credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/members-dev/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Members.dev API key** (Members.dev dashboard → API keys) and an optional **organization id**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `membersdev_get_account` | read | Get current account |
| `membersdev_list_organizations` | read | List organizations |
| `membersdev_list_members` | read | List members |
| `membersdev_get_member` | read | Get member |
| `membersdev_get_member_by_external_id` | read | Get member by external id |
| `membersdev_list_products` | read | List membership products |
| `membersdev_get_product` | read | Get membership product |
| `membersdev_list_subscriptions` | read | List subscriptions |
| `membersdev_get_subscription` | read | Get subscription |
| `membersdev_list_events` | read | List events |
| `membersdev_get_event` | read | Get event |
| `membersdev_list_bookings` | read | List bookings |
| `membersdev_get_booking` | read | Get booking |
| `membersdev_list_invoices` | read | List invoices |
| `membersdev_get_invoice` | read | Get invoice |
| `membersdev_list_payments` | read | List payments |
| `membersdev_list_credit_notes` | read | List credit notes |
| `membersdev_list_groups` | read | List groups |
| `membersdev_list_benefits` | read | List benefits |
| `membersdev_list_benefit_grants` | read | List benefit grants |
| `membersdev_list_guests` | read | List guests |
| `membersdev_create_member` | **write** | Create member |
| `membersdev_update_member` | **write** | Update member |
| `membersdev_usage_status` | meta | Usage status (free-tier meter) |
| `membersdev_request_feature` | meta | Request a missing feature |
| `membersdev_upgrade` | meta | Upgrade to Pro or Pro+ |
| `membersdev_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `membersdev_upgrade` (it returns a Stripe Checkout link). Cancel any time with `membersdev_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `membersdev_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
