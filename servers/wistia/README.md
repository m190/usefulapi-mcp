# Wistia MCP by usefulapi

Use your [Wistia](https://wistia.com) account from Claude, Cursor, or any MCP client. Read media, folders, captions, stats and analytics, and update, move, archive or tag media. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://wistia.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://wistia.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http wistia https://wistia.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=wistia&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwistia.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "wistia": {
      "url": "https://wistia.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Wistia credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/wistia/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Wistia API token** (Account Settings → API; only the account owner can create one). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `wistia_get_account` | read | Get account |
| `wistia_get_token` | read | Get API token details |
| `wistia_get_account_usage` | read | Get account usage |
| `wistia_get_credit_balance` | read | Get credit balance |
| `wistia_get_account_stats` | read | Get account stats |
| `wistia_get_account_analytics` | read | Get account analytics |
| `wistia_list_media` | read | List media |
| `wistia_show_media` | read | Show media |
| `wistia_get_media_stats` | read | Get media stats |
| `wistia_list_media_captions` | read | List captions |
| `wistia_list_deleted_media` | read | List deleted media |
| `wistia_search` | read | Search |
| `wistia_list_folders` | read | List folders |
| `wistia_show_folder` | read | Show folder |
| `wistia_list_channels` | read | List channels |
| `wistia_list_webinars` | read | List webinars |
| `wistia_list_tags` | read | List tags |
| `wistia_get_background_job` | read | Get background job status |
| `wistia_update_media` | **write** | Update media |
| `wistia_create_folder` | **write** | Create folder |
| `wistia_move_media` | **write** | Move media |
| `wistia_archive_media` | **write** | Archive media |
| `wistia_bulk_tag_media` | **write** | Tag media in bulk |
| `wistia_usage_status` | meta | Usage status (free-tier meter) |
| `wistia_request_feature` | meta | Request a missing feature |
| `wistia_upgrade` | meta | Upgrade to Pro or Pro+ |
| `wistia_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `wistia_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `wistia_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `wistia_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
