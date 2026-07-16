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
| `uploadcare_get_project` | read | Get project info |
| `uploadcare_list_files` | read | List files |
| `uploadcare_get_file` | read | Get a file |
| `uploadcare_get_file_metadata` | read | Get file metadata |
| `uploadcare_list_groups` | read | List groups |
| `uploadcare_get_group` | read | Get a group |
| `uploadcare_list_webhooks` | read | List webhooks |
| `uploadcare_upload_from_url` | **write** | Upload a file from a URL |
| `uploadcare_store_file` | **write** | Store a file |
| `uploadcare_delete_file` | **write** | Delete a file |
| `uploadcare_create_webhook` | **write** | Create a webhook |
| `uploadcare_usage_status` | meta | Your tier + usage this month |
| `uploadcare_upgrade` | meta | Upgrade to Pro |

Read tools are annotated `readOnlyHint`; write tools are `destructiveHint` so clients confirm before mutating.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
