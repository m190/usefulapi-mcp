# Quickbase MCP by usefulapi

Use your [Quickbase](https://www.quickbase.com) account from Claude, Cursor, or any MCP client. Query records, run reports and formulas, and insert or update records. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://quickbase.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://quickbase.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http quickbase https://quickbase.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=quickbase&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fquickbase.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "quickbase": {
      "url": "https://quickbase.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Quickbase credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/quickbase/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Quickbase realm** (the part before .quickbase.com) and a **Quickbase user token**, which you create in your Quickbase user settings. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `quickbase_get_app` | read | Get an app |
| `quickbase_get_app_roles` | read | Get app roles |
| `quickbase_list_tables` | read | List tables |
| `quickbase_get_table` | read | Get a table |
| `quickbase_list_table_relationships` | read | List table relationships |
| `quickbase_list_fields` | read | List fields |
| `quickbase_get_field` | read | Get a field |
| `quickbase_list_reports` | read | List reports |
| `quickbase_get_report` | read | Get a report |
| `quickbase_run_report` | read | Run a report |
| `quickbase_query_records` | read | Query records |
| `quickbase_run_formula` | read | Run a formula |
| `quickbase_get_users` | read | Get users |
| `quickbase_upsert_records` | **write** | Insert or update records |
| `quickbase_usage_status` | meta | Usage status (free-tier meter) |
| `quickbase_request_feature` | meta | Request a missing feature |
| `quickbase_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `quickbase_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `quickbase_upgrade` (it returns a Stripe Checkout link). Cancel any time with `quickbase_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `quickbase_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
