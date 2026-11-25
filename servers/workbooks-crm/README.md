# Workbooks MCP by usefulapi

Use your [Workbooks](https://www.workbooks.com) account from Claude, Cursor, or any MCP client. Search CRM people, organisations, tasks and activities, read records by id, and list record types and custom fields, with no write access. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://workbooks-crm.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://workbooks-crm.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http workbooks-crm https://workbooks-crm.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=workbooks-crm&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fworkbooks-crm.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "workbooks-crm": {
      "url": "https://workbooks-crm.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Workbooks credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/workbooks-crm/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Workbooks API key**, created in the Workbooks Desktop under API Keys. One key works for one database. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `workbooks_search_people` | read | Search people |
| `workbooks_search_organisations` | read | Search organisations |
| `workbooks_search_tasks` | read | Search tasks |
| `workbooks_search_activities` | read | Search activities |
| `workbooks_get_person` | read | Get person |
| `workbooks_get_organisation` | read | Get organisation |
| `workbooks_list_record_types` | read | List record types |
| `workbooks_usage_status` | meta | Usage status (free-tier meter) |
| `workbooks_request_feature` | meta | Request a missing feature |
| `workbooks_upgrade` | meta | Upgrade to Pro or Pro+ |
| `workbooks_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `workbooks_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `workbooks_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `workbooks_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
