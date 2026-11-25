# Keyword.com MCP by usefulapi

Use your [Keyword.com](https://www.keyword.com) account from Claude, Cursor, or any MCP client. Read keyword rankings, rank history, competitors, top pages and share of voice, and add keywords to a project. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://keyword-com.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://keyword-com.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http keyword-com https://keyword-com.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=keyword-com&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fkeyword-com.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "keyword-com": {
      "url": "https://keyword-com.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Keyword.com credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/keyword-com/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Keyword.com API token**, found in Keyword.com under **Settings → Account**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `keyword_get_current_user` | read | Get the current user |
| `keyword_list_projects` | read | List projects |
| `keyword_get_project` | read | Get a project |
| `keyword_list_keywords` | read | List keywords |
| `keyword_get_keyword` | read | Get a keyword |
| `keyword_get_rank_history` | read | Get rank history |
| `keyword_get_keyword_metrics` | read | Get keyword metrics |
| `keyword_get_competitors` | read | Get competitors for a keyword |
| `keyword_list_regions` | read | List tracked regions |
| `keyword_get_top_pages` | read | Get top pages |
| `keyword_get_share_of_voice_history` | read | Get share of voice history |
| `keyword_add_keywords` | **write** | Add keywords to a project |
| `keyword_usage_status` | meta | Usage status (free-tier meter) |
| `keyword_request_feature` | meta | Request a missing feature |
| `keyword_upgrade` | meta | Upgrade to Pro or Pro+ |
| `keyword_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `keyword_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `keyword_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `keyword_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
