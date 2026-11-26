# ImageKit MCP by usefulapi

Use your [ImageKit](https://imagekit.io) account from Claude, Cursor, or any MCP client. Search and read media files, manage tags, and upload, move or rename files. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://imagekit.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://imagekit.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http imagekit https://imagekit.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=imagekit&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fimagekit.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "imagekit": {
      "url": "https://imagekit.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ImageKit credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/imagekit/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **ImageKit private API key** (starts with private_) from Developer options → API keys. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `imagekit_list_files` | read | List or search media files |
| `imagekit_get_file` | read | Get file details |
| `imagekit_get_file_metadata` | read | Get file metadata |
| `imagekit_get_metadata_from_url` | read | Get metadata from a remote image URL |
| `imagekit_list_file_versions` | read | List file versions |
| `imagekit_list_custom_metadata_fields` | read | List custom metadata fields |
| `imagekit_get_usage` | read | Get account usage |
| `imagekit_get_bulk_job_status` | read | Get bulk job status |
| `imagekit_get_purge_status` | read | Get CDN purge status |
| `imagekit_upload_file` | **write** | Upload a file |
| `imagekit_update_file_details` | **write** | Update file tags or publication |
| `imagekit_add_tags` | **write** | Add tags to files |
| `imagekit_remove_tags` | **write** | Remove tags from files |
| `imagekit_move_file` | **write** | Move a file to another folder |
| `imagekit_rename_file` | **write** | Rename a file |
| `imagekit_usage_status` | meta | Usage status (free-tier meter) |
| `imagekit_request_feature` | meta | Request a missing feature |
| `imagekit_upgrade` | meta | Upgrade to Pro or Pro+ |
| `imagekit_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `imagekit_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `imagekit_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `imagekit_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
