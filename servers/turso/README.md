# Turso MCP by usefulapi

Use your [Turso](https://turso.tech) account from Claude, Cursor, or any MCP client. Read organizations, databases and usage, run read-only SQL, and create databases and database tokens. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://turso.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://turso.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http turso https://turso.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=turso&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fturso.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "turso": {
      "url": "https://turso.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Turso credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/turso/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **organization slug** (the name in the dashboard URL) and an **organization API token** (minted with turso auth api-tokens mint, or in the Turso dashboard).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `turso_get_current_user` | read | Get the current user |
| `turso_get_organization` | read | Get the organization |
| `turso_get_organization_subscription` | read | Get the subscription |
| `turso_get_organization_usage` | read | Get organization usage |
| `turso_list_organization_members` | read | List organization members |
| `turso_list_locations` | read | List locations |
| `turso_list_groups` | read | List groups |
| `turso_get_group` | read | Get a group |
| `turso_list_databases` | read | List databases |
| `turso_get_database` | read | Get a database |
| `turso_get_database_configuration` | read | Get database configuration |
| `turso_list_database_instances` | read | List database instances |
| `turso_get_database_usage` | read | Get database usage |
| `turso_query_database` | read | Run a read-only SQL query |
| `turso_create_database` | **write** | Create a database |
| `turso_create_database_token` | **write** | Create a database token |
| `turso_usage_status` | meta | Usage status (free-tier meter) |
| `turso_request_feature` | meta | Request a missing feature |
| `turso_upgrade` | meta | Upgrade to Pro or Pro+ |
| `turso_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `turso_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `turso_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `turso_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
