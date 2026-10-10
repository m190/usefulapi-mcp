# Pipeline CRM MCP by usefulapi

Use [Pipeline CRM](https://pipelinecrm.com) from Claude, Cursor, or any MCP client — deals, people, companies, notes, calendar entries, stages and pipelines.
Hosted, no local install: connect with your own Pipeline CRM credentials.

**Live endpoint:** `https://pipeline-crm.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/pipeline-crm

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://pipeline-crm.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http pipeline-crm https://pipeline-crm.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=pipeline-crm&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpipeline-crm.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "pipeline-crm": {
      "url": "https://pipeline-crm.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Pipeline CRM credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/pipeline-crm/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `pipelinecrm_get_profile` | read | Get my profile |
| `pipelinecrm_list_users` | read | List users |
| `pipelinecrm_get_user` | read | Get user |
| `pipelinecrm_list_deals` | read | List deals |
| `pipelinecrm_get_deal` | read | Get deal |
| `pipelinecrm_deal_totals_by_stage` | read | Deal totals by stage |
| `pipelinecrm_list_deal_notes` | read | List notes on a deal |
| `pipelinecrm_create_deal` | **write** | Create deal |
| `pipelinecrm_update_deal` | **write** | Update deal |
| `pipelinecrm_list_people` | read | List people (leads and contacts) |
| `pipelinecrm_get_person` | read | Get person |
| `pipelinecrm_list_person_deals` | read | List deals of a person |
| `pipelinecrm_list_person_notes` | read | List notes on a person |
| `pipelinecrm_create_person` | **write** | Create person |
| `pipelinecrm_update_person` | **write** | Update person |
| `pipelinecrm_list_companies` | read | List companies |
| `pipelinecrm_get_company` | read | Get company |
| `pipelinecrm_list_company_people` | read | List people at a company |
| `pipelinecrm_create_company` | **write** | Create company |
| `pipelinecrm_update_company` | **write** | Update company |
| `pipelinecrm_list_notes` | read | List notes |
| `pipelinecrm_get_note` | read | Get note |
| `pipelinecrm_add_note` | **write** | Add note |
| `pipelinecrm_list_calendar_entries` | read | List tasks and events |
| `pipelinecrm_get_calendar_entry` | read | Get task or event |
| `pipelinecrm_create_calendar_entry` | **write** | Create task or event |
| `pipelinecrm_update_calendar_entry` | **write** | Update task or event |
| `pipelinecrm_list_deal_stages` | read | List deal stages |
| `pipelinecrm_list_deal_pipelines` | read | List deal pipelines |
| `pipelinecrm_list_lookup` | read | List lookup values |
| `pipelinecrm_usage_status` | meta | Usage status (free-tier meter) |
| `pipelinecrm_request_feature` | meta | Request a missing feature |
| `pipelinecrm_upgrade` | meta | Upgrade to Pro (unlimited) |
| `pipelinecrm_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `pipelinecrm_upgrade` (it returns a Stripe Checkout link). Cancel any time with `pipelinecrm_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `pipelinecrm_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Pipeline CRM.
