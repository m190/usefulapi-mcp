# TinyURL MCP by usefulapi

Use [TinyURL](https://tinyurl.com) from Claude, Cursor, or any MCP client — short links, aliases, destinations, tags and click analytics.
Hosted, no local install: connect with your own TinyURL credentials.

**Live endpoint:** `https://tinyurl.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/tinyurl

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://tinyurl.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http tinyurl https://tinyurl.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=tinyurl&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftinyurl.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "tinyurl": {
      "url": "https://tinyurl.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TinyURL credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/tinyurl/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `tinyurl_get_link` | read | Get a short link |
| `tinyurl_list_links` | read | List short links |
| `tinyurl_count_links` | read | Count short links |
| `tinyurl_get_analytics` | read | Get click analytics |
| `tinyurl_create_link` | **write** | Create a short link |
| `tinyurl_update_link` | **write** | Update a short link's alias, tags or settings |
| `tinyurl_change_destination` | **write** | Change a short link's destination URL |
| `tinyurl_set_link_archived` | **write** | Archive or unarchive a short link |
| `tinyurl_usage_status` | meta | Usage status (free-tier meter) |
| `tinyurl_request_feature` | meta | Request a missing feature |
| `tinyurl_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `tinyurl_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `tinyurl_upgrade` (it returns a Stripe Checkout link). Cancel any time with `tinyurl_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `tinyurl_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by TinyURL.
