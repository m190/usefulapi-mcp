# Gumlet MCP by usefulapi

Use your [Gumlet](https://www.gumlet.com) account from Claude, Cursor, or any MCP client. Read workspaces, assets, playlists and analytics, and add videos from URLs or build playlists. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://gumlet.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://gumlet.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http gumlet https://gumlet.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=gumlet&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgumlet.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "gumlet": {
      "url": "https://gumlet.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Gumlet credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/gumlet/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Gumlet API key** (the API Keys page on the Gumlet dashboard). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `gumlet_get_user` | read | Get the API user |
| `gumlet_list_workspaces` | read | List workspaces |
| `gumlet_get_workspace` | read | Get a workspace |
| `gumlet_list_assets` | read | List assets |
| `gumlet_get_asset` | read | Get an asset |
| `gumlet_list_recycle_bin` | read | List deleted assets |
| `gumlet_list_folders` | read | List folders |
| `gumlet_list_profiles` | read | List encoding profiles |
| `gumlet_get_profile` | read | Get an encoding profile |
| `gumlet_list_playlists` | read | List playlists |
| `gumlet_get_playlist_assets` | read | List assets in a playlist |
| `gumlet_top_streamed_assets` | read | Top streamed assets |
| `gumlet_video_analytics` | read | Video usage analytics |
| `gumlet_viewer_analytics` | read | Viewer analytics |
| `gumlet_list_image_sources` | read | List image sources |
| `gumlet_create_asset` | **write** | Create an asset from a URL |
| `gumlet_update_asset` | **write** | Update asset details |
| `gumlet_select_thumbnail` | **write** | Set thumbnail from a video frame |
| `gumlet_create_folder` | **write** | Create a folder |
| `gumlet_create_playlist` | **write** | Create a playlist |
| `gumlet_add_assets_to_playlist` | **write** | Add assets to a playlist |
| `gumlet_usage_status` | meta | Usage status (free-tier meter) |
| `gumlet_request_feature` | meta | Request a missing feature |
| `gumlet_upgrade` | meta | Upgrade to Pro or Pro+ |
| `gumlet_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `gumlet_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `gumlet_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `gumlet_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
