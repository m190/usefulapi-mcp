# Channel Pilot Pro MCP by usefulapi

Use your [Channel Pilot Pro](https://channelpilot.com) account from Claude, Cursor, or any MCP client. It reads the Product API feeds of a shop and their status, and it creates, updates or deletes products in a feed. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://channel-pilot-pro.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://channel-pilot-pro.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http channel-pilot-pro https://channel-pilot-pro.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=channel-pilot-pro&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fchannel-pilot-pro.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "channel-pilot-pro": {
      "url": "https://channel-pilot-pro.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Channel Pilot Pro credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/channel-pilot-pro/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **API Merchant ID** and **Product API Token** (in Channel Pilot Pro under Shop Settings, Shop Credentials; the pair works for one shop only). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `channelpilotpro_list_feeds` | read | List Product API feeds |
| `channelpilotpro_get_feed_status` | read | Get feed status |
| `channelpilotpro_get_feed_data` | read | Read feed data by offset |
| `channelpilotpro_upsert_products` | **write** | Create or update products (PATCH) |
| `channelpilotpro_delete_products` | **write** | Delete products |
| `channelpilotpro_usage_status` | meta | Usage status (free-tier meter) |
| `channelpilotpro_request_feature` | meta | Request a missing feature |
| `channelpilotpro_upgrade` | meta | Upgrade to Pro or Pro+ |
| `channelpilotpro_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `channelpilotpro_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `channelpilotpro_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `channelpilotpro_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
