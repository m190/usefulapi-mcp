# GetResponse MCP by usefulapi

Manage GetResponse contacts, campaigns, newsletters and autoresponders. Hosted, no local install.

**Live endpoint:** `https://getresponse.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "getresponse": {
      "url": "https://getresponse.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **GetResponse credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `getresponse_get_account` | read | Get account |
| `getresponse_list_campaigns` | read | List campaigns (lists) |
| `getresponse_get_campaign` | read | Get campaign (list) |
| `getresponse_list_contacts` | read | List contacts |
| `getresponse_get_contact` | read | Get contact |
| `getresponse_list_newsletters` | read | List newsletters |
| `getresponse_get_newsletter` | read | Get newsletter |
| `getresponse_list_autoresponders` | read | List autoresponders |
| `getresponse_list_tags` | read | List tags |
| `getresponse_list_custom_fields` | read | List custom fields |
| `getresponse_list_from_fields` | read | List from-fields |
| `getresponse_create_contact` | **write** | Create contact |
| `getresponse_update_contact` | **write** | Update contact |
| `getresponse_delete_contact` | **write** | Delete contact |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
