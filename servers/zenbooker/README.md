# Zenbooker MCP by usefulapi

Use [Zenbooker](https://zenbooker.com) from Claude, Cursor, or any MCP client — read your home-service business's jobs, recurring bookings, customers, invoices, transactions, services, territories, team members and service requests, check service areas and open timeslots, and add customers and job notes.
Hosted, no local install: connect with your Zenbooker API key.

**Live endpoint:** `https://zenbooker.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/zenbooker

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://zenbooker.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http zenbooker https://zenbooker.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=zenbooker&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fzenbooker.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "zenbooker": {
      "url": "https://zenbooker.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Zenbooker credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/zenbooker/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `zenbooker_list_jobs` | read | List jobs |
| `zenbooker_get_job` | read | Get job |
| `zenbooker_add_job_note` | **write** | Add a note to a job |
| `zenbooker_list_recurring_bookings` | read | List recurring bookings |
| `zenbooker_get_recurring_booking` | read | Get recurring booking |
| `zenbooker_list_customers` | read | List customers |
| `zenbooker_get_customer` | read | Get customer |
| `zenbooker_create_customer` | **write** | Create customer |
| `zenbooker_list_invoices` | read | List invoices |
| `zenbooker_get_invoice` | read | Get invoice |
| `zenbooker_list_transactions` | read | List transactions |
| `zenbooker_get_transaction` | read | Get transaction |
| `zenbooker_list_services` | read | List services |
| `zenbooker_get_service` | read | Get service |
| `zenbooker_list_territories` | read | List service territories |
| `zenbooker_get_territory` | read | Get service territory |
| `zenbooker_list_team_members` | read | List team members |
| `zenbooker_get_team_member` | read | Get team member |
| `zenbooker_list_service_requests` | read | List service requests |
| `zenbooker_check_service_area` | read | Check service area |
| `zenbooker_get_timeslots` | read | Get available time slots |
| `zenbooker_usage_status` | meta | Usage status (free-tier meter) |
| `zenbooker_request_feature` | meta | Request a missing feature |
| `zenbooker_upgrade` | meta | Upgrade to Pro (unlimited) |
| `zenbooker_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API key) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `zenbooker_upgrade` (it returns a Stripe Checkout link). Cancel any time with `zenbooker_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `zenbooker_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Zenbooker.
