# Zenserp MCP by usefulapi

Use [Zenserp](https://zenserp.com) from Claude, Cursor, or any MCP client — search results for web, images, news, videos, maps, shopping, YouTube, reverse image, jobs, hotels, flights and Google Trends, AI answer engines (by plan), plus account status, engines, languages, countries and locations. Each search spends requests from your own Zenserp plan.
Hosted, no local install: connect with your own Zenserp credentials.

**Live endpoint:** `https://zenserp.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/zenserp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://zenserp.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http zenserp https://zenserp.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=zenserp&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fzenserp.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "zenserp": {
      "url": "https://zenserp.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Zenserp credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/zenserp/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `zenserp_get_status` | read | Get remaining requests |
| `zenserp_search` | **write** | Search the web (SERP) |
| `zenserp_image_search` | **write** | Search Google Images |
| `zenserp_news_search` | **write** | Search Google News |
| `zenserp_video_search` | **write** | Search Google Videos |
| `zenserp_maps_search` | **write** | Search Google local and maps |
| `zenserp_shopping_search` | **write** | Search Google Shopping |
| `zenserp_youtube_search` | **write** | Search YouTube |
| `zenserp_reverse_image_search` | **write** | Reverse image search |
| `zenserp_jobs_search` | **write** | Search Google Jobs |
| `zenserp_shopping_product` | **write** | Get Google Shopping product page |
| `zenserp_hotels` | **write** | Search Google Hotels |
| `zenserp_flights` | **write** | Search Google Flights |
| `zenserp_trends` | **write** | Get Google Trends |
| `zenserp_answer_engine` | **write** | Ask an AI answer engine |
| `zenserp_list_search_engines` | read | List search engines |
| `zenserp_list_languages` | read | List languages (hl) |
| `zenserp_list_countries` | read | List countries (gl) |
| `zenserp_search_locations` | read | Search geo locations |
| `zenserp_usage_status` | meta | Usage status (free-tier meter) |
| `zenserp_request_feature` | meta | Request a missing feature |
| `zenserp_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `zenserp_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API key) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `zenserp_upgrade` (it returns a Stripe Checkout link). Cancel any time with `zenserp_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `zenserp_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Zenserp.
