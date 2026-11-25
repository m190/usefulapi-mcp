# Qvoo CRM MCP by usefulapi

Use your [Qvoo CRM](https://qvoo.in) account from Claude, Cursor, or any MCP client. Read leads, contacts, customers, properties and tasks, and create or update leads, contacts and tasks. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://qvoo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://qvoo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http qvoo https://qvoo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=qvoo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fqvoo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "qvoo": {
      "url": "https://qvoo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Qvoo CRM credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/qvoo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Qvoo workspace ID** (Qvoo CRM → Settings) and a **Qvoo API key** (Qvoo CRM → Developer Settings). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `qvoo_get_workspace` | read | Get workspace |
| `qvoo_get_schema` | read | Get field schema |
| `qvoo_list_leads` | read | List leads |
| `qvoo_get_lead` | read | Get a lead |
| `qvoo_list_recent_leads` | read | List recent leads |
| `qvoo_sync_leads` | read | Sync leads |
| `qvoo_get_lead_comments` | read | Get lead comments |
| `qvoo_check_duplicate_lead` | read | Check for a duplicate lead |
| `qvoo_list_properties` | read | List properties |
| `qvoo_get_property` | read | Get a property |
| `qvoo_list_property_units` | read | List property units |
| `qvoo_list_property_towers` | read | List property towers |
| `qvoo_get_property_inventory` | read | Get property inventory |
| `qvoo_get_property_availability` | read | Get property availability |
| `qvoo_list_contacts` | read | List contacts |
| `qvoo_get_contact` | read | Get a contact |
| `qvoo_list_customers` | read | List customers |
| `qvoo_get_customer` | read | Get a customer |
| `qvoo_list_tasks` | read | List tasks |
| `qvoo_get_task` | read | Get a task |
| `qvoo_get_team_members` | read | List team members |
| `qvoo_get_metadata` | read | Get workspace metadata |
| `qvoo_list_whatsapp_conversations` | read | List WhatsApp conversations |
| `qvoo_list_whatsapp_templates` | read | List WhatsApp templates |
| `qvoo_create_lead` | **write** | Create a lead |
| `qvoo_update_lead` | **write** | Update a lead |
| `qvoo_add_lead_comment` | **write** | Add a lead comment |
| `qvoo_create_contact` | **write** | Create a contact |
| `qvoo_update_contact` | **write** | Update a contact |
| `qvoo_create_task` | **write** | Create a task |
| `qvoo_update_task` | **write** | Update a task |
| `qvoo_complete_task` | **write** | Complete a task |
| `qvoo_reopen_task` | **write** | Reopen a task |
| `qvoo_usage_status` | meta | Usage status (free-tier meter) |
| `qvoo_request_feature` | meta | Request a missing feature |
| `qvoo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `qvoo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `qvoo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `qvoo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `qvoo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
