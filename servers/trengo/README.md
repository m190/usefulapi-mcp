# Trengo MCP by usefulapi

Use [Trengo](https://trengo.com) from Claude, Cursor, or any MCP client — read tickets and messages, look up contacts, users, teams and labels, pull support reports, and reply, assign, close or reopen tickets.
Hosted, no local install: connect with your own Trengo credentials.

**Live endpoint:** `https://trengo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/trengo

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://trengo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http trengo https://trengo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=trengo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftrengo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "trengo": {
      "url": "https://trengo.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/trengo/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Trengo personal access token** (Settings → Apps & integrations → Rest API).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `trengo_list_tickets` | read | List tickets |
| `trengo_list_ticket_messages` | read | List a ticket's messages |
| `trengo_get_email_message` | read | Get an email message |
| `trengo_list_contacts` | read | List or search contacts |
| `trengo_get_contact` | read | Get a contact |
| `trengo_list_contact_groups` | read | List contact groups |
| `trengo_list_users` | read | List users |
| `trengo_list_teams` | read | List teams |
| `trengo_list_labels` | read | List labels |
| `trengo_list_ticket_results` | read | List ticket results |
| `trengo_list_custom_fields` | read | List custom fields |
| `trengo_list_quick_replies` | read | List quick replies |
| `trengo_get_reporting_metrics` | read | Get reporting metrics |
| `trengo_get_agent_performance` | read | Get agent performance |
| `trengo_get_ticket_details_report` | read | Get ticket details report |
| `trengo_create_ticket` | **write** | Create a ticket |
| `trengo_assign_ticket` | **write** | Assign a ticket |
| `trengo_close_ticket` | **write** | Close a ticket |
| `trengo_reopen_ticket` | **write** | Reopen a ticket |
| `trengo_send_ticket_message` | **write** | Send a ticket message |
| `trengo_create_contact` | **write** | Create a contact |
| `trengo_update_contact` | **write** | Update a contact |
| `trengo_create_board_card` | **write** | Create a board card |
| `trengo_update_board_card` | **write** | Update a board card |
| `trengo_usage_status` | meta | Usage status (free-tier meter) |
| `trengo_upgrade` | meta | Upgrade to Pro (unlimited) |
| `trengo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `trengo_upgrade` (it returns a Stripe Checkout link). Cancel any time with `trengo_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `trengo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Trengo.
