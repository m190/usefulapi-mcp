# Salesflare MCP by usefulapi

Use your [Salesflare](https://salesflare.com) account from Claude, Cursor, or any MCP client. Read accounts, contacts, deals, tasks and pipelines, and create or update accounts, contacts, deals and tasks. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://salesflare.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://salesflare.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http salesflare https://salesflare.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=salesflare&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsalesflare.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "salesflare": {
      "url": "https://salesflare.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Salesflare credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/salesflare/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Salesflare API key** (Settings → API keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `salesflare_get_me` | read | Get my user and team |
| `salesflare_list_users` | read | List users |
| `salesflare_list_groups` | read | List groups |
| `salesflare_list_pipelines` | read | List pipelines |
| `salesflare_list_stages` | read | List stages |
| `salesflare_list_tags` | read | List tags |
| `salesflare_list_accounts` | read | List accounts |
| `salesflare_get_account` | read | Get an account |
| `salesflare_list_contacts` | read | List contacts |
| `salesflare_get_contact` | read | Get a contact |
| `salesflare_list_opportunities` | read | List opportunities |
| `salesflare_get_opportunity` | read | Get an opportunity |
| `salesflare_list_tasks` | read | List tasks |
| `salesflare_create_account` | **write** | Create an account |
| `salesflare_update_account` | **write** | Update an account |
| `salesflare_create_contact` | **write** | Create a contact |
| `salesflare_update_contact` | **write** | Update a contact |
| `salesflare_create_opportunity` | **write** | Create an opportunity |
| `salesflare_update_opportunity` | **write** | Update an opportunity |
| `salesflare_create_task` | **write** | Create a task |
| `salesflare_update_task` | **write** | Update a task |
| `salesflare_usage_status` | meta | Usage status (free-tier meter) |
| `salesflare_request_feature` | meta | Request a missing feature |
| `salesflare_upgrade` | meta | Upgrade to Pro or Pro+ |
| `salesflare_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `salesflare_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `salesflare_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `salesflare_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
