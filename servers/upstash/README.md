# Upstash MCP by usefulapi

Use your [Upstash](https://upstash.com) account from Claude, Cursor, or any MCP client. Read Redis databases, usage, traffic and backups, and rename databases or manage their backups. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://upstash.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://upstash.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http upstash https://upstash.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=upstash&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fupstash.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "upstash": {
      "url": "https://upstash.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Upstash credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/upstash/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **account email** and a **Developer API key** (Account → Developer API in the Upstash console).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `upstash_list_databases` | read | List Redis databases |
| `upstash_get_database` | read | Get a Redis database |
| `upstash_get_database_stats` | read | Get database stats |
| `upstash_get_database_traffic` | read | Get database traffic |
| `upstash_list_backups` | read | List database backups |
| `upstash_list_teams` | read | List teams |
| `upstash_list_team_members` | read | List team members |
| `upstash_rename_database` | **write** | Rename a Redis database |
| `upstash_create_backup` | **write** | Create a database backup |
| `upstash_enable_daily_backup` | **write** | Enable daily backups |
| `upstash_disable_daily_backup` | **write** | Disable daily backups |
| `upstash_usage_status` | meta | Usage status (free-tier meter) |
| `upstash_request_feature` | meta | Request a missing feature |
| `upstash_upgrade` | meta | Upgrade to Pro or Pro+ |
| `upstash_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `upstash_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `upstash_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `upstash_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
