# SmartHR MCP by usefulapi

Connect your API-enabled SmartHR account.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://smarthr.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http smarthr https://smarthr.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=smarthr&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsmarthr.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "smarthr": {
      "url": "https://smarthr.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SmartHR credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/smarthr/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `smarthr_list_employees` | read | List employees |
| `smarthr_get_employee` | read | Get an employee |
| `smarthr_list_dependents` | read | List an employee's dependents |
| `smarthr_list_maternity_childcare_leaves` | read | List an employee's maternity and childcare leaves |
| `smarthr_list_departments` | read | List departments |
| `smarthr_get_department` | read | Get a department |
| `smarthr_list_positions` | read | List positions |
| `smarthr_list_employment_types` | read | List employment types |
| `smarthr_list_grades` | read | List grades |
| `smarthr_list_job_categories` | read | List job categories |
| `smarthr_list_companies` | read | List companies |
| `smarthr_list_business_establishments` | read | List business establishments |
| `smarthr_list_employee_custom_fields` | read | List employee custom field definitions |
| `smarthr_list_dependent_relations` | read | List dependent relations |
| `smarthr_list_users` | read | List users |
| `smarthr_list_employee_input_forms` | read | List employee input forms |
| `smarthr_list_webhooks` | read | List webhooks |
| `smarthr_create_employee` | **write** | Create an employee |
| `smarthr_update_employee` | **write** | Update an employee |
| `smarthr_create_department` | **write** | Create a department |
| `smarthr_update_department` | **write** | Update a department |
| `smarthr_create_dependent` | **write** | Create a dependent |
| `smarthr_invite_employee` | **write** | Invite an employee by email |
| `smarthr_usage_status` | meta | Usage status (free-tier meter) |
| `smarthr_request_feature` | meta | Request a missing feature |
| `smarthr_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `smarthr_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per SmartHR tenant) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `smarthr_upgrade` (it returns a Stripe Checkout link). Cancel any time with `smarthr_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `smarthr_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
