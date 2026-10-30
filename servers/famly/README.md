# Famly MCP by usefulapi

Hosted at https://famly.usefulapi.io/mcp.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://famly.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http famly https://famly.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=famly&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffamly.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "famly": {
      "url": "https://famly.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Famly credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/famly/

<!-- connect:end (generated above, edit below) -->

Create a scoped, expiring API token in Famly’s Manage API tokens settings and select the matching General or DACH region. API access depends on your Famly package. Grant read access to sites and the resources you need. Usage and billing are per region and API token.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `famly_list_sites` | read | List sites |
| `famly_list_groups` | read | List groups |
| `famly_list_employees` | read | List employees |
| `famly_list_invoices` | read | List invoices |
| `famly_get_invoices` | read | Get invoices by ID |
| `famly_list_payments` | read | List payments |
| `famly_list_purchases` | read | List purchases |
| `famly_list_account_codes` | read | List account codes |
| `famly_list_bill_payers` | read | List bill payers |
| `famly_list_work_tags` | read | List work tags |
| `famly_get_staff_hours_totals` | read | Get staff hours totals |
| `famly_list_employee_checkins` | read | List employee check-ins |
| `famly_usage_status` | meta | Usage status (free-tier meter) |
| `famly_request_feature` | meta | Request a missing feature |
| `famly_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `famly_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per region and API token) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `famly_upgrade` (it returns a Stripe Checkout link). Cancel any time with `famly_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `famly_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT.
