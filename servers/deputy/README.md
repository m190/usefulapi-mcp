# Deputy MCP by usefulapi

Use [Deputy](https://www.deputy.com) from Claude, Cursor, or any MCP client — see rosters, timesheets, leave and staff, and create shifts, leave requests and memos.
Hosted, no local install: connect with your own Deputy credentials.

**Live endpoint:** `https://deputy.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/deputy

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://deputy.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http deputy https://deputy.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=deputy&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdeputy.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "deputy": {
      "url": "https://deputy.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/deputy/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Deputy install host** (like `acme.au.deputy.com`) and a **permanent access token** (Deputy developer portal → OAuth Client → Get an Access Token).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `deputy_whoami` | read | Who am I |
| `deputy_list_locations` | read | List locations |
| `deputy_list_areas` | read | List areas |
| `deputy_list_employees` | read | List employees |
| `deputy_get_employee` | read | Get one employee |
| `deputy_list_shifts` | read | List shifts |
| `deputy_get_shift` | read | Get one shift |
| `deputy_list_timesheets` | read | List timesheets |
| `deputy_get_timesheet` | read | Get one timesheet |
| `deputy_list_leave` | read | List leave requests |
| `deputy_get_employee_unavailability` | read | Get an employee's unavailability |
| `deputy_query_resource` | read | Query any Deputy resource |
| `deputy_describe_resource` | read | Describe a Deputy resource |
| `deputy_create_shift` | **write** | Create a shift |
| `deputy_update_shift` | **write** | Update a shift |
| `deputy_publish_shifts` | **write** | Publish shifts |
| `deputy_create_leave_request` | **write** | Create a leave request |
| `deputy_add_unavailability` | **write** | Add unavailability for an employee |
| `deputy_create_memo` | **write** | Post a memo |
| `deputy_update_timesheet` | **write** | Update a timesheet |
| `deputy_approve_timesheet` | **write** | Approve a timesheet |
| `deputy_usage_status` | meta | Usage status (free-tier meter) |
| `deputy_upgrade` | meta | Upgrade to Pro (unlimited) |
| `deputy_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `deputy_upgrade` (it returns a Stripe Checkout link). Cancel any time with `deputy_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `deputy_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Deputy.
