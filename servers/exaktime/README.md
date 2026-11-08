# ExakTime / Arcoro MCP by usefulapi

Connect your API-enabled ExakTime / Arcoro account.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://exaktime.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http exaktime https://exaktime.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=exaktime&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fexaktime.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "exaktime": {
      "url": "https://exaktime.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ExakTime / Arcoro credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/exaktime/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `exaktime_list_employees` | read | List employees |
| `exaktime_list_persons` | read | Search persons |
| `exaktime_get_person` | read | Get person |
| `exaktime_get_employee` | read | Get employee |
| `exaktime_list_locations` | read | List locations |
| `exaktime_get_location` | read | Get location |
| `exaktime_list_jobs` | read | List jobs |
| `exaktime_get_job` | read | Get job |
| `exaktime_list_cost_codes` | read | List cost codes |
| `exaktime_get_cost_code` | read | Get cost code |
| `exaktime_list_cost_types` | read | List cost types |
| `exaktime_list_departments` | read | List departments |
| `exaktime_list_job_codes` | read | List job codes |
| `exaktime_list_pay_schedules` | read | List pay schedules |
| `exaktime_list_labor_classes` | read | List labor classes |
| `exaktime_list_rate_codes` | read | List rate codes |
| `exaktime_list_time_records` | read | List time records |
| `exaktime_list_time_punches` | read | List time punches |
| `exaktime_list_shifts` | read | List scheduled shifts |
| `exaktime_list_pay_periods` | read | List pay periods |
| `exaktime_list_time_off_requests` | read | List time off requests |
| `exaktime_list_time_off_balances` | read | List time off balances |
| `exaktime_list_timecard_approvals` | read | List daily timecard approvals |
| `exaktime_list_pay_period_approvals` | read | List pay period approvals |
| `exaktime_list_meal_break_violations` | read | List meal break violations |
| `exaktime_query_odata` | read | Query any OData entity set |
| `exaktime_create_job` | **write** | Create job |
| `exaktime_update_job` | **write** | Update job |
| `exaktime_create_cost_code` | **write** | Create cost code |
| `exaktime_update_cost_code` | **write** | Update cost code |
| `exaktime_create_location` | **write** | Create location |
| `exaktime_update_location` | **write** | Update location |
| `exaktime_usage_status` | meta | Usage status (free-tier meter) |
| `exaktime_request_feature` | meta | Request a missing feature |
| `exaktime_upgrade` | meta | Upgrade to Pro or Pro+ |
| `exaktime_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per verified tenant (API key when tenant is unavailable)) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per verified tenant (API key when tenant is unavailable)) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `exaktime_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `exaktime_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `exaktime_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
