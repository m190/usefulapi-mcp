# Sesame HR MCP by usefulapi

Use your [Sesame HR](https://www.sesamehr.com) account from Claude, Cursor, or any MCP client. Read employees, departments, time entries, absences, vacations and shifts; it cannot change data. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://sesame-hr.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sesame-hr.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sesame-hr https://sesame-hr.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sesame-hr&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsesame-hr.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sesame-hr": {
      "url": "https://sesame-hr.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Sesame HR credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sesame-hr/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Sesame HR API token** (Settings → Integrations → API in Sesame HR) and its **data region** (default eu1). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sesame_token_info` | read | Show token info |
| `sesame_list_employees` | read | List employees |
| `sesame_get_employee` | read | Get an employee |
| `sesame_list_departments` | read | List departments |
| `sesame_list_offices` | read | List offices |
| `sesame_list_locations` | read | List locations |
| `sesame_list_roles` | read | List roles |
| `sesame_list_entity_groups` | read | List entity groups |
| `sesame_list_custom_fields` | read | List custom fields |
| `sesame_list_job_charges` | read | List job charges |
| `sesame_list_work_entries` | read | List work entries |
| `sesame_list_check_incidences` | read | List check incidences |
| `sesame_list_worked_hours` | read | Worked hours report |
| `sesame_list_absence_requests` | read | List absence requests |
| `sesame_list_vacation_requests` | read | List vacation requests |
| `sesame_list_vacation_calendars` | read | List vacation calendars |
| `sesame_list_shifts` | read | List shifts |
| `sesame_list_shift_assignments` | read | List shift assignments |
| `sesame_usage_status` | meta | Usage status (free-tier meter) |
| `sesame_request_feature` | meta | Request a missing feature |
| `sesame_upgrade` | meta | Upgrade to Pro or Pro+ |
| `sesame_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `sesame_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `sesame_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `sesame_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
