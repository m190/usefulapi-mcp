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
| `storerocket_upgrade` | meta | Upgrade to Pro or Pro+ |
| `storerocket_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `storerocket_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `storerocket_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `storerocket_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by StoreRocket.
