# Nylas MCP by usefulapi

Read your email, calendars, events and contacts, and send email or create events, from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Nylas API key.

**Live endpoint:** `https://nylas.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/nylas

## Add to Claude

```json
{
  "mcpServers": {
    "nylas": {
      "url": "https://nylas.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Nylas API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `nylas_list_grants` | read | List grants |
| `nylas_get_grant` | read | Get grant |
| `nylas_list_messages` | read | List messages |
| `nylas_get_message` | read | Get message |
| `nylas_list_folders` | read | List folders |
| `nylas_list_calendars` | read | List calendars |
| `nylas_get_calendar` | read | Get calendar |
| `nylas_list_events` | read | List events |
| `nylas_get_event` | read | Get event |
| `nylas_list_contacts` | read | List contacts |
| `nylas_get_contact` | read | Get contact |
| `nylas_list_drafts` | read | List drafts |
| `nylas_send_message` | **write** | Send message |
| `nylas_create_event` | **write** | Create event |
| `nylas_create_draft` | **write** | Create draft |
| `nylas_usage_status` | meta | Usage status (free-tier meter) |
| `nylas_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
