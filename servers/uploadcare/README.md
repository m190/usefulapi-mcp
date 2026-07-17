# Uploadcare MCP by usefulapi

Manage Uploadcare files, groups and webhooks from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Uploadcare public + secret key.

**Live endpoint:** `https://uploadcare.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/uploadcare

## Add to Claude

```json
{
  "mcpServers": {
    "uploadcare": {
      "url": "https://uploadcare.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Uploadcare public + secret keys. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `uploadcare_get_project` | read | Get project |
| `uploadcare_list_files` | read | List files |
| `uploadcare_get_file` | read | Get file |
| `uploadcare_get_file_metadata` | read | Get file metadata |
| `uploadcare_list_groups` | read | List groups |
| `uploadcare_get_group` | read | Get group |
| `uploadcare_list_webhooks` | read | List webhooks |
| `uploadcare_upload_from_url` | **write** | Upload file from URL |
| `uploadcare_store_file` | **write** | Store file |
| `uploadcare_delete_file` | **write** | Delete file |
| `uploadcare_create_webhook` | **write** | Create webhook |
| `uploadcare_usage_status` | meta | Usage status (free-tier meter) |
| `uploadcare_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
