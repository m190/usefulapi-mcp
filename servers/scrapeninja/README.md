# ScrapeNinja MCP by usefulapi

https://scrapeninja.usefulapi.io/mcp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://scrapeninja.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http scrapeninja https://scrapeninja.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=scrapeninja&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fscrapeninja.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "scrapeninja": {
      "url": "https://scrapeninja.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ScrapeNinja credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/scrapeninja/

<!-- connect:end (generated above, edit below) -->

Connect with a subscribed APIRoad or RapidAPI key. Connecting requires explicit approval for one potentially billable test of https://example.com. Every later page request also requires confirmation.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `scrapeninja_scrape_page` | **write** | Scrape a page with ScrapeNinja |
| `scrapeninja_render_page` | **write** | Render a page with ScrapeNinja |
| `scrapeninja_usage_status` | meta | Usage status (free-tier meter) |
| `scrapeninja_request_feature` | meta | Request a missing feature |
| `scrapeninja_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `scrapeninja_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `scrapeninja_upgrade` (it returns a Stripe Checkout link). Cancel any time with `scrapeninja_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `scrapeninja_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
