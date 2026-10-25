# Mail Blaze MCP by usefulapi

Manage Mail Blaze lists, subscribers, templates, campaigns and reports; send transactional email.

**Live endpoint:** `https://mailblaze.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/mailblaze

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://mailblaze.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http mailblaze https://mailblaze.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=mailblaze&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmailblaze.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "mailblaze": {
      "url": "https://mailblaze.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Mail Blaze credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/mailblaze/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste a **Mail Blaze API public key** (Mail Blaze → **Profile menu → API Keys**: create a key and copy the **Public key**). The key has full access to your account; you can revoke it there at any time.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `mailblaze_list_lists` | read | List mailing lists |
| `mailblaze_get_list` | read | Get a mailing list |
| `mailblaze_list_list_fields` | read | List a list's custom fields |
| `mailblaze_list_segments` | read | List a list's segments |
| `mailblaze_list_subscribers` | read | List subscribers |
| `mailblaze_get_subscriber` | read | Get a subscriber |
| `mailblaze_find_subscriber_by_email` | read | Find a subscriber by email |
| `mailblaze_add_subscriber` | **write** | Add a subscriber |
| `mailblaze_add_subscribers_bulk` | **write** | Add or update subscribers in bulk |
| `mailblaze_update_subscriber` | **write** | Update a subscriber |
| `mailblaze_unsubscribe_subscriber` | **write** | Unsubscribe a subscriber |
| `mailblaze_resubscribe_subscriber` | **write** | Resubscribe a subscriber |
| `mailblaze_list_templates` | read | List email templates |
| `mailblaze_get_template` | read | Get an email template |
| `mailblaze_create_template` | **write** | Create an email template |
| `mailblaze_list_campaigns` | read | List campaigns |
| `mailblaze_get_campaign` | read | Get a campaign |
| `mailblaze_create_campaign` | **write** | Create and schedule a campaign |
| `mailblaze_get_campaign_summaries` | read | Get campaign report summaries |
| `mailblaze_get_campaign_inbox_breakdown` | read | Get a campaign's inbox breakdown |
| `mailblaze_list_campaign_events` | read | List a campaign's opens, clicks, bounces or unsubscribes |
| `mailblaze_get_subscriber_activity` | read | Get a subscriber's activity |
| `mailblaze_get_report_job` | read | Get a report job's status |
| `mailblaze_list_transactional_emails` | read | List transactional emails |
| `mailblaze_get_transactional_email` | read | Get a transactional email |
| `mailblaze_send_transactional_email` | **write** | Send a transactional email |
| `mailblaze_usage_status` | meta | Usage status (free-tier meter) |
| `mailblaze_request_feature` | meta | Request a missing feature |
| `mailblaze_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `mailblaze_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API key) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `mailblaze_upgrade` (it returns a Stripe Checkout link). Cancel any time with `mailblaze_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `mailblaze_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
