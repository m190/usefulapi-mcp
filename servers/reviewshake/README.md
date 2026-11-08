# Reviewshake MCP by usefulapi

Use your [Reviewshake](https://reviewshake.com) account from Claude, Cursor, or any MCP client. Read reviews, locations and widgets, and subscribe or unsubscribe customers from review campaigns. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://reviewshake.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://reviewshake.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http reviewshake https://reviewshake.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=reviewshake&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Freviewshake.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "reviewshake": {
      "url": "https://reviewshake.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Reviewshake credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/reviewshake/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Reviewshake subdomain** (the yourname part of yourname.reviewshake.com) and your **Reviewshake API key** (Reviewshake → Configurations → General Settings). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `reviewshake_list_locations` | read | List locations |
| `reviewshake_list_reviews` | read | List reviews |
| `reviewshake_list_invitations` | read | List review invitations |
| `reviewshake_list_widgets` | read | List widgets |
| `reviewshake_get_widget` | read | Get a widget |
| `reviewshake_subscribe_customer` | **write** | Subscribe a customer to a campaign |
| `reviewshake_unsubscribe_customer` | **write** | Unsubscribe a customer |
| `reviewshake_create_widget` | **write** | Create a widget |
| `reviewshake_delete_widget` | **write** | Delete a widget |
| `reviewshake_delete_review_sources` | **write** | Delete review sources |
| `reviewshake_usage_status` | meta | Usage status (free-tier meter) |
| `reviewshake_request_feature` | meta | Request a missing feature |
| `reviewshake_upgrade` | meta | Upgrade to Pro or Pro+ |
| `reviewshake_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `reviewshake_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `reviewshake_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `reviewshake_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
