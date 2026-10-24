# Teamleader Focus MCP by usefulapi

Work with your [Teamleader Focus](https://www.teamleader.eu) account from Claude, Cursor, or any MCP client — look up contacts, companies, deals and pipelines, invoices, projects, tasks, tracked time, tickets, users and work types; create contacts, companies, deals and tasks and add notes. Hosted, no local install: connect with your Teamleader account over OAuth.

**Live endpoint:** `https://teamleader-focus.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/teamleader-focus

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://teamleader-focus.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http teamleader-focus https://teamleader-focus.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=teamleader-focus&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fteamleader-focus.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "teamleader-focus": {
      "url": "https://teamleader-focus.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your Teamleader Focus account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/teamleader-focus/

<!-- connect:end (generated above, edit below) -->

On first connect you'll be sent to Teamleader to sign in and approve access for your account; no API keys to paste.
You can remove the access any time in Teamleader Focus. One subscription covers one Teamleader user in one account.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `teamleader_get_current_user` | read | Get the current user |
| `teamleader_list_users` | read | List users |
| `teamleader_list_contacts` | read | List contacts |
| `teamleader_get_contact` | read | Get a contact |
| `teamleader_list_companies` | read | List companies |
| `teamleader_get_company` | read | Get a company |
| `teamleader_list_deals` | read | List deals |
| `teamleader_get_deal` | read | Get a deal |
| `teamleader_list_deal_pipelines` | read | List deal pipelines |
| `teamleader_list_deal_phases` | read | List deal phases |
| `teamleader_list_invoices` | read | List invoices |
| `teamleader_get_invoice` | read | Get an invoice |
| `teamleader_list_projects` | read | List projects |
| `teamleader_list_tasks` | read | List tasks |
| `teamleader_list_time_tracking` | read | List time tracking |
| `teamleader_list_tickets` | read | List tickets |
| `teamleader_list_work_types` | read | List work types |
| `teamleader_list_departments` | read | List departments |
| `teamleader_list_products` | read | List products |
| `teamleader_get_product` | read | Get a product |
| `teamleader_list_product_categories` | read | List product categories |
| `teamleader_list_quotations` | read | List quotations |
| `teamleader_get_quotation` | read | Get a quotation |
| `teamleader_list_activity_types` | read | List activity types |
| `teamleader_list_events` | read | List calendar events |
| `teamleader_list_subscriptions` | read | List subscriptions |
| `teamleader_get_subscription` | read | Get a subscription |
| `teamleader_list_notes` | read | List notes |
| `teamleader_create_contact` | **write** | Create a contact |
| `teamleader_create_company` | **write** | Create a company |
| `teamleader_create_deal` | **write** | Create a deal |
| `teamleader_create_task` | **write** | Create a task |
| `teamleader_add_note` | **write** | Add a note |
| `teamleader_create_event` | **write** | Create a calendar event |
| `teamleader_complete_task` | **write** | Complete a task |
| `teamleader_add_time_tracking` | **write** | Add tracked time |
| `teamleader_usage_status` | meta | Usage status (free-tier meter) |
| `teamleader_request_feature` | meta | Request a missing feature |
| `teamleader_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `teamleader_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `teamleader_upgrade` (it returns a Stripe Checkout link). Cancel any time with `teamleader_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `teamleader_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). This repo contains documentation only; the server is hosted.
