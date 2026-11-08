# Folk MCP by usefulapi

Read and write Folk CRM people, companies, groups and notes. Hosted, no local install.

**Live endpoint:** `https://folk.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://folk.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http folk https://folk.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=folk&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffolk.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "folk": {
      "url": "https://folk.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Folk credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/folk/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Folk credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `folk_get_current_user` | read | Get current user |
| `folk_list_users` | read | List users |
| `folk_list_people` | read | List people |
| `folk_get_person` | read | Get person |
| `folk_list_companies` | read | List companies |
| `folk_get_company` | read | Get company |
| `folk_list_groups` | read | List groups |
| `folk_list_notes` | read | List notes |
| `folk_get_note` | read | Get note |
| `folk_create_person` | **write** | Create person |
| `folk_update_person` | **write** | Update person |
| `folk_create_company` | **write** | Create company |
| `folk_update_company` | **write** | Update company |
| `folk_create_note` | **write** | Create note |
| `folk_usage_status` | meta | Usage status (free-tier meter) |
| `folk_request_feature` | meta | Request a missing feature |
| `folk_upgrade` | meta | Upgrade to Pro or Pro+ |
| `folk_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `folk_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `folk_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `folk_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
