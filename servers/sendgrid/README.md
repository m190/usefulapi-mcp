# SendGrid MCP by usefulapi

**Live endpoint:** `https://sendgrid.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "sendgrid": {
      "url": "https://sendgrid.usefulapi.io/mcp"
    }
  }
}
```

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
| `sendgrid_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License
