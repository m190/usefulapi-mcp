# BigMarker MCP by usefulapi

Use your [BigMarker](https://www.bigmarker.com) account from Claude, Cursor, or any MCP client. Read conferences, channels, registrants, attendees, no-shows, presenters and recordings, and register or cancel people. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://bigmarker.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bigmarker.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bigmarker https://bigmarker.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bigmarker&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbigmarker.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bigmarker": {
      "url": "https://bigmarker.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your BigMarker credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bigmarker/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **BigMarker API key** (BigMarker → Settings → API keys). If the page shows no key, ask BigMarker support to enable API access. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bigmarker_list_conferences` | read | List conferences |
| `bigmarker_get_conference` | read | Get a conference |
| `bigmarker_search_conferences` | read | Search conferences |
| `bigmarker_list_channels` | read | List channels |
| `bigmarker_get_channel` | read | Get a channel |
| `bigmarker_list_channel_conferences` | read | List channel conferences with stats |
| `bigmarker_list_registrations` | read | List registrants of a conference |
| `bigmarker_list_attendees` | read | List attendees of a conference |
| `bigmarker_list_no_shows` | read | List no-shows of a conference |
| `bigmarker_get_event_summary` | read | Get a conference summary |
| `bigmarker_list_presenters` | read | List presenters of a conference |
| `bigmarker_get_recording` | read | Get recording status |
| `bigmarker_list_recording_views` | read | List recording views |
| `bigmarker_register_user` | **write** | Register a person for a conference |
| `bigmarker_cancel_registration` | **write** | Cancel a registration |
| `bigmarker_usage_status` | meta | Usage status (free-tier meter) |
| `bigmarker_request_feature` | meta | Request a missing feature |
| `bigmarker_upgrade` | meta | Upgrade to Pro or Pro+ |
| `bigmarker_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `bigmarker_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `bigmarker_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `bigmarker_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
