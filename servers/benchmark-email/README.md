# Benchmark Email MCP by usefulapi

Use [Benchmark Email](https://www.benchmarkemail.com) from Claude, Cursor, or any MCP client — lists, contacts, campaigns, reports and signup forms.
Hosted, no local install: connect with your own Benchmark Email credentials.

**Live endpoint:** `https://benchmark-email.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/benchmark-email

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://benchmark-email.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http benchmark-email https://benchmark-email.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=benchmark-email&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbenchmark-email.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "benchmark-email": {
      "url": "https://benchmark-email.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Benchmark Email credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/benchmark-email/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `benchmark_get_account` | read | Get account |
| `benchmark_get_plan` | read | Get plan and usage |
| `benchmark_get_settings` | read | Get account settings |
| `benchmark_list_lists` | read | List contact lists |
| `benchmark_get_list` | read | Get contact list |
| `benchmark_get_list_fields` | read | Get contact list fields |
| `benchmark_create_list` | **write** | Create contact list |
| `benchmark_list_segments` | read | List segments |
| `benchmark_list_contacts` | read | List contacts in a list |
| `benchmark_get_contact` | read | Get contact |
| `benchmark_search_contacts` | read | Search contacts by email |
| `benchmark_add_contact` | **write** | Add contact to a list |
| `benchmark_update_contact` | **write** | Update contact |
| `benchmark_unsubscribe_contact` | **write** | Unsubscribe contact |
| `benchmark_list_emails` | read | List emails (campaigns) |
| `benchmark_get_email` | read | Get email (campaign) |
| `benchmark_list_email_reports` | read | List email report summaries |
| `benchmark_get_email_report` | read | Get email report |
| `benchmark_get_email_opens` | read | Get email opens |
| `benchmark_get_email_clicks` | read | Get email clicks |
| `benchmark_get_email_bounces` | read | Get email bounces |
| `benchmark_get_email_unsubscribes` | read | Get email unsubscribes |
| `benchmark_list_signup_forms` | read | List signup forms |
| `benchmark_get_signup_form` | read | Get signup form |
| `benchmark_get_signup_form_link` | read | Get signup form link |
| `benchmark_usage_status` | meta | Usage status (free-tier meter) |
| `benchmark_request_feature` | meta | Request a missing feature |
| `benchmark_upgrade` | meta | Upgrade to Pro (unlimited) |
| `benchmark_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `benchmark_upgrade` (it returns a Stripe Checkout link). Cancel any time with `benchmark_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `benchmark_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Benchmark Email.
