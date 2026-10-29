# ScrapeOwl MCP by usefulapi

https://scrapeowl.usefulapi.io/mcp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://scrapeowl.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http scrapeowl https://scrapeowl.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=scrapeowl&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fscrapeowl.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "scrapeowl": {
      "url": "https://scrapeowl.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ScrapeOwl credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/scrapeowl/

<!-- connect:end (generated above, edit below) -->

Connect with a ScrapeOwl API key. Page retrieval can consume vendor credits and requires confirmation.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `scrapeowl_get_usage` | read | Get ScrapeOwl usage |
| `scrapeowl_scrape_page` | **write** | Scrape page HTML |
| `scrapeowl_extract_elements` | **write** | Extract page elements |
| `scrapeowl_render_page` | **write** | Render page HTML |
| `scrapeowl_usage_status` | meta | Usage status (free-tier meter) |
| `scrapeowl_request_feature` | meta | Request a missing feature |
| `scrapeowl_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `scrapeowl_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `scrapeowl_upgrade` (it returns a Stripe Checkout link). Cancel any time with `scrapeowl_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `scrapeowl_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
