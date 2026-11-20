# MoveitPro+ MCP by usefulapi

Use your [MoveitPro+](https://www.moveitpro.com) account from Claude, Cursor, or any MCP client. Read leads, customers, estimates, jobs, crew assignments and payments, and create leads, notes, contact-log entries and tasks. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://moveitpro-plus.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://moveitpro-plus.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http moveitpro-plus https://moveitpro-plus.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=moveitpro-plus&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmoveitpro-plus.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "moveitpro-plus": {
      "url": "https://moveitpro-plus.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your MoveitPro+ credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/moveitpro-plus/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **MoveitPro+ API key** (`mip_live_…`) and, for writes, a **signing secret** (`mip_secret_…`, optional). A company Owner or an Admin with the `api_keys.manage` permission creates both in MoveitPro+. Use a key without an IP allowlist. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `moveitpro_whoami` | read | Check the connected key |
| `moveitpro_list_customers` | read | List customers |
| `moveitpro_list_leads` | read | List leads |
| `moveitpro_get_record` | read | Get one record |
| `moveitpro_list_estimates` | read | List estimates |
| `moveitpro_get_estimate_section` | read | Get an estimate's price breakdown, invoices or documents |
| `moveitpro_list_jobs` | read | List jobs |
| `moveitpro_get_job_charges` | read | Get a job's bills |
| `moveitpro_list_dispatch` | read | List crew assignments |
| `moveitpro_list_payments` | read | List payments |
| `moveitpro_list_move_invoices` | read | List move invoices |
| `moveitpro_list_storage_invoices` | read | List storage invoices |
| `moveitpro_list_storage_accounts` | read | List storage accounts |
| `moveitpro_list_tasks` | read | List tasks |
| `moveitpro_list_claims` | read | List damage claims |
| `moveitpro_list_notes` | read | List notes |
| `moveitpro_list_activities` | read | List contact log |
| `moveitpro_list_messages` | read | List texts, emails or calls |
| `moveitpro_list_follow_ups` | read | List the follow-up queue |
| `moveitpro_completed_revenue_report` | read | Completed revenue by month |
| `moveitpro_list_team` | read | List employees, crews or branches |
| `moveitpro_list_lookup` | read | List a setup list |
| `moveitpro_create_lead` | **write** | Create a lead |
| `moveitpro_add_note` | **write** | Add a note |
| `moveitpro_log_activity` | **write** | Log a contact |
| `moveitpro_create_task` | **write** | Create a task |
| `moveitpro_update_task` | **write** | Update a task |
| `moveitpro_usage_status` | meta | Usage status (free-tier meter) |
| `moveitpro_request_feature` | meta | Request a missing feature |
| `moveitpro_upgrade` | meta | Upgrade to Pro or Pro+ |
| `moveitpro_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `moveitpro_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `moveitpro_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `moveitpro_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
