# MailerLite MCP by usefulapi

Read your MailerLite subscribers, groups and campaigns from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your MailerLite API key.

**Live endpoint:** `https://mailerlite.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/mailerlite

## Add to Claude

```json
{
  "mcpServers": {
    "mailerlite": {
      "url": "https://mailerlite.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your MailerLite API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `mailerlite_list_subscribers` | read | List subscribers |
| `mailerlite_get_subscriber` | read | Get subscriber |
| `mailerlite_list_groups` | read | List groups |
| `mailerlite_list_group_subscribers` | read | List group subscribers |
| `mailerlite_list_campaigns` | read | List campaigns |
| `mailerlite_get_campaign` | read | Get campaign |
| `mailerlite_list_fields` | read | List fields |
| `mailerlite_list_segments` | read | List segments |
| `mailerlite_list_automations` | read | List automations |
| `mailerlite_list_webhooks` | read | List webhooks |
| `mailerlite_upsert_subscriber` | **write** | Upsert subscriber |
| `mailerlite_create_group` | **write** | Create group |
| `mailerlite_assign_subscriber_to_group` | **write** | Assign subscriber to group |
| `mailerlite_usage_status` | meta | Usage status (free-tier meter) |
| `mailerlite_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
