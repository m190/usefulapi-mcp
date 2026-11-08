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

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Uploadcare credentials.

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
| `uploadcare_request_feature` | meta | Request a missing feature |
| `uploadcare_upgrade` | meta | Upgrade to Pro or Pro+ |
| `uploadcare_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `uploadcare_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `uploadcare_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `uploadcare_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
