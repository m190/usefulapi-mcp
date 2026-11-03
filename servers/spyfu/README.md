# SpyFu MCP by usefulapi

Use your [SpyFu](https://www.spyfu.com) account from Claude, Cursor, or any MCP client. Read domain stats, competitors, organic and paid keywords, rankings, top pages and ad history. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://spyfu.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://spyfu.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http spyfu https://spyfu.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=spyfu&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fspyfu.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "spyfu": {
      "url": "https://spyfu.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SpyFu credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/spyfu/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **SpyFu API ID** and a **SpyFu Secret Key** (SpyFu → Account Settings → API Usage). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `spyfu_get_domain_stats` | read | Get latest domain stats |
| `spyfu_get_domain_stats_history` | read | Get full domain stats history |
| `spyfu_get_domain_stats_for_month` | read | Get domain stats for one month |
| `spyfu_get_bulk_domain_stats` | read | Get stats for several domains |
| `spyfu_find_matching_domains` | read | Find domains matching a keyword |
| `spyfu_get_top_competitors` | read | Get top competitors of a domain |
| `spyfu_get_competing_keywords` | read | Get keywords shared by domains |
| `spyfu_get_seo_keywords` | read | Get organic keywords of a domain |
| `spyfu_get_outranking_keywords` | read | Get keywords where a domain outranks another |
| `spyfu_get_top_pages` | read | Get top pages of a domain |
| `spyfu_get_serp_analysis` | read | Analyze the results page of a keyword |
| `spyfu_get_ranking_history` | read | Get ranking changes of a domain over time |
| `spyfu_get_keyword_information` | read | Get metrics for keywords |
| `spyfu_get_related_keywords` | read | Get related keywords |
| `spyfu_get_ppc_keywords` | read | Get paid keywords of a domain |
| `spyfu_get_paid_serps` | read | Get paid search results of a domain |
| `spyfu_get_domain_ad_history` | read | Get ad history of a domain |
| `spyfu_get_term_ad_history` | read | Get ad history of a keyword |
| `spyfu_get_api_usage` | read | Get API usage for a month |
| `spyfu_usage_status` | meta | Usage status (free-tier meter) |
| `spyfu_request_feature` | meta | Request a missing feature |
| `spyfu_upgrade` | meta | Upgrade to Pro or Pro+ |
| `spyfu_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `spyfu_upgrade` (it returns a Stripe Checkout link). Cancel any time with `spyfu_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `spyfu_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
