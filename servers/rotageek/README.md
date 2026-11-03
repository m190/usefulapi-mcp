# Rotageek MCP by usefulapi

Use your [Rotageek](https://www.rotageek.com) account from Claude, Cursor, or any MCP client. It reads staff, locations, schedules, open gaps, leave, timesheets and reference data, and it can create a leave request. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://rotageek.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://rotageek.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http rotageek https://rotageek.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=rotageek&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frotageek.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "rotageek": {
      "url": "https://rotageek.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Rotageek credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/rotageek/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **Rotageek API username** and **API user password** (your Rotageek admin creates the API user, or Rotageek Customer Success sets one up). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `rotageek_list_users` | read | List users |
| `rotageek_get_user` | read | Get a user |
| `rotageek_list_locations` | read | List locations |
| `rotageek_get_location` | read | Get a location |
| `rotageek_list_location_users` | read | List users at a location |
| `rotageek_list_user_shifts` | read | List a user's schedule |
| `rotageek_list_location_schedule` | read | List a location's schedule |
| `rotageek_list_gaps` | read | List open gaps |
| `rotageek_list_leave_requests` | read | List leave requests |
| `rotageek_list_leave_types` | read | List leave types |
| `rotageek_create_leave_request` | **write** | Create a leave request |
| `rotageek_get_timesheet` | read | Get a week's timesheet |
| `rotageek_list_positions` | read | List positions |
| `rotageek_list_skills` | read | List skills |
| `rotageek_list_payroll_codes` | read | List payroll codes |
| `rotageek_usage_status` | meta | Usage status (free-tier meter) |
| `rotageek_request_feature` | meta | Request a missing feature |
| `rotageek_upgrade` | meta | Upgrade to Pro or Pro+ |
| `rotageek_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `rotageek_upgrade` (it returns a Stripe Checkout link). Cancel any time with `rotageek_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `rotageek_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
