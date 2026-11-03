# AdminPulse MCP by usefulapi

Use your [AdminPulse](https://adminpulse.be) account from Claude, Cursor, or any MCP client. It reads relations, invoices, tasks, interactions, registrations and documents, and it can create a task, update a task status and log an interaction. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://adminpulse.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://adminpulse.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http adminpulse https://adminpulse.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=adminpulse&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fadminpulse.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "adminpulse": {
      "url": "https://adminpulse.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your AdminPulse credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/adminpulse/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **AdminPulse API key** (in AdminPulse under My profile, Access tokens; only an administrator can create one). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `adminpulse_get_current_user` | read | Get the connected user |
| `adminpulse_list_companies` | read | List companies |
| `adminpulse_search_relations` | read | Search relations |
| `adminpulse_get_relation` | read | Get a relation |
| `adminpulse_find_relations_by_name` | read | Find relations by name |
| `adminpulse_list_invoices` | read | List invoices |
| `adminpulse_get_invoice` | read | Get an invoice |
| `adminpulse_list_tasks` | read | List tasks |
| `adminpulse_get_task` | read | Get a task |
| `adminpulse_create_task` | **write** | Create a task |
| `adminpulse_update_task_status` | **write** | Update a task status |
| `adminpulse_list_interactions` | read | List interactions |
| `adminpulse_add_interaction` | **write** | Log an interaction |
| `adminpulse_list_registrations` | read | List registrations |
| `adminpulse_list_documents` | read | List documents |
| `adminpulse_usage_status` | meta | Usage status (free-tier meter) |
| `adminpulse_request_feature` | meta | Request a missing feature |
| `adminpulse_upgrade` | meta | Upgrade to Pro or Pro+ |
| `adminpulse_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `adminpulse_upgrade` (it returns a Stripe Checkout link). Cancel any time with `adminpulse_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `adminpulse_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
