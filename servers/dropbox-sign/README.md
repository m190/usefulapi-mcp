# Dropbox Sign MCP by usefulapi

Manage Dropbox Sign e-signatures — signature requests, templates, and signed documents — from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Dropbox Sign API key.

**Live endpoint:** `https://dropbox-sign.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/dropbox-sign

## Add to Claude

```json
{
  "mcpServers": {
    "dropbox-sign": {
      "url": "https://dropbox-sign.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Dropbox Sign API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `dropbox_sign_get_account` | read | Get account |
| `dropbox_sign_get_team` | read | Get team |
| `dropbox_sign_list_signature_requests` | read | List signature requests |
| `dropbox_sign_get_signature_request` | read | Get signature request |
| `dropbox_sign_get_signed_files_url` | read | Get signed files url |
| `dropbox_sign_list_templates` | read | List templates |
| `dropbox_sign_get_template` | read | Get template |
| `dropbox_sign_send_with_template` | **write** | Send with template |
| `dropbox_sign_cancel_signature_request` | **write** | Cancel signature request |
| `dropbox_sign_remind_signature_request` | **write** | Remind signature request |
| `dropbox_sign_usage_status` | meta | Usage status (free-tier meter) |
| `dropbox_sign_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
