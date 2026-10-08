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
| `folk_upgrade` | meta | Upgrade to Pro (unlimited) |
| `folk_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `folk_upgrade` (it returns a Stripe Checkout link). Cancel any time with `folk_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `folk_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
