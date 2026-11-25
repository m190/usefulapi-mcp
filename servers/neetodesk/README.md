# NeetoDesk MCP by usefulapi

Use your [NeetoDesk](https://www.neetodesk.com) account from Claude, Cursor, or any MCP client. Read tickets, comments, customers, team members and reports, update tickets, and add internal notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://neetodesk.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://neetodesk.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http neetodesk https://neetodesk.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=neetodesk&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fneetodesk.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "neetodesk": {
      "url": "https://neetodesk.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your NeetoDesk credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/neetodesk/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **NeetoDesk workspace subdomain** (the `acme` part of `acme.neetodesk.com`) and a **NeetoDesk API key** of type General, created under Admin panel → API keys. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `neetodesk_list_tickets` | read | List tickets |
| `neetodesk_get_ticket` | read | Get a ticket |
| `neetodesk_list_ticket_comments` | read | List ticket comments |
| `neetodesk_get_ticket_comment` | read | Get a ticket comment |
| `neetodesk_list_customers` | read | List customers |
| `neetodesk_get_customer` | read | Get a customer |
| `neetodesk_list_team_members` | read | List team members |
| `neetodesk_get_team_member` | read | Get a team member |
| `neetodesk_list_ticket_fields` | read | List custom ticket fields |
| `neetodesk_get_ticket_volume_report` | read | Ticket volume report |
| `neetodesk_get_ticket_time_series` | read | Ticket volume over time |
| `neetodesk_get_agent_performance_report` | read | Agent performance report |
| `neetodesk_get_team_performance_report` | read | Team performance report |
| `neetodesk_get_customer_satisfaction_report` | read | Customer satisfaction report |
| `neetodesk_update_ticket` | **write** | Update a ticket |
| `neetodesk_add_internal_note` | **write** | Add an internal note |
| `neetodesk_usage_status` | meta | Usage status (free-tier meter) |
| `neetodesk_request_feature` | meta | Request a missing feature |
| `neetodesk_upgrade` | meta | Upgrade to Pro or Pro+ |
| `neetodesk_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `neetodesk_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `neetodesk_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `neetodesk_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
