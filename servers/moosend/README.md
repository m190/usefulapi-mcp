# Moosend MCP by usefulapi

Use [Moosend](https://moosend.com) from Claude, Cursor, or any MCP client — inspect mailing lists, subscribers, segments and campaign analytics, and add subscribers or draft campaigns.
Hosted, no local install: connect with your own Moosend credentials.

**Live endpoint:** `https://moosend.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/moosend

## Add to Claude

```json
{
  "mcpServers": {
    "moosend": {
      "url": "https://moosend.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Moosend API key** (More > Settings > API key).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `moosend_list_mailing_lists` | read | List mailing lists |
| `moosend_get_mailing_list` | read | Get mailing list details |
| `moosend_list_subscribers` | read | List subscribers in a list |
| `moosend_get_subscriber_by_email` | read | Find subscriber by email |
| `moosend_get_subscriber` | read | Get subscriber by ID |
| `moosend_list_segments` | read | List segments of a list |
| `moosend_get_segment` | read | Get segment details |
| `moosend_list_segment_subscribers` | read | List segment subscribers |
| `moosend_list_campaigns` | read | List campaigns |
| `moosend_get_campaign` | read | Get campaign details |
| `moosend_get_campaign_summary` | read | Get campaign summary |
| `moosend_get_campaign_activity` | read | Get campaign recipient activity |
| `moosend_get_campaign_link_activity` | read | Get campaign link clicks |
| `moosend_get_campaign_activity_by_location` | read | Get campaign opens by country |
| `moosend_list_senders` | read | List campaign senders |
| `moosend_create_mailing_list` | **write** | Create a mailing list |
| `moosend_add_subscriber` | **write** | Add or update a subscriber |
| `moosend_update_subscriber` | **write** | Update a subscriber |
| `moosend_unsubscribe_subscriber` | **write** | Unsubscribe from a list |
| `moosend_create_draft_campaign` | **write** | Create a draft campaign |
| `moosend_usage_status` | meta | Usage status (free-tier meter) |
| `moosend_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT © usefulapi. Not affiliated with or endorsed by Moosend.
