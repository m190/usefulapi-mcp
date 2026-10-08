# SlickText MCP by usefulapi

Use [SlickText](https://www.slicktext.com) from Claude, Cursor, or any MCP client — read SlickText contacts, lists, campaigns, analytics and inbox; create and update contacts.
Hosted, no local install: connect with your own SlickText credentials.

**Live endpoint:** `https://slicktext.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/slicktext

## Add to Claude

```json
{
  "mcpServers": {
    "slicktext": {
      "url": "https://slicktext.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **SlickText API key**.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `slicktext_get_brand` | read | Get the brand |
| `slicktext_get_credit_usage` | read | Get message credit usage |
| `slicktext_list_contacts` | read | List contacts |
| `slicktext_find_contact` | read | Find a contact by phone or email |
| `slicktext_get_contact` | read | Get a contact |
| `slicktext_list_custom_fields` | read | List custom fields |
| `slicktext_list_lists` | read | List contact lists |
| `slicktext_get_list` | read | Get a contact list |
| `slicktext_list_list_contacts` | read | List contacts in a list |
| `slicktext_list_segments` | read | List segments |
| `slicktext_list_segment_contacts` | read | List contacts in a segment |
| `slicktext_list_campaigns` | read | List campaigns |
| `slicktext_get_campaign` | read | Get a campaign |
| `slicktext_get_campaign_stats` | read | Get campaign performance |
| `slicktext_get_analytics` | read | Get brand analytics |
| `slicktext_list_keywords` | read | List keywords |
| `slicktext_get_keyword` | read | Get a keyword |
| `slicktext_list_messages` | read | List messages |
| `slicktext_list_conversations` | read | List inbox conversations |
| `slicktext_get_conversation` | read | Get an inbox conversation |
| `slicktext_list_inbox_tags` | read | List inbox tags |
| `slicktext_create_contact` | **write** | Create a contact |
| `slicktext_update_contact` | **write** | Update a contact |
| `slicktext_add_contact_to_lists` | **write** | Add a contact to lists |
| `slicktext_usage_status` | meta | Usage status (free-tier meter) |
| `slicktext_upgrade` | meta | Upgrade to Pro (unlimited) |
| `slicktext_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `slicktext_upgrade` (it returns a Stripe Checkout link). Cancel any time with `slicktext_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `slicktext_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by SlickText.
