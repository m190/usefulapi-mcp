# EmailOctopus MCP by usefulapi

Manage [EmailOctopus](https://emailoctopus.com) from Claude, Cursor, or any MCP client — manage lists, contacts and campaigns, and read campaign performance reports. Hosted, no local install: connect with your EmailOctopus API token.

**Live endpoint:** `https://emailoctopus.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "emailoctopus": {
      "url": "https://emailoctopus.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **EmailOctopus API token** (EmailOctopus → Account → Integrations & API).
It's validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `emailoctopus_list_lists` | read | List lists |
| `emailoctopus_get_list` | read | Get list |
| `emailoctopus_list_contacts` | read | List contacts |
| `emailoctopus_get_contact` | read | Get contact |
| `emailoctopus_list_campaigns` | read | List campaigns |
| `emailoctopus_get_campaign` | read | Get campaign |
| `emailoctopus_get_campaign_report` | read | Get campaign report |
| `emailoctopus_get_campaign_links_report` | read | Get campaign links report |
| `emailoctopus_create_list` | **write** | Create list |
| `emailoctopus_update_list` | **write** | Update list |
| `emailoctopus_create_contact` | **write** | Create contact |
| `emailoctopus_update_contact` | **write** | Update contact |
| `emailoctopus_delete_contact` | **write** | Delete contact |
| `emailoctopus_usage_status` | meta | Usage status (free-tier meter) |
| `emailoctopus_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
