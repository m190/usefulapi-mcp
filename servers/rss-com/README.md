# RSS.com MCP by usefulapi

Use your [RSS.com](https://rss.com) account from Claude, Cursor, or any MCP client. Read podcasts and episodes, and create and edit episodes, chapters and transcripts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://rss-com.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://rss-com.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http rss-com https://rss-com.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=rss-com&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frss-com.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "rss-com": {
      "url": "https://rss-com.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your RSS.com credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/rss-com/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **RSS.com API key** (RSS.com → API Access). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `rsscom_list_podcasts` | read | List podcasts |
| `rsscom_get_podcast` | read | Get a podcast |
| `rsscom_list_episodes` | read | List episodes |
| `rsscom_get_episode` | read | Get an episode |
| `rsscom_create_episode` | **write** | Create an episode |
| `rsscom_edit_episode` | **write** | Edit an episode |
| `rsscom_publish_episode` | **write** | Publish an episode |
| `rsscom_unschedule_episode` | **write** | Unschedule an episode |
| `rsscom_list_chapters` | read | List chapters |
| `rsscom_create_chapter` | **write** | Create a chapter |
| `rsscom_edit_chapter` | **write** | Edit a chapter |
| `rsscom_list_soundbites` | read | List soundbites |
| `rsscom_create_soundbite` | **write** | Create a soundbite |
| `rsscom_edit_soundbite` | **write** | Edit a soundbite |
| `rsscom_list_midrolls` | read | List midroll ad breaks |
| `rsscom_create_midroll` | **write** | Create a midroll ad break |
| `rsscom_edit_midroll` | **write** | Move a midroll ad break |
| `rsscom_get_transcript` | read | Get a transcript |
| `rsscom_save_transcript` | **write** | Save a transcript |
| `rsscom_generate_transcript` | **write** | Generate a transcript |
| `rsscom_list_keywords` | read | List keywords |
| `rsscom_create_keyword` | **write** | Create a keyword |
| `rsscom_search_locations` | read | Search locations |
| `rsscom_list_categories` | read | List Apple categories |
| `rsscom_list_txt_records` | read | List TXT records |
| `rsscom_create_txt_record` | **write** | Create a TXT record |
| `rsscom_edit_txt_record` | **write** | Edit a TXT record |
| `rsscom_create_presigned_upload` | **write** | Create an upload URL |
| `rsscom_usage_status` | meta | Usage status (free-tier meter) |
| `rsscom_request_feature` | meta | Request a missing feature |
| `rsscom_upgrade` | meta | Upgrade to Pro or Pro+ |
| `rsscom_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `rsscom_upgrade` (it returns a Stripe Checkout link). Cancel any time with `rsscom_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `rsscom_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
