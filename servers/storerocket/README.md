# StoreRocket MCP by usefulapi

Read StoreRocket projects and store-locator locations; create and update locations.

**Live endpoint:** `https://storerocket.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/storerocket

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://storerocket.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http storerocket https://storerocket.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=storerocket&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstorerocket.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "storerocket": {
      "url": "https://storerocket.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your StoreRocket credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/storerocket/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste a StoreRocket **API token** (create it at storerocket.io → API Tokens, storerocket.io/app/api-tokens, with location:read and optionally location:update/create; the API needs a project on the Business plan).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `storerocket_get_user` | read | Get user |
| `storerocket_list_projects` | read | List projects |
| `storerocket_list_locations` | read | List locations |
| `storerocket_get_location` | read | Get location |
| `storerocket_create_location` | **write** | Create location |
| `storerocket_update_location` | **write** | Update location |
| `storerocket_usage_status` | meta | Usage status (free-tier meter) |
| `storerocket_request_feature` | meta | Request a missing feature |
| `storerocket_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `storerocket_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `storerocket_upgrade` (it returns a Stripe Checkout link). Cancel any time with `storerocket_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `storerocket_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by StoreRocket.
