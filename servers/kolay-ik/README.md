# Kolay IK MCP by usefulapi

Use your [Kolay IK](https://kolayik.com) account from Claude, Cursor, or any MCP client. Read employees, leave, time records, expenses, payroll and calendar events, and create leave or time records, change events and employee records. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://kolay-ik.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://kolay-ik.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http kolay-ik https://kolay-ik.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=kolay-ik&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fkolay-ik.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "kolay-ik": {
      "url": "https://kolay-ik.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Kolay IK credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/kolay-ik/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Kolay IK API token**, created in Kolay IK under **Ayarlar → Geliştirici Ayarları → API Token Oluştur**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `kolayik_get_me` | read | Get the token's user |
| `kolayik_list_people` | read | List people |
| `kolayik_get_person` | read | Get a person |
| `kolayik_get_person_summary` | read | Get a person summary |
| `kolayik_get_person_leave_balances` | read | Get leave balances |
| `kolayik_list_person_trainings` | read | List a person's trainings |
| `kolayik_list_person_fields` | read | List person data fields |
| `kolayik_list_units` | read | List organization units |
| `kolayik_list_approval_processes` | read | List approval processes |
| `kolayik_list_leaves` | read | List leave records |
| `kolayik_get_leave` | read | Get a leave record |
| `kolayik_create_leave` | **write** | Create a leave record |
| `kolayik_list_timelogs` | read | List timelogs |
| `kolayik_get_timelog` | read | Get a timelog |
| `kolayik_create_timelog` | **write** | Create a timelog |
| `kolayik_delete_timelog` | **write** | Delete a timelog |
| `kolayik_list_transactions` | read | List transactions |
| `kolayik_get_transaction` | read | Get a transaction |
| `kolayik_list_expense_categories` | read | List expense categories |
| `kolayik_list_payrolls` | read | List payroll periods |
| `kolayik_get_payroll_sheet` | read | Get a payroll sheet |
| `kolayik_list_events` | read | List calendar events |
| `kolayik_get_event` | read | Get a calendar event |
| `kolayik_create_event` | **write** | Create a calendar event |
| `kolayik_update_event` | **write** | Update a calendar event |
| `kolayik_delete_event` | **write** | Delete a calendar event |
| `kolayik_list_trainings` | read | List trainings |
| `kolayik_get_training` | read | Get a training |
| `kolayik_create_person` | **write** | Create a person |
| `kolayik_update_person` | **write** | Update a person |
| `kolayik_usage_status` | meta | Usage status (free-tier meter) |
| `kolayik_request_feature` | meta | Request a missing feature |
| `kolayik_upgrade` | meta | Upgrade to Pro or Pro+ |
| `kolayik_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `kolayik_upgrade` (it returns a Stripe Checkout link). Cancel any time with `kolayik_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `kolayik_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
