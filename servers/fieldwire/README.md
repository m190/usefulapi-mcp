# Fieldwire MCP by usefulapi

Use [Fieldwire](https://www.fieldwire.com) from Claude, Cursor, or any MCP client — account and users, projects, tasks with statuses, teams, locations and checklists, floorplans and sheets, attachments, forms and templates, RFIs and submittals, plus creating and updating tasks. Needs a Fieldwire account with API access (Premier, or the API add-on).
Hosted, no local install: connect with your own Fieldwire credentials.

**Live endpoint:** `https://fieldwire.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/fieldwire

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://fieldwire.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http fieldwire https://fieldwire.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=fieldwire&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffieldwire.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "fieldwire": {
      "url": "https://fieldwire.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Fieldwire credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/fieldwire/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fieldwire_get_account` | read | Get account |
| `fieldwire_list_account_users` | read | List account users |
| `fieldwire_list_projects` | read | List projects |
| `fieldwire_get_project` | read | Get project |
| `fieldwire_list_project_users` | read | List project users |
| `fieldwire_list_tasks` | read | List tasks |
| `fieldwire_get_task` | read | Get task |
| `fieldwire_list_task_statuses` | read | List task statuses |
| `fieldwire_list_teams` | read | List teams (task categories) |
| `fieldwire_list_locations` | read | List locations |
| `fieldwire_list_task_check_items` | read | List task checklist items |
| `fieldwire_list_floorplans` | read | List plans (floorplans) |
| `fieldwire_list_sheets` | read | List sheets |
| `fieldwire_list_attachments` | read | List attachments |
| `fieldwire_list_forms` | read | List forms |
| `fieldwire_get_form` | read | Get form |
| `fieldwire_get_form_full` | read | Get form with all values |
| `fieldwire_list_form_templates` | read | List form templates |
| `fieldwire_list_rfis` | read | List RFIs |
| `fieldwire_list_submittals` | read | List submittals |
| `fieldwire_create_task` | **write** | Create task |
| `fieldwire_update_task` | **write** | Update task |
| `fieldwire_usage_status` | meta | Usage status (free-tier meter) |
| `fieldwire_request_feature` | meta | Request a missing feature |
| `fieldwire_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `fieldwire_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `fieldwire_upgrade` (it returns a Stripe Checkout link). Cancel any time with `fieldwire_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `fieldwire_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Fieldwire.
