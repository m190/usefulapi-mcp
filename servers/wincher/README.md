# Wincher MCP by usefulapi

Use [Wincher](https://www.wincher.com) from Claude, Cursor, or any MCP client — websites, keyword rankings and history, SERPs, competitors and groups, plus adding keywords and annotations.
Hosted, no local install: connect with your own Wincher credentials.

**Live endpoint:** `https://wincher.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/wincher

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://wincher.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http wincher https://wincher.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=wincher&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwincher.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "wincher": {
      "url": "https://wincher.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Wincher credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/wincher/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `wincher_get_account` | read | Get account and plan limits |
| `wincher_get_user` | read | Get current user |
| `wincher_list_search_engines` | read | List search engines |
| `wincher_search_locations` | read | Search tracking locations |
| `wincher_list_projects` | read | List projects |
| `wincher_list_websites` | read | List tracked websites |
| `wincher_get_website` | read | Get website |
| `wincher_list_keywords` | read | List keywords |
| `wincher_get_keyword` | read | Get keyword |
| `wincher_get_keyword_serps` | read | Get keyword SERPs |
| `wincher_get_keyword_ranking_history` | read | Get keyword ranking history |
| `wincher_get_ranking_history_bulk` | read | Get ranking history for several keywords |
| `wincher_list_groups` | read | List keyword groups |
| `wincher_get_group` | read | Get keyword group |
| `wincher_list_competitors` | read | List competitors |
| `wincher_list_competitor_ranking_summaries` | read | Competitor ranking summaries |
| `wincher_list_competitor_keyword_positions` | read | Competitor keyword positions |
| `wincher_list_annotations` | read | List annotations |
| `wincher_list_segments` | read | List segments |
| `wincher_add_keywords` | **write** | Add keywords to track |
| `wincher_create_group` | **write** | Create keyword group |
| `wincher_create_annotation` | **write** | Create annotation |
| `wincher_usage_status` | meta | Usage status (free-tier meter) |
| `wincher_request_feature` | meta | Request a missing feature |
| `wincher_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `wincher_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `wincher_upgrade` (it returns a Stripe Checkout link). Cancel any time with `wincher_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `wincher_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Wincher.
