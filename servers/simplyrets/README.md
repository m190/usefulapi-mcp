# SimplyRETS MCP by usefulapi

Use [SimplyRETS](https://simplyrets.com) from Claude, Cursor, or any MCP client — search MLS listings and open houses from your SimplyRETS feed, read single listings, agents and offices (agents and offices need the respective SimplyRETS API add-ons), plus listing and market analytics (all read-only).
Hosted, no local install: connect with your SimplyRETS API key and secret.

**Live endpoint:** `https://simplyrets.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/simplyrets

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://simplyrets.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http simplyrets https://simplyrets.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=simplyrets&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsimplyrets.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "simplyrets": {
      "url": "https://simplyrets.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SimplyRETS credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/simplyrets/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `simplyrets_get_account_info` | read | Get account info |
| `simplyrets_get_feed_metadata` | read | Get feed metadata |
| `simplyrets_search_listings` | read | Search listings |
| `simplyrets_get_listing` | read | Get listing |
| `simplyrets_list_open_houses` | read | List open houses |
| `simplyrets_get_open_house` | read | Get open house |
| `simplyrets_list_agents` | read | List agents |
| `simplyrets_list_offices` | read | List offices |
| `simplyrets_get_market_analytics` | read | Get market analytics |
| `simplyrets_get_listing_analytics` | read | Get listing analytics |
| `simplyrets_usage_status` | meta | Usage status (free-tier meter) |
| `simplyrets_request_feature` | meta | Request a missing feature |
| `simplyrets_upgrade` | meta | Upgrade to Pro (unlimited) |
| `simplyrets_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API key) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `simplyrets_upgrade` (it returns a Stripe Checkout link). Cancel any time with `simplyrets_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `simplyrets_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by SimplyRETS.
