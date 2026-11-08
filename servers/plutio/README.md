# Plutio MCP by usefulapi

**Live endpoint:** `https://plutio.usefulapi.io/mcp`

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://plutio.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http plutio https://plutio.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=plutio&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fplutio.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "plutio": {
      "url": "https://plutio.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Plutio credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/plutio/

<!-- connect:end (generated above, edit below) -->

Connect with the Client ID and Client Secret from Settings → API in Plutio, plus your workspace subdomain. The API client uses the access of the person who created it.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `plutio_get_workspace` | read | Get workspace |
| `plutio_list_people` | read | List people |
| `plutio_list_companies` | read | List companies |
| `plutio_list_projects` | read | List projects |
| `plutio_list_task_boards` | read | List task boards |
| `plutio_list_task_groups` | read | List task groups |
| `plutio_list_tasks` | read | List tasks |
| `plutio_list_statuses` | read | List statuses |
| `plutio_list_time_entries` | read | List time entries |
| `plutio_list_categories` | read | List categories |
| `plutio_list_events` | read | List events |
| `plutio_list_schedulers` | read | List schedulers |
| `plutio_list_invoices` | read | List invoices |
| `plutio_list_invoice_subscriptions` | read | List recurring invoices |
| `plutio_list_transactions` | read | List transactions |
| `plutio_list_proposals` | read | List proposals |
| `plutio_list_contracts` | read | List contracts |
| `plutio_list_forms` | read | List forms |
| `plutio_list_form_responses` | read | List form responses |
| `plutio_list_notes` | read | List notes |
| `plutio_list_comments` | read | List comments |
| `plutio_list_conversations` | read | List conversations |
| `plutio_list_wiki_pages` | read | List wiki pages |
| `plutio_list_files` | read | List files |
| `plutio_list_folders` | read | List folders |
| `plutio_list_custom_fields` | read | List custom fields |
| `plutio_get_document_blocks` | read | Get document blocks |
| `plutio_create_person` | **write** | Create person |
| `plutio_create_company` | **write** | Create company |
| `plutio_create_project` | **write** | Create project |
| `plutio_create_task` | **write** | Create task |
| `plutio_update_task` | **write** | Update task |
| `plutio_log_time` | **write** | Log time |
| `plutio_create_comment` | **write** | Comment on a task |
| `plutio_create_event` | **write** | Create event |
| `plutio_create_invoice` | **write** | Create draft invoice |
| `plutio_add_invoice_items` | **write** | Add invoice line items |
| `plutio_usage_status` | meta | Usage status (free-tier meter) |
| `plutio_request_feature` | meta | Request a missing feature |
| `plutio_upgrade` | meta | Upgrade to Pro or Pro+ |
| `plutio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per workspace) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per workspace) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `plutio_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `plutio_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `plutio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
