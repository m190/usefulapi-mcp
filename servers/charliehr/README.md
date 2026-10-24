# CharlieHR MCP by usefulapi

Use [CharlieHR](https://www.charliehr.com) from Claude, Cursor, or any MCP client — read team members, offices, teams, working locations and working weeks, leave requests, leave allowances and adjustments, company holidays and salaries, and add a note to a team member (the write needs an explicit confirmation). National Insurance numbers are removed from replies, and payroll and tax fields are dropped.
Hosted, no local install: connect with a CharlieHR API client id and client secret.

**Live endpoint:** `https://charliehr.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/charliehr

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://charliehr.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http charliehr https://charliehr.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=charliehr&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcharliehr.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "charliehr": {
      "url": "https://charliehr.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your CharlieHR credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/charliehr/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `charliehr_get_company` | read | Get company |
| `charliehr_list_offices` | read | List offices |
| `charliehr_get_office` | read | Get office |
| `charliehr_list_teams` | read | List teams |
| `charliehr_get_team` | read | Get team |
| `charliehr_list_team_members` | read | List team members |
| `charliehr_get_team_member` | read | Get team member |
| `charliehr_get_team_member_working_location` | read | Get a team member's working location |
| `charliehr_get_team_member_working_weeks` | read | Get a team member's working weeks |
| `charliehr_list_working_locations` | read | List working locations |
| `charliehr_list_leave_requests` | read | List leave requests |
| `charliehr_get_leave_request` | read | Get leave request |
| `charliehr_list_team_member_leave_requests` | read | List a team member's leave requests |
| `charliehr_list_leave_allowances` | read | List leave allowances |
| `charliehr_get_team_member_leave_allowance` | read | Get a team member's leave allowance |
| `charliehr_list_allowance_adjustments` | read | List a team member's allowance adjustments |
| `charliehr_list_non_holiday_leave_allowances` | read | List a team member's non-holiday leave allowances |
| `charliehr_list_leave_types` | read | List leave types |
| `charliehr_get_leave_type` | read | Get leave type |
| `charliehr_list_company_holidays` | read | List company holidays |
| `charliehr_list_restricted_dates` | read | List restricted dates |
| `charliehr_list_salaries` | read | List salaries |
| `charliehr_list_team_member_salaries` | read | List a team member's salaries |
| `charliehr_list_team_member_note_types` | read | List team member note types |
| `charliehr_get_team_member_note_type` | read | Get team member note type |
| `charliehr_list_team_member_notes` | read | List a team member's notes |
| `charliehr_create_team_member_note` | **write** | Add a note to a team member |
| `charliehr_usage_status` | meta | Usage status (free-tier meter) |
| `charliehr_request_feature` | meta | Request a missing feature |
| `charliehr_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `charliehr_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per company) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `charliehr_upgrade` (it returns a Stripe Checkout link). Cancel any time with `charliehr_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `charliehr_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by CharlieHR.
