# HappyFox MCP by usefulapi

Use [HappyFox](https://www.happyfox.com) from Claude, Cursor, or any MCP client — triage tickets, contacts and KB articles, run reports, and reply or add private notes.
Hosted, no local install: connect with your own HappyFox credentials.

**Live endpoint:** `https://happyfox.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/happyfox

## Add to Claude

```json
{
  "mcpServers": {
    "happyfox": {
      "url": "https://happyfox.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **HappyFox help-desk subdomain**, region, **API key** and **auth code** (Manage → Integrations → API → Create API key).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `happyfox_list_tickets` | read | List or search tickets |
| `happyfox_get_ticket` | read | Get one ticket |
| `happyfox_list_contacts` | read | List or search contacts |
| `happyfox_get_contact` | read | Get one contact |
| `happyfox_list_contact_groups` | read | List contact groups |
| `happyfox_get_contact_group` | read | Get one contact group |
| `happyfox_list_categories` | read | List categories |
| `happyfox_list_staff` | read | List agents |
| `happyfox_list_statuses` | read | List statuses |
| `happyfox_list_priorities` | read | List priorities |
| `happyfox_list_ticket_custom_fields` | read | List ticket custom fields |
| `happyfox_list_contact_custom_fields` | read | List contact custom fields |
| `happyfox_list_reports` | read | List reports |
| `happyfox_get_report_summary` | read | Get a report summary |
| `happyfox_get_report_tabular_data` | read | Get a report's ticket rows |
| `happyfox_list_kb_articles` | read | Export knowledge-base articles |
| `happyfox_create_ticket` | **write** | Create a ticket |
| `happyfox_add_staff_reply` | **write** | Reply to a ticket as an agent |
| `happyfox_add_private_note` | **write** | Add a private note to a ticket |
| `happyfox_update_ticket_tags` | **write** | Add or remove ticket tags |
| `happyfox_update_ticket_custom_fields` | **write** | Edit a ticket's custom fields |
| `happyfox_create_contact` | **write** | Create a contact |
| `happyfox_update_contact` | **write** | Edit a contact |
| `happyfox_usage_status` | meta | Usage status (free-tier meter) |
| `happyfox_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT © usefulapi. Not affiliated with or endorsed by HappyFox.
