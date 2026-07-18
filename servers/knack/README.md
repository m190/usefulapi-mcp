# Knack MCP by usefulapi

Connect Claude, Cursor, or any MCP client to your Knack no-code database — read, create, update and delete records, and inspect objects, fields and schema.

**Live endpoint:** `https://knack.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/knack

## Add to Claude

```json
{
  "mcpServers": {
    "knack": {
      "url": "https://knack.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste **two** credentials — your **Application ID** and **REST API Key** (Knack Builder → Settings → API & Code). They're sent as the `X-Knack-Application-Id` and `X-Knack-REST-API-Key` headers on every request.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `knack_get_application` | read | Get application schema |
| `knack_list_objects` | read | List objects (tables) |
| `knack_list_fields` | read | List fields for an object |
| `knack_list_records` | read | List records |
| `knack_get_record` | read | Get a record |
| `knack_request` | read | Raw Knack API GET |
| `knack_create_record` | **write** | Create a record |
| `knack_update_record` | **write** | Update a record |
| `knack_delete_record` | **write** | Delete a record |
| `knack_usage_status` | meta | Usage status (free-tier meter) |
| `knack_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT © usefulapi. Not affiliated with or endorsed by Knack.
