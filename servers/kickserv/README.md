# Kickserv MCP by usefulapi

Use [Kickserv](https://www.kickserv.com) from Claude, Cursor, or any MCP client — look up customers, jobs, notes and time entries, and create or update customers, jobs, tasks, notes, time and charges.
Hosted, no local install: connect with your own Kickserv credentials.

**Live endpoint:** `https://kickserv.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/kickserv

## Add to Claude

```json
{
  "mcpServers": {
    "kickserv": {
      "url": "https://kickserv.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Kickserv account slug** (from app.kickserv.com/<slug>) and **employee API token** (My Account > API token).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `kickserv_list_customers` | read | List customers |
| `kickserv_get_customer` | read | Get a customer |
| `kickserv_list_customer_jobs` | read | List a customer's jobs |
| `kickserv_list_jobs` | read | List jobs |
| `kickserv_get_job` | read | Get a job |
| `kickserv_list_customer_notes` | read | List a customer's notes |
| `kickserv_list_job_notes` | read | List a job's notes |
| `kickserv_list_job_time_entries` | read | List a job's time entries |
| `kickserv_get_task` | read | Get a task |
| `kickserv_list_employees` | read | List employees |
| `kickserv_list_items` | read | List items |
| `kickserv_create_customer` | **write** | Create a customer |
| `kickserv_update_customer` | **write** | Update a customer |
| `kickserv_add_customer_note` | **write** | Add a note to a customer |
| `kickserv_create_job` | **write** | Create a job |
| `kickserv_update_job` | **write** | Update a job |
| `kickserv_add_job_note` | **write** | Add a note to a job |
| `kickserv_create_task` | **write** | Create a task |
| `kickserv_log_time_entry` | **write** | Log time on a job |
| `kickserv_add_job_charge` | **write** | Add a charge to a job |
| `kickserv_usage_status` | meta | Usage status (free-tier meter) |
| `kickserv_upgrade` | meta | Upgrade to Pro (unlimited) |
| `kickserv_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `kickserv_upgrade` (it returns a Stripe Checkout link). Cancel any time with `kickserv_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `kickserv_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Kickserv.
