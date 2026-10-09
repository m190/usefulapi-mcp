# SendGrid MCP by usefulapi

**Live endpoint:** `https://sendgrid.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sendgrid.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sendgrid https://sendgrid.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sendgrid&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsendgrid.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sendgrid": {
      "url": "https://sendgrid.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SendGrid credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sendgrid/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **SendGrid API key** (SendGrid → Settings → API Keys).
It's validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sendgrid_ping` | read | Ping (health check) |
| `sendgrid_list_templates` | read | List email templates |
| `sendgrid_get_template` | read | Get email template |
| `sendgrid_list_marketing_lists` | read | List marketing lists |
| `sendgrid_get_contact_count` | read | Get contact count |
| `sendgrid_search_contacts_by_email` | read | Search contacts by email |
| `sendgrid_get_stats` | read | Get email stats |
| `sendgrid_list_bounces` | read | List bounces |
| `sendgrid_list_global_unsubscribes` | read | List global unsubscribes |
| `sendgrid_send_mail` | **write** | Send email |
| `sendgrid_add_or_update_contacts` | **write** | Add or update marketing contacts |
| `sendgrid_usage_status` | meta | Usage status (free-tier meter) |
| `sendgrid_request_feature` | meta | Request a missing feature |
| `sendgrid_upgrade` | meta | Upgrade to Pro (unlimited) |
| `sendgrid_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `sendgrid_upgrade` (it returns a Stripe Checkout link). Cancel any time with `sendgrid_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `sendgrid_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
