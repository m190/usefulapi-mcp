# Teachworks MCP by usefulapi

Use [Teachworks](https://teachworks.com) from Claude, Cursor, or any MCP client — read Teachworks students, families, tutors, lessons, invoices and payments; book lessons.
Hosted, no local install: connect with your own Teachworks credentials.

**Live endpoint:** `https://teachworks.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/teachworks

## Add to Claude

```json
{
  "mcpServers": {
    "teachworks": {
      "url": "https://teachworks.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Teachworks API token**.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `teachworks_list_students` | read | List students |
| `teachworks_get_student` | read | Get student |
| `teachworks_list_customers` | read | List customers |
| `teachworks_get_customer` | read | Get customer |
| `teachworks_list_employees` | read | List employees |
| `teachworks_get_employee` | read | Get employee |
| `teachworks_get_employee_earnings` | read | Get employee earnings |
| `teachworks_get_lesson_totals` | read | Get lesson totals |
| `teachworks_list_lessons` | read | List lessons |
| `teachworks_get_lesson` | read | Get lesson |
| `teachworks_list_other_events` | read | List other events |
| `teachworks_list_availabilities` | read | List teacher availability |
| `teachworks_list_invoices` | read | List invoices |
| `teachworks_get_invoice` | read | Get invoice |
| `teachworks_list_payments` | read | List payments |
| `teachworks_get_payment` | read | Get payment |
| `teachworks_list_locations` | read | List locations |
| `teachworks_list_services` | read | List services |
| `teachworks_list_subjects` | read | List subjects |
| `teachworks_create_family` | **write** | Create family |
| `teachworks_create_child_student` | **write** | Create child student |
| `teachworks_create_lesson` | **write** | Create lesson |
| `teachworks_add_student_to_lesson` | **write** | Add student to lesson |
| `teachworks_create_payment` | **write** | Record payment |
| `teachworks_usage_status` | meta | Usage status (free-tier meter) |
| `teachworks_upgrade` | meta | Upgrade to Pro (unlimited) |
| `teachworks_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `teachworks_upgrade` (it returns a Stripe Checkout link). Cancel any time with `teachworks_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `teachworks_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Teachworks.
