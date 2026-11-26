# Moxie MCP by usefulapi

Use your [Moxie](https://www.withmoxie.com) account from Claude, Cursor, or any MCP client. Read clients, contacts, projects, time entries and open invoices, and create clients, project notes, expenses and opportunities. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://moxie.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://moxie.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http moxie https://moxie.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=moxie&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmoxie.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "moxie": {
      "url": "https://moxie.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Moxie credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/moxie/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Moxie workspace API key** (Settings → Apps, Automation → Custom API → Enable) and your **Moxie pod** (pod01 unless your base URL shows another). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `moxie_list_clients` | read | List clients |
| `moxie_search_clients` | read | Search clients |
| `moxie_create_client` | **write** | Create a client |
| `moxie_update_client` | **write** | Update a client |
| `moxie_search_contacts` | read | Search contacts |
| `moxie_search_projects` | read | Search projects |
| `moxie_list_project_notes` | read | List project notes |
| `moxie_create_project_note` | **write** | Create a project note |
| `moxie_update_project_note` | **write** | Update a project note |
| `moxie_list_time_entries` | read | List time entries |
| `moxie_list_open_invoices` | read | List open invoices |
| `moxie_create_expense` | **write** | Create an expense |
| `moxie_search_opportunities` | read | Search opportunities |
| `moxie_create_opportunity` | **write** | Create an opportunity |
| `moxie_search_agreements` | read | Search agreements |
| `moxie_get_account` | read | Get the workspace account |
| `moxie_usage_status` | meta | Usage status (free-tier meter) |
| `moxie_request_feature` | meta | Request a missing feature |
| `moxie_upgrade` | meta | Upgrade to Pro or Pro+ |
| `moxie_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `moxie_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `moxie_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `moxie_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
