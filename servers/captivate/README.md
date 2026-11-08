# Captivate MCP by usefulapi

Use your [Captivate](https://www.captivate.fm) account from Claude, Cursor, or any MCP client. Read shows, episodes, scheduled episodes, media files and download analytics, and update episode text. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://captivate.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://captivate.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http captivate https://captivate.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=captivate&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcaptivate.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "captivate": {
      "url": "https://captivate.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Captivate credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/captivate/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Captivate user ID** and **Captivate API token** (Captivate dashboard → user settings → API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `captivate_get_user` | read | Get a user |
| `captivate_list_user_shows` | read | List a user's shows |
| `captivate_get_show` | read | Get a show |
| `captivate_get_show_feed` | read | Get a show RSS feed URL |
| `captivate_list_episodes` | read | List episodes of a show |
| `captivate_list_scheduled_episodes` | read | List scheduled episodes |
| `captivate_get_episode` | read | Get an episode |
| `captivate_get_media` | read | Get a media file |
| `captivate_list_show_media` | read | List media of a show |
| `captivate_get_overview_analytics` | read | Podcast overview analytics |
| `captivate_get_episode_overview_analytics` | read | Episode overview analytics |
| `captivate_get_average_analytics` | read | Podcast average downloads |
| `captivate_get_total_analytics` | read | Podcast all-time downloads |
| `captivate_get_episode_total_analytics` | read | Episode all-time downloads |
| `captivate_get_monthly_analytics` | read | Podcast monthly downloads |
| `captivate_get_episode_monthly_analytics` | read | Episode monthly downloads |
| `captivate_update_episode` | **write** | Update an episode's text |
| `captivate_usage_status` | meta | Usage status (free-tier meter) |
| `captivate_request_feature` | meta | Request a missing feature |
| `captivate_upgrade` | meta | Upgrade to Pro or Pro+ |
| `captivate_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `captivate_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `captivate_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `captivate_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
