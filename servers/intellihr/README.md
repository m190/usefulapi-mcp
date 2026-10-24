# intelliHR MCP by usefulapi

Read intelliHR people, jobs, leave, skills and training; create and update people records.

**Live endpoint:** `https://intellihr.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/intellihr

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://intellihr.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http intellihr https://intellihr.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=intellihr&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fintellihr.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "intellihr": {
      "url": "https://intellihr.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your intelliHR credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/intellihr/

<!-- connect:end (generated above, edit below) -->

On first connect you'll enter your intelliHR **tenant name** (acme for acme.intellihr.io) and a **Public API access key** (Settings → Public API Access Keys).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `intellihr_list_people` | read | List people |
| `intellihr_get_person` | read | Get person |
| `intellihr_list_person_documents` | read | List a person's documents |
| `intellihr_list_person_skills` | read | List a person's skills |
| `intellihr_list_person_tasks` | read | List a person's tasks |
| `intellihr_list_jobs` | read | List jobs |
| `intellihr_get_job` | read | Get job |
| `intellihr_get_job_timeline` | read | Get job timeline |
| `intellihr_list_locations` | read | List locations |
| `intellihr_list_business_units` | read | List business units |
| `intellihr_list_business_entities` | read | List business entities |
| `intellihr_list_position_titles` | read | List position titles |
| `intellihr_list_pay_grades` | read | List pay grades |
| `intellihr_list_users` | read | List users |
| `intellihr_list_custom_field_definitions` | read | List custom field definitions |
| `intellihr_list_reference_data` | read | List reference data |
| `intellihr_list_skills` | read | List skills |
| `intellihr_list_qualifications` | read | List qualifications |
| `intellihr_list_trainings` | read | List trainings |
| `intellihr_create_person` | **write** | Create person |
| `intellihr_update_person` | **write** | Update person |
| `intellihr_create_extended_leave` | **write** | Create extended leave |
| `intellihr_usage_status` | meta | Usage status (free-tier meter) |
| `intellihr_request_feature` | meta | Request a missing feature |
| `intellihr_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `intellihr_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `intellihr_upgrade` (it returns a Stripe Checkout link). Cancel any time with `intellihr_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `intellihr_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by intelliHR.
