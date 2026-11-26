# Capsule CRM MCP by usefulapi

Use your [Capsule CRM](https://capsulecrm.com) account from Claude, Cursor, or any MCP client. Search and read parties, deals, pipelines and tasks, and create parties, deals, tasks and notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://capsule-crm.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://capsule-crm.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http capsule-crm https://capsule-crm.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=capsule-crm&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcapsule-crm.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "capsule-crm": {
      "url": "https://capsule-crm.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Capsule CRM credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/capsule-crm/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Capsule personal API token** (My Preferences → API Authentication Tokens). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `capsule_get_current_user` | read | Get the current user |
| `capsule_list_users` | read | List users |
| `capsule_list_parties` | read | List parties |
| `capsule_search_parties` | read | Search parties |
| `capsule_get_party` | read | Get a party |
| `capsule_list_party_notes` | read | List notes for a party |
| `capsule_list_opportunities` | read | List opportunities |
| `capsule_search_opportunities` | read | Search opportunities |
| `capsule_get_opportunity` | read | Get an opportunity |
| `capsule_list_pipelines` | read | List pipelines |
| `capsule_list_milestones` | read | List milestones of a pipeline |
| `capsule_list_projects` | read | List projects |
| `capsule_list_tasks` | read | List tasks |
| `capsule_create_party` | **write** | Create a party |
| `capsule_create_opportunity` | **write** | Create an opportunity |
| `capsule_create_task` | **write** | Create a task |
| `capsule_add_party_note` | **write** | Add a note to a party |
| `capsule_usage_status` | meta | Usage status (free-tier meter) |
| `capsule_request_feature` | meta | Request a missing feature |
| `capsule_upgrade` | meta | Upgrade to Pro or Pro+ |
| `capsule_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `capsule_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `capsule_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `capsule_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
