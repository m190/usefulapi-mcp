# Workfeed MCP by usefulapi

Remote MCP endpoint: https://workfeed.usefulapi.io/mcp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://workfeed.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http workfeed https://workfeed.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=workfeed&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fworkfeed.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "workfeed": {
      "url": "https://workfeed.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Workfeed credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/workfeed/

<!-- connect:end (generated above, edit below) -->

Connect with your Workfeed credentials using the hosted authorization flow.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `workfeed_list_departments` | read | List departments |
| `workfeed_list_roles` | read | List roles |
| `workfeed_list_employees` | read | List scheduling staff |
| `workfeed_get_settings` | read | Get scheduling settings |
| `workfeed_list_salary_supplements` | read | List salary supplements |
| `workfeed_get_employee` | read | Get scheduling staff member |
| `workfeed_get_shift` | read | Get a shift |
| `workfeed_get_leave` | read | Get leave |
| `workfeed_get_availability` | read | Get availability |
| `workfeed_list_shifts` | read | List shifts |
| `workfeed_list_leaves` | read | List overlapping leave |
| `workfeed_list_availabilities` | read | List availability |
| `workfeed_list_department_days` | read | List stored department days |
| `workfeed_get_department_day` | read | Get a stored department day |
| `workfeed_get_department_stats` | read | Get department labor and revenue |
| `workfeed_create_shift` | **write** | Create a confirmed shift |
| `workfeed_update_shift` | **write** | Update a confirmed shift |
| `workfeed_usage_status` | meta | Usage status (free-tier meter) |
| `workfeed_request_feature` | meta | Request a missing feature |
| `workfeed_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `workfeed_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per company) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `workfeed_upgrade` (it returns a Stripe Checkout link). Cancel any time with `workfeed_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `workfeed_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

See the repository license.
