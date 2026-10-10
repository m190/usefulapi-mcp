# Teamgate MCP by usefulapi

Use [Teamgate](https://www.teamgate.com) from Claude, Cursor, or any MCP client — leads, people, companies, deals, pipelines, activities and notes.
Hosted, no local install: connect with your own Teamgate credentials.

**Live endpoint:** `https://teamgate.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/teamgate

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://teamgate.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http teamgate https://teamgate.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=teamgate&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fteamgate.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "teamgate": {
      "url": "https://teamgate.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Teamgate credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/teamgate/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `teamgate_list_users` | read | List users |
| `teamgate_get_user` | read | Get user |
| `teamgate_list_leads` | read | List leads |
| `teamgate_get_lead` | read | Get lead |
| `teamgate_list_lead_statuses` | read | List lead statuses |
| `teamgate_list_people` | read | List people |
| `teamgate_get_person` | read | Get person |
| `teamgate_list_companies` | read | List companies |
| `teamgate_get_company` | read | Get company |
| `teamgate_list_company_people` | read | List people of a company |
| `teamgate_list_deals` | read | List deals |
| `teamgate_get_deal` | read | Get deal |
| `teamgate_list_deal_stages` | read | List stages of a deal |
| `teamgate_list_contact_deals` | read | List deals of a person or company |
| `teamgate_list_pipelines` | read | List pipelines |
| `teamgate_get_pipeline` | read | Get pipeline |
| `teamgate_list_activities` | read | List activities |
| `teamgate_list_record_activities` | read | List activities of a record |
| `teamgate_get_activity` | read | Get activity |
| `teamgate_search` | read | Search records |
| `teamgate_list_sources` | read | List sources |
| `teamgate_list_industries` | read | List industries |
| `teamgate_list_products` | read | List products |
| `teamgate_list_custom_fields` | read | List custom fields |
| `teamgate_create_lead` | **write** | Create lead |
| `teamgate_update_lead` | **write** | Update lead |
| `teamgate_create_person` | **write** | Create person |
| `teamgate_update_person` | **write** | Update person |
| `teamgate_create_company` | **write** | Create company |
| `teamgate_update_company` | **write** | Update company |
| `teamgate_create_deal` | **write** | Create deal |
| `teamgate_update_deal` | **write** | Update deal |
| `teamgate_create_activity` | **write** | Create activity |
| `teamgate_add_note` | **write** | Add note |
| `teamgate_usage_status` | meta | Usage status (free-tier meter) |
| `teamgate_request_feature` | meta | Request a missing feature |
| `teamgate_upgrade` | meta | Upgrade to Pro (unlimited) |
| `teamgate_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `teamgate_upgrade` (it returns a Stripe Checkout link). Cancel any time with `teamgate_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `teamgate_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Teamgate.
