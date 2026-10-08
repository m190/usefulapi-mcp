# Textline MCP by usefulapi

Use [Textline](https://www.textline.com) from Claude, Cursor, or any MCP client — read Textline conversations, contacts and reports; send a text, add notes, resolve or transfer.
Hosted, no local install: connect with your own Textline credentials.

**Live endpoint:** `https://textline.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/textline

## Add to Claude

```json
{
  "mcpServers": {
    "textline": {
      "url": "https://textline.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Textline API access token**.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `textline_list_conversations` | read | List conversations |
| `textline_get_conversation` | read | Get conversation messages |
| `textline_get_conversation_by_phone` | read | Get conversation by phone number |
| `textline_list_customers` | read | Search contacts |
| `textline_get_customer` | read | Get contact |
| `textline_get_customer_by_phone` | read | Get contact by phone number |
| `textline_list_custom_fields` | read | List contact custom fields |
| `textline_list_saved_searches` | read | List saved searches |
| `textline_get_organization` | read | Get organization |
| `textline_list_departments` | read | List departments |
| `textline_list_agents` | read | List agents |
| `textline_get_agent` | read | Get agent |
| `textline_list_dispositions` | read | List dispositions |
| `textline_list_surveys` | read | List surveys |
| `textline_list_survey_responses` | read | List survey responses |
| `textline_report_conversations` | read | Report conversations by date |
| `textline_report_posts` | read | Report posts of a conversation |
| `textline_send_message` | **write** | Send SMS message |
| `textline_add_whisper` | **write** | Add internal note (whisper) |
| `textline_resolve_conversation` | **write** | Resolve conversation |
| `textline_transfer_conversation` | **write** | Transfer conversation |
| `textline_create_customer` | **write** | Create contact |
| `textline_update_customer` | **write** | Update contact |
| `textline_usage_status` | meta | Usage status (free-tier meter) |
| `textline_upgrade` | meta | Upgrade to Pro (unlimited) |
| `textline_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `textline_upgrade` (it returns a Stripe Checkout link). Cancel any time with `textline_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `textline_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Textline.
