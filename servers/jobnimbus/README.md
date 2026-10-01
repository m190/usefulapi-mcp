# JobNimbus MCP by usefulapi

Use [JobNimbus](https://www.jobnimbus.com) from Claude, Cursor, or any MCP client — look up contacts, jobs, tasks, estimates and invoices, and create or update contacts, jobs, tasks and notes.
Hosted, no local install: connect with your own JobNimbus credentials.

**Live endpoint:** `https://jobnimbus.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/jobnimbus

## Add to Claude

```json
{
  "mcpServers": {
    "jobnimbus": {
      "url": "https://jobnimbus.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **JobNimbus API key** (Settings > API > New API key).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `jobnimbus_get_account_settings` | read | Get account settings |
| `jobnimbus_list_users` | read | List users |
| `jobnimbus_list_contacts` | read | List or search contacts |
| `jobnimbus_get_contact` | read | Get one contact |
| `jobnimbus_list_jobs` | read | List or search jobs |
| `jobnimbus_get_job` | read | Get one job |
| `jobnimbus_list_tasks` | read | List or search tasks |
| `jobnimbus_get_task` | read | Get one task |
| `jobnimbus_list_activities` | read | List activity and notes |
| `jobnimbus_list_files` | read | List file attachments |
| `jobnimbus_list_estimates` | read | List estimates |
| `jobnimbus_list_invoices` | read | List invoices |
| `jobnimbus_get_invoice` | read | Get one invoice |
| `jobnimbus_create_contact` | **write** | Create a contact |
| `jobnimbus_update_contact` | **write** | Update a contact |
| `jobnimbus_create_job` | **write** | Create a job |
| `jobnimbus_update_job` | **write** | Update a job |
| `jobnimbus_create_task` | **write** | Create a task |
| `jobnimbus_update_task` | **write** | Update a task |
| `jobnimbus_create_note` | **write** | Add a note |
| `jobnimbus_usage_status` | meta | Usage status (free-tier meter) |
| `jobnimbus_upgrade` | meta | Upgrade to Pro (unlimited) |
| `jobnimbus_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `jobnimbus_upgrade` (it returns a Stripe Checkout link). Cancel any time with `jobnimbus_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `jobnimbus_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by JobNimbus.
