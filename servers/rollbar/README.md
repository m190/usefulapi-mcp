# Rollbar MCP by usefulapi

Use your [Rollbar](https://rollbar.com) account from Claude, Cursor, or any MCP client. Read error items, occurrences, deploys and item history, and update item status. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://rollbar.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://rollbar.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http rollbar https://rollbar.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=rollbar&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frollbar.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "rollbar": {
      "url": "https://rollbar.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Rollbar credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/rollbar/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Rollbar access token** (Project Settings → Project Access Tokens) and, for an account token only, a **project ID**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `rollbar_list_projects` | read | List projects |
| `rollbar_get_project` | read | Get a project |
| `rollbar_list_environments` | read | List environments |
| `rollbar_list_items` | read | List items |
| `rollbar_get_item` | read | Get an item |
| `rollbar_find_item` | read | Find an item by counter or UUID |
| `rollbar_list_item_occurrences` | read | List occurrences of an item |
| `rollbar_list_item_events` | read | List history of an item |
| `rollbar_list_deploys` | read | List deploys |
| `rollbar_get_deploy` | read | Get a deploy |
| `rollbar_top_active_items` | read | Top active items |
| `rollbar_occurrence_counts` | read | Occurrence counts over time |
| `rollbar_list_teams` | read | List teams |
| `rollbar_list_users` | read | List users |
| `rollbar_update_item` | **write** | Update an item |
| `rollbar_usage_status` | meta | Usage status (free-tier meter) |
| `rollbar_request_feature` | meta | Request a missing feature |
| `rollbar_upgrade` | meta | Upgrade to Pro or Pro+ |
| `rollbar_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `rollbar_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `rollbar_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `rollbar_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
