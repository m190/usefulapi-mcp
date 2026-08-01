# Aircall MCP by usefulapi

Use your [Aircall](https://aircall.io) account from Claude, Cursor, or any MCP client — read calls, contacts, users, teams and numbers, and tag calls or create and update contacts. Hosted,
no local install: connect with your own credentials.

**Live endpoint:** `https://aircall.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "aircall": {
      "url": "https://aircall.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Aircall API ID** and **API token** (Integrations & API → API Keys). It is validated, stored per-user, and scoped to you — no
keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `aircall_ping` | read | Ping |
| `aircall_get_company` | read | Get company |
| `aircall_list_users` | read | List users |
| `aircall_get_user` | read | Get user |
| `aircall_list_calls` | read | List calls |
| `aircall_get_call` | read | Get call |
| `aircall_search_calls` | read | Search calls |
| `aircall_list_numbers` | read | List numbers |
| `aircall_get_number` | read | Get number |
| `aircall_list_contacts` | read | List contacts |
| `aircall_get_contact` | read | Get contact |
| `aircall_search_contacts` | read | Search contacts |
| `aircall_list_tags` | read | List tags |
| `aircall_get_tag` | read | Get tag |
| `aircall_list_teams` | read | List teams |
| `aircall_get_team` | read | Get team |
| `aircall_get_call_transcription` | read | Get call transcription |
| `aircall_get_call_sentiments` | read | Get call sentiments |
| `aircall_get_call_topics` | read | Get call topics |
| `aircall_get_call_summary` | read | Get call summary |
| `aircall_get_call_action_items` | read | Get call action items |
| `aircall_create_contact` | **write** | Create contact |
| `aircall_update_contact` | **write** | Update contact |
| `aircall_add_call_comment` | **write** | Add call comment |
| `aircall_tag_call` | **write** | Tag call |
| `aircall_usage_status` | meta | Usage status (free-tier meter) |
| `aircall_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
