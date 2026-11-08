# Ascora MCP by usefulapi

Use your [Ascora](https://www.ascora.com.au) account from Claude, Cursor, or any MCP client. Read customers, quotes, jobs, bookings, staff and the price list, and make labeled writes such as quotes, jobs and bookings. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://ascora.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ascora.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ascora https://ascora.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ascora&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fascora.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ascora": {
      "url": "https://ascora.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Ascora credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ascora/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **Ascora API key** (Administration → API Settings → Generate New API Key). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ascora_list_customers` | read | List customers |
| `ascora_get_customer` | read | Get customer |
| `ascora_list_contacts` | read | List contacts |
| `ascora_list_customer_contacts` | read | List contacts of a customer |
| `ascora_list_supplies` | read | List supplies (price list) |
| `ascora_list_kits` | read | List kits |
| `ascora_list_categories` | read | List inventory categories |
| `ascora_list_labour_roles` | read | List labour roles |
| `ascora_list_quotes` | read | List quotes |
| `ascora_get_quote` | read | Get quote |
| `ascora_list_jobs` | read | List jobs |
| `ascora_get_job` | read | Get job |
| `ascora_get_job_labour` | read | Get job labour |
| `ascora_get_job_timesheets` | read | Get job timesheets |
| `ascora_list_bookings` | read | List bookings (schedule) |
| `ascora_get_booking` | read | Get booking |
| `ascora_list_activity_types` | read | List activity types |
| `ascora_list_users` | read | List staff users |
| `ascora_list_suppliers` | read | List suppliers |
| `ascora_list_supplier_invoices` | read | List supplier invoices |
| `ascora_create_enquiry` | **write** | Create enquiry (lead) |
| `ascora_create_customer` | **write** | Create customer |
| `ascora_add_note` | **write** | Add note |
| `ascora_create_quote` | **write** | Create quote |
| `ascora_update_quote_status` | **write** | Update quote status |
| `ascora_convert_quote_to_job` | **write** | Convert quote to job |
| `ascora_create_job` | **write** | Create job |
| `ascora_create_booking` | **write** | Create booking |
| `ascora_usage_status` | meta | Usage status (free-tier meter) |
| `ascora_request_feature` | meta | Request a missing feature |
| `ascora_upgrade` | meta | Upgrade to Pro or Pro+ |
| `ascora_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `ascora_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `ascora_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `ascora_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
