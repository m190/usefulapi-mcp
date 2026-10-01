# Formbricks MCP by usefulapi

Read survey responses and manage contacts, webhooks, teams and organisation users. Hosted, no local install.

**Live endpoint:** `https://formbricks.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "formbricks": {
      "url": "https://formbricks.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Formbricks credentials**. They are validated,
stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `formbricks_health` | read | Check API health |
| `formbricks_whoami` | read | Identify the configured key |
| `formbricks_list_responses` | read | List survey responses |
| `formbricks_get_response` | read | Get one response |
| `formbricks_list_webhooks` | read | List webhooks |
| `formbricks_get_webhook` | read | Get one webhook |
| `formbricks_list_contact_attribute_keys` | read | List contact attribute keys |
| `formbricks_get_contact_attribute_key` | read | Get one contact attribute key |
| `formbricks_get_survey_contact_link` | read | Get a personal survey link for a contact |
| `formbricks_get_survey_segment_links` | read | Get personal survey links for a segment |
| `formbricks_list_teams` | read | List teams |
| `formbricks_list_organization_users` | read | List organisation users |
| `formbricks_list_roles` | read | List roles |
| `formbricks_create_webhook` | **write** | Create a webhook |
| `formbricks_delete_webhook` | **write** | Delete a webhook |
| `formbricks_create_contact` | **write** | Create a contact |
| `formbricks_delete_response` | **write** | Delete a response |
| `formbricks_usage_status` | meta | Usage status (free-tier meter) |
| `formbricks_upgrade` | meta | Upgrade to Pro (unlimited) |
| `formbricks_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `formbricks_upgrade` (it returns a Stripe Checkout link). Cancel any time with `formbricks_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `formbricks_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
