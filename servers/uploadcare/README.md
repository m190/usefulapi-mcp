# Uploadcare MCP by usefulapi

Manage Uploadcare files, groups and webhooks from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Uploadcare public + secret key.

**Live endpoint:** `https://uploadcare.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/uploadcare

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://uploadcare.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http uploadcare https://uploadcare.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=uploadcare&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fuploadcare.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "uploadcare": {
      "url": "https://uploadcare.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/uploadcare/

<!-- connect:end (generated above, edit below) -->

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
| `uploadcare_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `uploadcare_upgrade` (it returns a Stripe Checkout link). Cancel any time with `uploadcare_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `uploadcare_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
