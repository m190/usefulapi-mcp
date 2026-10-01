# Housecall Pro MCP by usefulapi

Use [Housecall Pro](https://www.housecallpro.com) from Claude, Cursor, or any MCP client — read customers, jobs, estimates, invoices and employees, and create customers, jobs, estimates and leads, and schedule or dispatch jobs.
Hosted, no local install: connect with your own Housecall Pro credentials.

**Live endpoint:** `https://housecall-pro.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/housecall-pro

## Add to Claude

```json
{
  "mcpServers": {
    "housecall-pro": {
      "url": "https://housecall-pro.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Housecall Pro API key** (My Apps → API Key Management; MAX plan).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `housecall_get_company` | read | Get the company |
| `housecall_list_customers` | read | List customers |
| `housecall_get_customer` | read | Get one customer |
| `housecall_list_jobs` | read | List jobs |
| `housecall_get_job` | read | Get one job |
| `housecall_list_job_line_items` | read | List a job's line items |
| `housecall_list_job_invoices` | read | List a job's invoices |
| `housecall_list_invoices` | read | List invoices |
| `housecall_list_estimates` | read | List estimates |
| `housecall_get_estimate` | read | Get one estimate |
| `housecall_list_employees` | read | List employees |
| `housecall_list_leads` | read | List leads |
| `housecall_get_lead` | read | Get one lead |
| `housecall_list_job_types` | read | List job types |
| `housecall_list_tags` | read | List tags |
| `housecall_list_price_book_services` | read | List price book services |
| `housecall_create_customer` | **write** | Create a customer |
| `housecall_update_customer` | **write** | Update a customer |
| `housecall_create_customer_address` | **write** | Add an address to a customer |
| `housecall_create_job` | **write** | Create a job |
| `housecall_update_job_schedule` | **write** | Reschedule a job |
| `housecall_dispatch_job` | **write** | Dispatch a job to employees |
| `housecall_add_job_note` | **write** | Add a note to a job |
| `housecall_create_estimate` | **write** | Create an estimate |
| `housecall_create_lead` | **write** | Create a lead |
| `housecall_usage_status` | meta | Usage status (free-tier meter) |
| `housecall_upgrade` | meta | Upgrade to Pro (unlimited) |
| `housecall_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `housecall_upgrade` (it returns a Stripe Checkout link). Cancel any time with `housecall_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `housecall_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Housecall Pro.
