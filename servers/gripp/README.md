# Gripp MCP by usefulapi

Use your [Gripp](https://www.gripp.com) account from Claude, Cursor, or any MCP client. Read companies, contacts, projects, tasks, hours, invoices, offers and employees, register hours, and create tasks and contacts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://gripp.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://gripp.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http gripp https://gripp.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=gripp&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgripp.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "gripp": {
      "url": "https://gripp.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Gripp credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/gripp/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Gripp API key** (Gripp → Settings → API keys; you must be an application administrator). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `gripp_list_companies` | read | List companies |
| `gripp_list_contacts` | read | List contacts |
| `gripp_list_projects` | read | List projects |
| `gripp_list_tasks` | read | List tasks |
| `gripp_list_hours` | read | List hours |
| `gripp_list_invoices` | read | List invoices |
| `gripp_list_offers` | read | List offers |
| `gripp_list_employees` | read | List employees |
| `gripp_list_tags` | read | List tags |
| `gripp_get_record` | read | Get one record |
| `gripp_list_invoice_lines` | read | List invoice lines |
| `gripp_create_hour` | **write** | Register hours |
| `gripp_create_task` | **write** | Create a task |
| `gripp_create_contact` | **write** | Create a contact |
| `gripp_usage_status` | meta | Usage status (free-tier meter) |
| `gripp_request_feature` | meta | Request a missing feature |
| `gripp_upgrade` | meta | Upgrade to Pro or Pro+ |
| `gripp_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `gripp_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `gripp_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `gripp_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
