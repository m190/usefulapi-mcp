# Bird MCP by usefulapi

Read your Bird SMS, WhatsApp, email, contacts and audiences from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Bird API key.

**Live endpoint:** `https://bird.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/bird

## Add to Claude

```json
{
  "mcpServers": {
    "bird": {
      "url": "https://bird.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Bird API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bird_list_contacts` | read | List contacts |
| `bird_get_contact` | read | Get contact |
| `bird_list_contact_properties` | read | List contact properties |
| `bird_list_audiences` | read | List audiences |
| `bird_get_audience` | read | Get audience |
| `bird_list_audience_contacts` | read | List audience contacts |
| `bird_list_sms_messages` | read | List sms messages |
| `bird_get_sms_message` | read | Get sms message |
| `bird_list_sms_templates` | read | List sms templates |
| `bird_list_whatsapp_messages` | read | List whatsapp messages |
| `bird_get_whatsapp_message` | read | Get whatsapp message |
| `bird_list_whatsapp_templates` | read | List whatsapp templates |
| `bird_list_email_messages` | read | List email messages |
| `bird_get_email_message` | read | Get email message |
| `bird_create_contact` | **write** | Create contact |
| `bird_create_audience` | **write** | Create audience |
| `bird_usage_status` | meta | Usage status (free-tier meter) |
| `bird_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
