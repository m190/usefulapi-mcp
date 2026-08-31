# OpenPhone MCP by usefulapi

Send and read OpenPhone messages, calls, contacts and phone numbers. Hosted, no local install.

**Live endpoint:** `https://openphone.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "openphone": {
      "url": "https://openphone.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **OpenPhone credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `openphone_list_phone_numbers` | read | List phone numbers |
| `openphone_list_users` | read | List users |
| `openphone_list_contacts` | read | List contacts |
| `openphone_get_contact` | read | Get a contact |
| `openphone_get_contact_custom_fields` | read | Get contact custom fields |
| `openphone_list_conversations` | read | List conversations |
| `openphone_list_messages` | read | List messages |
| `openphone_get_message` | read | Get a message |
| `openphone_send_message` | **write** | Send a text message |
| `openphone_list_calls` | read | List calls |
| `openphone_get_call` | read | Get a call |
| `openphone_get_call_summary` | read | Get a call summary |
| `openphone_get_call_transcript` | read | Get a call transcript |
| `openphone_get_call_recordings` | read | Get call recordings |
| `openphone_list_webhooks` | read | List webhooks |
| `openphone_create_contact` | **write** | Create a contact |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
