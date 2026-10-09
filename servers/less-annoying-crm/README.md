# Less Annoying CRM MCP by usefulapi

Use [Less Annoying CRM](https://www.lessannoyingcrm.com) from Claude, Cursor, or any MCP client — search contacts, read notes, tasks, events and pipelines, and create contacts, notes, tasks, events and pipeline items.
Hosted, no local install: connect with your own Less Annoying CRM credentials.

**Live endpoint:** `https://less-annoying-crm.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/less-annoying-crm

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://less-annoying-crm.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http less-annoying-crm https://less-annoying-crm.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=less-annoying-crm&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fless-annoying-crm.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "less-annoying-crm": {
      "url": "https://less-annoying-crm.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Less Annoying CRM credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/less-annoying-crm/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Less Annoying CRM API key** (Settings → Programmer API).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `lacrm_get_user` | read | Get the current user |
| `lacrm_list_users` | read | List users |
| `lacrm_search_contacts` | read | Search contacts and companies |
| `lacrm_get_contact` | read | Get a contact or company |
| `lacrm_list_notes` | read | List notes |
| `lacrm_list_tasks` | read | List tasks |
| `lacrm_list_events` | read | List calendar events |
| `lacrm_list_pipelines` | read | List pipelines |
| `lacrm_list_pipeline_items` | read | List pipeline items |
| `lacrm_get_contact_pipeline_items` | read | Get a contact's pipeline items |
| `lacrm_list_groups` | read | List groups |
| `lacrm_list_contacts_in_group` | read | List contacts in a group |
| `lacrm_get_contact_groups` | read | Get a contact's groups |
| `lacrm_list_custom_fields` | read | List custom fields |
| `lacrm_create_contact` | **write** | Create a contact or company |
| `lacrm_edit_contact` | **write** | Edit a contact or company |
| `lacrm_create_note` | **write** | Add a note to a contact |
| `lacrm_create_task` | **write** | Create a task |
| `lacrm_edit_task` | **write** | Edit or complete a task |
| `lacrm_create_event` | **write** | Schedule a calendar event |
| `lacrm_create_pipeline_item` | **write** | Add a contact to a pipeline |
| `lacrm_update_pipeline_item` | **write** | Move or annotate a pipeline item |
| `lacrm_add_contact_to_group` | **write** | Add a contact to a group |
| `lacrm_usage_status` | meta | Usage status (free-tier meter) |
| `lacrm_upgrade` | meta | Upgrade to Pro (unlimited) |
| `lacrm_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `lacrm_upgrade` (it returns a Stripe Checkout link). Cancel any time with `lacrm_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `lacrm_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Less Annoying CRM.
