# Qgiv MCP by usefulapi

Use [Qgiv](https://www.qgiv.com) from Claude, Cursor, or any MCP client — donations, refunds, recurring gifts, statements, peer-to-peer registrations, events and pledges, read-only.
Hosted, no local install: connect with your own Qgiv credentials.

**Live endpoint:** `https://qgiv.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/qgiv

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://qgiv.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http qgiv https://qgiv.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=qgiv&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fqgiv.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "qgiv": {
      "url": "https://qgiv.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Qgiv credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/qgiv/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `qgiv_list_recent_transactions` | read | List recent transactions |
| `qgiv_list_transactions_by_date` | read | List transactions by date range |
| `qgiv_list_transactions_after_id` | read | List transactions after an id |
| `qgiv_get_transaction` | read | Get transaction |
| `qgiv_list_recent_refunds` | read | List recent refunds |
| `qgiv_list_refunds_by_date` | read | List refunds by date range |
| `qgiv_get_refund` | read | Get refund |
| `qgiv_list_recurring_schedules` | read | List recurring gift schedules |
| `qgiv_get_recurring_schedule` | read | Get recurring gift schedule |
| `qgiv_list_statements` | read | List statements |
| `qgiv_get_latest_statements` | read | Get latest statements |
| `qgiv_get_statement` | read | Get statement |
| `qgiv_list_recent_registrations` | read | List recent P2P registrations |
| `qgiv_list_registrations_by_date` | read | List P2P registrations by date range |
| `qgiv_get_registration` | read | Get P2P registration |
| `qgiv_list_events` | read | List events |
| `qgiv_list_pledges` | read | List pledge options |
| `qgiv_get_pledge` | read | Get pledge option |
| `qgiv_list_custom_fields` | read | List custom fields |
| `qgiv_list_report_mappings` | read | List report mappings |
| `qgiv_get_report_mapping` | read | Get report mapping |
| `qgiv_usage_status` | meta | Usage status (free-tier meter) |
| `qgiv_request_feature` | meta | Request a missing feature |
| `qgiv_upgrade` | meta | Upgrade to Pro (unlimited) |
| `qgiv_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `qgiv_upgrade` (it returns a Stripe Checkout link). Cancel any time with `qgiv_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `qgiv_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Qgiv.
