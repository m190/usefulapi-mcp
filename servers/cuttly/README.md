# Cuttly MCP by usefulapi

Use [Cuttly](https://cutt.ly) from Claude, Cursor, or any MCP client — shorten links (also on your own branded domain), read click statistics, and edit titles, tags, aliases, expiration, device redirects or delete short links (editing needs a paid Cuttly plan).
Hosted, no local install: connect with your own Cuttly credentials.

**Live endpoint:** `https://cuttly.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/cuttly

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cuttly.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cuttly https://cuttly.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cuttly&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcuttly.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cuttly": {
      "url": "https://cuttly.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Cuttly credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cuttly/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cuttly_shorten_link` | **write** | Shorten link |
| `cuttly_get_link_stats` | read | Get link stats |
| `cuttly_update_link` | **write** | Update link |
| `cuttly_set_link_expiration` | **write** | Set link expiration |
| `cuttly_set_device_redirect` | **write** | Set device redirect |
| `cuttly_delete_link` | **write** | Delete link |
| `cuttly_usage_status` | meta | Usage status (free-tier meter) |
| `cuttly_request_feature` | meta | Request a missing feature |
| `cuttly_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `cuttly_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API key) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `cuttly_upgrade` (it returns a Stripe Checkout link). Cancel any time with `cuttly_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `cuttly_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Cuttly.
