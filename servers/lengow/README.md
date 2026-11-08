# Lengow MCP by usefulapi

Use your [Lengow](https://lengow.com) account from Claude, Cursor, or any MCP client. It reads marketplace orders, marketplace actions and connected marketplaces, and it can set your internal order id and send accept or ship actions. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://lengow.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://lengow.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http lengow https://lengow.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=lengow&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flengow.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "lengow": {
      "url": "https://lengow.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Lengow credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/lengow/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Lengow access_token** and **Lengow secret** (in Lengow under Company settings, API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `lengow_list_orders` | read | List orders |
| `lengow_list_order_actions` | read | List order actions |
| `lengow_list_marketplaces` | read | List marketplaces |
| `lengow_set_merchant_order_id` | **write** | Set merchant order id |
| `lengow_create_order_action` | **write** | Create an order action |
| `lengow_usage_status` | meta | Usage status (free-tier meter) |
| `lengow_request_feature` | meta | Request a missing feature |
| `lengow_upgrade` | meta | Upgrade to Pro or Pro+ |
| `lengow_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `lengow_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `lengow_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `lengow_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
