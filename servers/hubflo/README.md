# Hubflo MCP by usefulapi

Use your [Hubflo](https://www.hubflo.com) account from Claude, Cursor, or any MCP client. Read contacts, companies, projects, tasks, invoices, flows, forms and chat, and create or update contacts, tasks and notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://hubflo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://hubflo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http hubflo https://hubflo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=hubflo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhubflo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "hubflo": {
      "url": "https://hubflo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Hubflo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/hubflo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Hubflo API key**, generated in Hubflo under Organizations → Integrations → Generate key. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `hubflo_list_contacts` | read | List contacts |
| `hubflo_get_contact` | read | Get a contact |
| `hubflo_create_contact` | **write** | Create a contact |
| `hubflo_update_contact` | **write** | Update a contact |
| `hubflo_list_companies` | read | List companies |
| `hubflo_get_company` | read | Get a company |
| `hubflo_list_projects` | read | List projects |
| `hubflo_get_project` | read | Get a project |
| `hubflo_list_tasks` | read | List tasks |
| `hubflo_get_task` | read | Get a task |
| `hubflo_create_task` | **write** | Create a task |
| `hubflo_update_task` | **write** | Update a task |
| `hubflo_list_invoices` | read | List invoices |
| `hubflo_get_invoice` | read | Get an invoice |
| `hubflo_list_flows` | read | List flows |
| `hubflo_get_flow` | read | Get a flow |
| `hubflo_list_notes` | read | List notes |
| `hubflo_create_note` | **write** | Create a note |
| `hubflo_update_note` | **write** | Update a note |
| `hubflo_list_chat_rooms` | read | List chat rooms |
| `hubflo_list_chat_messages` | read | List chat messages |
| `hubflo_list_forms` | read | List forms |
| `hubflo_list_form_submissions` | read | List form submissions |
| `hubflo_list_members` | read | List members |
| `hubflo_list_tags` | read | List tags |
| `hubflo_usage_status` | meta | Usage status (free-tier meter) |
| `hubflo_request_feature` | meta | Request a missing feature |
| `hubflo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `hubflo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `hubflo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `hubflo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `hubflo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
