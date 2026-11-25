# Nutshell MCP by usefulapi

Use your [Nutshell](https://www.nutshell.com) account from Claude, Cursor, or any MCP client. Read accounts, contacts, leads, tasks, notes and activities, and create leads, notes and tasks, update leads, or close leads. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://nutshell.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://nutshell.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http nutshell https://nutshell.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=nutshell&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fnutshell.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "nutshell": {
      "url": "https://nutshell.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Nutshell credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/nutshell/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **Nutshell user email** and a **Nutshell API key** for that user (in Nutshell under **Setup → API keys**). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `nutshell_list_accounts` | read | List accounts |
| `nutshell_get_account` | read | Get account |
| `nutshell_list_contacts` | read | List contacts |
| `nutshell_get_contact` | read | Get contact |
| `nutshell_list_leads` | read | List leads |
| `nutshell_get_lead` | read | Get lead |
| `nutshell_list_lead_outcomes` | read | List lead outcomes |
| `nutshell_list_pipelines` | read | List pipelines |
| `nutshell_list_stages` | read | List stages |
| `nutshell_list_sources` | read | List lead sources |
| `nutshell_list_tags` | read | List tags |
| `nutshell_list_users` | read | List users |
| `nutshell_get_user` | read | Get user |
| `nutshell_list_activities` | read | List activities |
| `nutshell_list_tasks` | read | List tasks |
| `nutshell_list_notes` | read | List notes |
| `nutshell_create_lead` | **write** | Create lead |
| `nutshell_create_note` | **write** | Create note |
| `nutshell_create_task` | **write** | Create task |
| `nutshell_update_lead` | **write** | Update lead |
| `nutshell_set_lead_status` | **write** | Set lead status |
| `nutshell_usage_status` | meta | Usage status (free-tier meter) |
| `nutshell_request_feature` | meta | Request a missing feature |
| `nutshell_upgrade` | meta | Upgrade to Pro or Pro+ |
| `nutshell_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `nutshell_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `nutshell_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `nutshell_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
