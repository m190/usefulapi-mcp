# Close MCP by usefulapi

Use your [Close](https://close.com) account from Claude, Cursor, or any MCP client. Search leads, read activity and deals, and create or update leads, tasks and deals. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://close.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://close.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http close https://close.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=close&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fclose.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "close": {
      "url": "https://close.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Close credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/close/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Close API key** (Close → Settings → Developer → API Keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `close_whoami` | read | Show the connected user |
| `close_list_users` | read | List users |
| `close_list_lead_statuses` | read | List lead statuses |
| `close_list_opportunity_statuses` | read | List opportunity statuses |
| `close_list_pipelines` | read | List pipelines |
| `close_list_leads` | read | List leads |
| `close_get_lead` | read | Get a lead |
| `close_search_leads` | read | Search leads by name |
| `close_list_contacts` | read | List contacts |
| `close_list_opportunities` | read | List opportunities |
| `close_list_activities` | read | List activities on a lead |
| `close_list_tasks` | read | List tasks |
| `close_create_lead` | **write** | Create a lead |
| `close_update_lead` | **write** | Update a lead |
| `close_create_contact` | **write** | Create a contact |
| `close_create_note` | **write** | Add a note to a lead |
| `close_create_task` | **write** | Create a task |
| `close_update_task` | **write** | Complete or reassign a task |
| `close_create_opportunity` | **write** | Create an opportunity |
| `close_update_opportunity` | **write** | Update an opportunity |
| `close_usage_status` | meta | Usage status (free-tier meter) |
| `close_request_feature` | meta | Request a missing feature |
| `close_upgrade` | meta | Upgrade to Pro or Pro+ |
| `close_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `close_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `close_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `close_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
