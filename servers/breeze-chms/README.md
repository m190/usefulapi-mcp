# Breeze ChMS MCP by usefulapi

Use [Breeze ChMS](https://www.breezechms.com) from Claude, Cursor, or any MCP client — read people, tags, events, attendance and contributions, add people, manage tags, check people in, and schedule volunteers.
Hosted, no local install: connect with your own Breeze ChMS credentials.

**Live endpoint:** `https://breeze-chms.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/breeze-chms

## Add to Claude

```json
{
  "mcpServers": {
    "breeze-chms": {
      "url": "https://breeze-chms.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Breeze subdomain and API key** (Extensions → API).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `breeze_get_account_summary` | read | Get the account summary |
| `breeze_list_people` | read | List people |
| `breeze_get_person` | read | Get a person |
| `breeze_list_profile_fields` | read | List profile fields |
| `breeze_list_tags` | read | List tags |
| `breeze_list_events` | read | List events |
| `breeze_get_event` | read | Get an event instance |
| `breeze_list_calendars` | read | List calendars |
| `breeze_list_attendance` | read | List attendance |
| `breeze_list_forms` | read | List forms |
| `breeze_list_form_fields` | read | List form fields |
| `breeze_list_form_entries` | read | List form entries |
| `breeze_list_volunteers` | read | List volunteers |
| `breeze_list_account_log` | read | List the account log |
| `breeze_list_funds` | read | List funds |
| `breeze_list_contributions` | read | List contributions |
| `breeze_add_person` | **write** | Add a person |
| `breeze_update_person` | **write** | Update a person |
| `breeze_add_tag` | **write** | Create a tag |
| `breeze_assign_tag` | **write** | Assign a tag to a person |
| `breeze_unassign_tag` | **write** | Remove a tag from a person |
| `breeze_add_event` | **write** | Add an event |
| `breeze_record_attendance` | **write** | Check a person in or out |
| `breeze_schedule_volunteer` | **write** | Schedule a volunteer |
| `breeze_chms_usage_status` | meta | Usage status (free-tier meter) |
| `breeze_chms_upgrade` | meta | Upgrade to Pro (unlimited) |
| `breeze_chms_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `breeze_chms_upgrade` (it returns a Stripe Checkout link). Cancel any time with `breeze_chms_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `breeze_chms_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Breeze ChMS.
