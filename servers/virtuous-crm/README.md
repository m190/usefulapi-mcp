# Virtuous MCP by usefulapi

Use [Virtuous](https://virtuous.org) from Claude, Cursor, or any MCP client — search donors, read contacts, giving history, notes, tags, projects and events, run queries, and log notes, tags, contacts and gifts.
Hosted, no local install: connect with your own Virtuous credentials.

**Live endpoint:** `https://virtuous-crm.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/virtuous-crm

## Add to Claude

```json
{
  "mcpServers": {
    "virtuous-crm": {
      "url": "https://virtuous-crm.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Virtuous API key** (Settings → API Keys).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `virtuous_get_current_organization` | read | Get the current organization |
| `virtuous_search` | read | Global search |
| `virtuous_search_contacts` | read | Search contacts |
| `virtuous_get_contact` | read | Get a contact |
| `virtuous_find_contact` | read | Find a contact by email or reference |
| `virtuous_list_contact_individuals` | read | List a contact's individuals |
| `virtuous_list_contact_notes` | read | List a contact's notes |
| `virtuous_list_contact_tags` | read | List a contact's tags |
| `virtuous_list_contact_gifts` | read | List a contact's gifts |
| `virtuous_get_gift` | read | Get a gift |
| `virtuous_list_tags` | read | List tags |
| `virtuous_search_projects` | read | Search projects |
| `virtuous_get_project` | read | Get a project |
| `virtuous_list_events` | read | List events |
| `virtuous_get_query_options` | read | Get query options |
| `virtuous_query` | read | Query records |
| `virtuous_create_contact_note` | **write** | Log a note on a contact |
| `virtuous_add_contact_tag` | **write** | Tag a contact |
| `virtuous_create_contact_transaction` | **write** | Submit a contact for import |
| `virtuous_create_gift_transaction` | **write** | Submit a gift for import |
| `virtuous_usage_status` | meta | Usage status (free-tier meter) |
| `virtuous_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT © usefulapi. Not affiliated with or endorsed by Virtuous.
