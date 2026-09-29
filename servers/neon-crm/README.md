# Neon CRM MCP by usefulapi

Use [Neon CRM](https://neonone.com/products/neon-crm/) from Claude, Cursor, or any MCP client — search accounts, donations, memberships, events and campaigns, and create or update accounts and activities.
Hosted, no local install: connect with your own Neon CRM credentials.

**Live endpoint:** `https://neon-crm.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/neon-crm

## Add to Claude

```json
{
  "mcpServers": {
    "neon-crm": {
      "url": "https://neon-crm.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Neon CRM organization ID and API key** (Settings → User Management → API access).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `neon_get_organization_profile` | read | Get the organization profile |
| `neon_list_accounts` | read | List accounts |
| `neon_get_account` | read | Get one account |
| `neon_list_search_fields` | read | List search or output fields |
| `neon_search` | read | Search records |
| `neon_list_account_donations` | read | List an account's donations |
| `neon_list_account_memberships` | read | List an account's memberships |
| `neon_list_account_event_registrations` | read | List an account's event registrations |
| `neon_get_donation` | read | Get one donation |
| `neon_get_membership` | read | Get one membership |
| `neon_list_membership_levels` | read | List membership levels |
| `neon_list_events` | read | List events |
| `neon_get_event` | read | Get one event |
| `neon_list_event_registrations` | read | List an event's registrations |
| `neon_list_campaigns` | read | List campaigns |
| `neon_get_campaign` | read | Get one campaign |
| `neon_get_activity` | read | Get one activity |
| `neon_list_properties` | read | List lookup values |
| `neon_create_account` | **write** | Create an account |
| `neon_update_account` | **write** | Update an account |
| `neon_create_activity` | **write** | Log an activity |
| `neon_update_activity` | **write** | Update an activity |
| `neon_usage_status` | meta | Usage status (free-tier meter) |
| `neon_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT © usefulapi. Not affiliated with or endorsed by Neon CRM.
