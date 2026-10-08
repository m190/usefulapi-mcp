# Kisi MCP by usefulapi

Use [Kisi](https://www.getkisi.com) from Claude, Cursor, or any MCP client — read Kisi places, doors, users, groups, access rights and access logs (no unlocking).
Hosted, no local install: connect with your own Kisi credentials.

**Live endpoint:** `https://kisi.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/kisi

## Add to Claude

```json
{
  "mcpServers": {
    "kisi": {
      "url": "https://kisi.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Kisi API key**.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `kisi_get_current_user` | read | Get the current user |
| `kisi_get_organization` | read | Get the organization |
| `kisi_list_places` | read | List places |
| `kisi_get_place` | read | Get a place |
| `kisi_list_locks` | read | List locks (doors) |
| `kisi_get_lock` | read | Get a lock (door) |
| `kisi_list_groups` | read | List access groups |
| `kisi_get_group` | read | Get an access group |
| `kisi_list_group_locks` | read | List a group's locks |
| `kisi_list_users` | read | List users |
| `kisi_get_user` | read | Get a user |
| `kisi_list_role_assignments` | read | List role assignments (access rights) |
| `kisi_list_cards` | read | List access cards |
| `kisi_list_presences` | read | List presences at a place |
| `kisi_list_schedules` | read | List schedules |
| `kisi_list_controllers` | read | List controllers |
| `kisi_list_readers` | read | List readers |
| `kisi_search_events` | **write** | Search access events |
| `kisi_get_event_set` | read | Get an event set page |
| `kisi_list_event_types` | read | List event types |
| `kisi_usage_status` | meta | Usage status (free-tier meter) |
| `kisi_upgrade` | meta | Upgrade to Pro (unlimited) |
| `kisi_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `kisi_upgrade` (it returns a Stripe Checkout link). Cancel any time with `kisi_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `kisi_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Kisi.
