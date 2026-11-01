# webCRM MCP by usefulapi

Use your [webCRM](https://www.webcrm.com) account from Claude, Cursor, or any MCP client. Searches and reads persons, organisations, opportunities, activities and support cases, and creates activities and notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://webcrm.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://webcrm.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http webcrm https://webcrm.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=webcrm&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwebcrm.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "webcrm": {
      "url": "https://webcrm.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your webCRM credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/webcrm/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **webCRM application token** (a GUID; created under Configuration → Integration → API → REST). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `webcrm_search_persons` | read | Search persons |
| `webcrm_list_persons` | read | List persons |
| `webcrm_get_person` | read | Get person |
| `webcrm_list_organisations` | read | List organisations |
| `webcrm_get_organisation` | read | Get organisation |
| `webcrm_list_opportunities` | read | List opportunities |
| `webcrm_get_opportunity` | read | Get opportunity |
| `webcrm_list_opportunities_by_pipeline_level` | read | List opportunities by pipeline level |
| `webcrm_list_activities` | read | List activities |
| `webcrm_get_activity` | read | Get activity |
| `webcrm_list_activity_notes` | read | List activity notes |
| `webcrm_create_activity` | **write** | Create activity |
| `webcrm_add_activity_note` | **write** | Add activity note |
| `webcrm_list_events` | read | List events |
| `webcrm_list_meetings` | read | List meetings |
| `webcrm_list_support_cases` | read | List support cases |
| `webcrm_get_support_case` | read | Get support case |
| `webcrm_list_users` | read | List users |
| `webcrm_list_pipelines` | read | List pipelines |
| `webcrm_list_products` | read | List products |
| `webcrm_get_field_metadata` | read | Get field metadata |
| `webcrm_usage_status` | meta | Usage status (free-tier meter) |
| `webcrm_request_feature` | meta | Request a missing feature |
| `webcrm_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `webcrm_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `webcrm_upgrade` (it returns a Stripe Checkout link). Cancel any time with `webcrm_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `webcrm_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
