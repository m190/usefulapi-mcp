# Copper MCP by usefulapi

Read and write Copper CRM people, companies, opportunities and activities. Hosted, no local install.

**Live endpoint:** `https://copper.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://copper.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http copper https://copper.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=copper&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcopper.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "copper": {
      "url": "https://copper.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Copper credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/copper/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Copper credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `copper_get_account` | read | Get account |
| `copper_list_users` | read | List users |
| `copper_search_people` | read | Search people |
| `copper_get_person` | read | Get person |
| `copper_search_companies` | read | Search companies |
| `copper_get_company` | read | Get company |
| `copper_search_opportunities` | read | Search opportunities |
| `copper_get_opportunity` | read | Get opportunity |
| `copper_search_leads` | read | Search leads |
| `copper_get_lead` | read | Get lead |
| `copper_search_tasks` | read | Search tasks |
| `copper_get_task` | read | Get task |
| `copper_list_activities` | read | List activities |
| `copper_list_activity_types` | read | List activity types |
| `copper_list_pipelines` | read | List pipelines |
| `copper_create_person` | **write** | Create person |
| `copper_update_person` | **write** | Update person |
| `copper_create_company` | **write** | Create company |
| `copper_create_opportunity` | **write** | Create opportunity |
| `copper_create_lead` | **write** | Create lead |
| `copper_create_task` | **write** | Create task |
| `copper_log_activity` | **write** | Log activity |
| `copper_usage_status` | meta | Usage status (free-tier meter) |
| `copper_request_feature` | meta | Request a missing feature |
| `copper_upgrade` | meta | Upgrade to Pro (unlimited) |
| `copper_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `copper_upgrade` (it returns a Stripe Checkout link). Cancel any time with `copper_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `copper_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
