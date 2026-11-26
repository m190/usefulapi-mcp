# Hive MCP by usefulapi

Use your [Hive](https://hive.com) account from Claude, Cursor, or any MCP client. Read projects, labels, tables and actions, search actions, and create or update actions and add comments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://hive.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://hive.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http hive https://hive.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=hive&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhive.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "hive": {
      "url": "https://hive.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Hive credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/hive/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Hive API key** (My profile → API info). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `hive_list_workspaces` | read | List workspaces |
| `hive_list_projects` | read | List projects |
| `hive_get_project` | read | Get a project |
| `hive_list_workspace_users` | read | List workspace members |
| `hive_list_teams` | read | List teams |
| `hive_list_labels` | read | List labels |
| `hive_list_agile_sprints` | read | List agile sprints |
| `hive_list_actions` | read | List actions |
| `hive_search_actions` | read | Search actions |
| `hive_get_action` | read | Get an action |
| `hive_list_subactions` | read | List subactions |
| `hive_list_action_comments` | read | List action comments |
| `hive_list_tables` | read | List tables |
| `hive_list_table_records` | read | List table records |
| `hive_create_action` | **write** | Create an action |
| `hive_update_action` | **write** | Update an action |
| `hive_create_action_comment` | **write** | Comment on an action |
| `hive_usage_status` | meta | Usage status (free-tier meter) |
| `hive_request_feature` | meta | Request a missing feature |
| `hive_upgrade` | meta | Upgrade to Pro or Pro+ |
| `hive_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `hive_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `hive_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `hive_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
