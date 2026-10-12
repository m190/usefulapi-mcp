# 17TRACK MCP by usefulapi

Use [17TRACK](https://www.17track.net) from Claude, Cursor, or any MCP client — tracking numbers, tracking events, quota and carrier changes across 3000+ carriers.
Hosted, no local install: connect with your own 17TRACK credentials.

**Live endpoint:** `https://17track.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/17track

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://17track.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http 17track https://17track.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=17track&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2F17track.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "17track": {
      "url": "https://17track.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your 17TRACK credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/17track/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `track17_get_quota` | read | Get tracking quota |
| `track17_list_tracking_numbers` | read | List registered tracking numbers |
| `track17_get_tracking` | read | Get tracking details |
| `track17_realtime_lookup` | **write** | Real-time lookup of one number |
| `track17_register_numbers` | **write** | Register tracking numbers |
| `track17_change_carrier` | **write** | Change the carrier of a number |
| `track17_change_tag` | **write** | Change the tag of a number |
| `track17_stop_tracking` | **write** | Stop tracking numbers |
| `track17_retrack` | **write** | Restart tracking of stopped numbers |
| `track17_usage_status` | meta | Usage status (free-tier meter) |
| `track17_request_feature` | meta | Request a missing feature |
| `track17_upgrade` | meta | Upgrade to Pro (unlimited) |
| `track17_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `track17_upgrade` (it returns a Stripe Checkout link). Cancel any time with `track17_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `track17_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by 17TRACK.
