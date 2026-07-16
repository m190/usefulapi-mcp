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
| `list_subscribers` | read | List subscribers, optionally by status |
| `get_subscriber` | read | Get one subscriber by id or email |
| `list_groups` | read | List subscriber groups/lists |
| `list_group_subscribers` | read | List subscribers in a group |
| `list_campaigns` | read | List campaigns, optionally by status |
| `get_campaign` | read | Get one campaign by id |
| `list_fields` | read | List subscriber fields |
| `list_segments` | read | List segments |
| `list_automations` | read | List automations (workflows) |
| `list_webhooks` | read | List configured webhooks |
| `upsert_subscriber` | **write** | Create or update a subscriber by email (no email sent) |
| `create_group` | **write** | Create a subscriber group/list |
| `assign_subscriber_to_group` | **write** | Add a subscriber to a group |
| `mailerlite_usage_status` | meta | Your tier + usage this month |
| `mailerlite_upgrade` | meta | Upgrade to Pro |

Read tools are annotated `readOnlyHint`; write tools are `destructiveHint` so clients confirm before mutating.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
