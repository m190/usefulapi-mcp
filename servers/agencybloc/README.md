# AgencyBloc MCP by usefulapi

Read and update AgencyBloc individuals, groups, policies and agents; log activities and notes.

**Live endpoint:** `https://agencybloc.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/agencybloc

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://agencybloc.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http agencybloc https://agencybloc.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=agencybloc&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fagencybloc.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "agencybloc": {
      "url": "https://agencybloc.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your AgencyBloc credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/agencybloc/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your AgencyBloc **API SID** and **API key** (from AgencyBloc support; the API add-on must be active).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `agencybloc_search_individuals` | read | Search individuals |
| `agencybloc_get_individual` | read | Get individual |
| `agencybloc_search_groups` | read | Search groups |
| `agencybloc_get_group` | read | Get group |
| `agencybloc_search_policies` | read | Search policies |
| `agencybloc_get_policy` | read | Get policy |
| `agencybloc_search_agents` | read | Search agents |
| `agencybloc_get_agent` | read | Get agent |
| `agencybloc_search_carriers` | read | Search carriers |
| `agencybloc_list_activities` | read | List activities of a record |
| `agencybloc_get_activities` | read | Get activities by id |
| `agencybloc_list_notes` | read | List notes of a record |
| `agencybloc_search_leads_by_phone` | read | Search sales records (leads) by phone |
| `agencybloc_get_lead` | read | Get sales record (lead) |
| `agencybloc_create_individual` | **write** | Create individual |
| `agencybloc_update_individual` | **write** | Update individual |
| `agencybloc_create_group` | **write** | Create group |
| `agencybloc_update_group` | **write** | Update group |
| `agencybloc_create_policy` | **write** | Create policy |
| `agencybloc_update_policy` | **write** | Update policy |
| `agencybloc_create_activity` | **write** | Create activity |
| `agencybloc_create_note` | **write** | Add note |
| `agencybloc_usage_status` | meta | Usage status (free-tier meter) |
| `agencybloc_request_feature` | meta | Request a missing feature |
| `agencybloc_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `agencybloc_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `agencybloc_upgrade` (it returns a Stripe Checkout link). Cancel any time with `agencybloc_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `agencybloc_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by AgencyBloc.
