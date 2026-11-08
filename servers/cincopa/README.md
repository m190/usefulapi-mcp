# Cincopa MCP by usefulapi

Use your [Cincopa](https://www.cincopa.com) account from Claude, Cursor, or any MCP client. Read assets, galleries, tags and live streams, update metadata, upload files from public URLs and delete media. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://cincopa.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cincopa.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cincopa https://cincopa.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cincopa&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcincopa.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cincopa": {
      "url": "https://cincopa.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Cincopa credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cincopa/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Cincopa api_token** (Cincopa account → **API Tokens**). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cincopa_check_connection` | read | Check API connection |
| `cincopa_list_assets` | read | List assets |
| `cincopa_get_asset_tags` | read | List asset tags |
| `cincopa_get_upload_status` | read | Get upload status |
| `cincopa_list_galleries` | read | List galleries |
| `cincopa_get_gallery_items` | read | List gallery items |
| `cincopa_list_live_streams` | read | List live streams |
| `cincopa_set_asset_meta` | **write** | Update asset metadata |
| `cincopa_upload_asset_from_url` | **write** | Upload asset from URL |
| `cincopa_delete_asset` | **write** | Delete asset |
| `cincopa_create_gallery` | **write** | Create gallery |
| `cincopa_set_gallery_meta` | **write** | Update gallery metadata |
| `cincopa_add_gallery_items` | **write** | Add assets to gallery |
| `cincopa_remove_gallery_items` | **write** | Remove assets from gallery |
| `cincopa_delete_gallery` | **write** | Delete gallery |
| `cincopa_usage_status` | meta | Usage status (free-tier meter) |
| `cincopa_request_feature` | meta | Request a missing feature |
| `cincopa_upgrade` | meta | Upgrade to Pro or Pro+ |
| `cincopa_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `cincopa_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `cincopa_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `cincopa_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
