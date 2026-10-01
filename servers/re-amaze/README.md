# Re:amaze MCP by usefulapi

Manage Re:amaze conversations, messages, contacts and help articles. Hosted, no local install.

**Live endpoint:** `https://re-amaze.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "re-amaze": {
      "url": "https://re-amaze.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Re:amaze credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `reamaze_list_conversations` | read | List conversations |
| `reamaze_get_conversation` | read | Get conversation |
| `reamaze_list_messages` | read | List messages |
| `reamaze_list_contacts` | read | List contacts |
| `reamaze_get_contact` | read | Get contact |
| `reamaze_list_articles` | read | List articles |
| `reamaze_get_article` | read | Get article |
| `reamaze_list_staff` | read | List staff |
| `reamaze_list_channels` | read | List channels |
| `reamaze_get_channel` | read | Get channel |
| `reamaze_report_volume` | read | Report: volume |
| `reamaze_report_response_time` | read | Report: response time |
| `reamaze_create_conversation` | **write** | Create conversation |
| `reamaze_reply_conversation` | **write** | Reply to conversation |
| `reamaze_update_conversation` | **write** | Update conversation |
| `reamaze_create_contact` | **write** | Create contact |
| `reamaze_update_contact` | **write** | Update contact |
| `re_amaze_usage_status` | meta | Usage status (free-tier meter) |
| `re_amaze_upgrade` | meta | Upgrade to Pro (unlimited) |
| `re_amaze_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `re_amaze_upgrade` (it returns a Stripe Checkout link). Cancel any time with `re_amaze_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `re_amaze_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
