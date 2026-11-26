# PlanetScale MCP by usefulapi

Use your [PlanetScale](https://planetscale.com) account from Claude, Cursor, or any MCP client. Read databases, branches, schemas and deploy requests, and create branches and deploy requests. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://planetscale.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://planetscale.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http planetscale https://planetscale.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=planetscale&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fplanetscale.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "planetscale": {
      "url": "https://planetscale.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your PlanetScale credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/planetscale/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **PlanetScale service token** (pscale_tkn_…) from PlanetScale → Settings → Service tokens. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `planetscale_list_organizations` | read | List organizations |
| `planetscale_get_organization` | read | Get an organization |
| `planetscale_list_public_regions` | read | List public regions |
| `planetscale_list_databases` | read | List databases |
| `planetscale_get_database` | read | Get a database |
| `planetscale_list_branches` | read | List branches |
| `planetscale_get_branch` | read | Get a branch |
| `planetscale_get_branch_schema` | read | Get a branch schema |
| `planetscale_list_branch_backups` | read | List branch backups |
| `planetscale_list_deploy_requests` | read | List deploy requests |
| `planetscale_get_deploy_request` | read | Get a deploy request |
| `planetscale_create_branch` | **write** | Create a branch |
| `planetscale_create_deploy_request` | **write** | Create a deploy request |
| `planetscale_usage_status` | meta | Usage status (free-tier meter) |
| `planetscale_request_feature` | meta | Request a missing feature |
| `planetscale_upgrade` | meta | Upgrade to Pro or Pro+ |
| `planetscale_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `planetscale_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `planetscale_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `planetscale_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
