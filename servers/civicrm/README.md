# CiviCRM MCP by usefulapi

Work with your own CiviCRM: contacts, contributions, memberships, events; log activities.

**Live endpoint:** `https://civicrm.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/civicrm

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://civicrm.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http civicrm https://civicrm.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=civicrm&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcivicrm.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "civicrm": {
      "url": "https://civicrm.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your CiviCRM credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/civicrm/

<!-- connect:end (generated above, edit below) -->

On first connect you'll enter your CiviCRM **site address** (e.g. https://crm.example.org) and an **API key** of a contact with the "authenticate with api key" permission.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `civicrm_whoami` | read | Get current contact |
| `civicrm_search_contacts` | read | Search contacts |
| `civicrm_get_contact` | read | Get contact |
| `civicrm_list_contact_notes` | read | List contact notes |
| `civicrm_list_relationships` | read | List contact relationships |
| `civicrm_list_contributions` | read | List contributions |
| `civicrm_list_memberships` | read | List memberships |
| `civicrm_list_events` | read | List events |
| `civicrm_list_participants` | read | List event participants |
| `civicrm_list_activities` | read | List activities |
| `civicrm_list_cases` | read | List cases |
| `civicrm_list_groups` | read | List groups |
| `civicrm_list_group_contacts` | read | List group members |
| `civicrm_get_fields` | read | Describe an entity's fields |
| `civicrm_list_entities` | read | List API entities |
| `civicrm_query` | read | Query any entity |
| `civicrm_create_contact` | **write** | Create contact |
| `civicrm_update_contact` | **write** | Update contact |
| `civicrm_add_contact_note` | **write** | Add contact note |
| `civicrm_log_activity` | **write** | Log activity |
| `civicrm_record_contribution` | **write** | Record contribution |
| `civicrm_create_membership` | **write** | Create membership |
| `civicrm_add_contact_to_group` | **write** | Add contact to group |
| `civicrm_register_participant` | **write** | Register participant |
| `civicrm_usage_status` | meta | Usage status (free-tier meter) |
| `civicrm_request_feature` | meta | Request a missing feature |
| `civicrm_upgrade` | meta | Upgrade to Pro or Pro+ |
| `civicrm_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `civicrm_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `civicrm_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `civicrm_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by CiviCRM.
