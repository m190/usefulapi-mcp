# Weekdone MCP by usefulapi

Use your [Weekdone](https://weekdone.com) account from Claude, Cursor, or any MCP client. Read weekly reports, teams, objectives and KPIs, and add report items, comments and KPI values. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://weekdone.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://weekdone.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http weekdone https://weekdone.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=weekdone&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fweekdone.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "weekdone": {
      "url": "https://weekdone.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your Weekdone account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/weekdone/

<!-- connect:end (generated above, edit below) -->

On first connect you sign in to Weekdone and approve access. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `weekdone_get_company` | read | Get company settings |
| `weekdone_list_teams` | read | List teams |
| `weekdone_list_users` | read | List users |
| `weekdone_list_types` | read | List item types |
| `weekdone_search_items` | read | Search items |
| `weekdone_get_item_comments` | read | Get item comments |
| `weekdone_get_report` | read | Get weekly report |
| `weekdone_list_tags` | read | List tags |
| `weekdone_list_objectives` | read | List objectives |
| `weekdone_list_kpis` | read | List KPIs |
| `weekdone_create_item` | **write** | Create item |
| `weekdone_update_item` | **write** | Update item |
| `weekdone_assign_item` | **write** | Assign item |
| `weekdone_add_item_comment` | **write** | Add item comment |
| `weekdone_update_kpi_progress` | **write** | Update KPI value |
| `weekdone_usage_status` | meta | Usage status (free-tier meter) |
| `weekdone_request_feature` | meta | Request a missing feature |
| `weekdone_upgrade` | meta | Upgrade to Pro or Pro+ |
| `weekdone_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `weekdone_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `weekdone_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `weekdone_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
