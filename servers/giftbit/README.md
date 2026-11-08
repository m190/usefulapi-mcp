# Giftbit MCP by usefulapi

Use your [Giftbit](https://www.giftbit.com) account from Claude, Cursor, or any MCP client. Browse reward brands, order, resend and cancel rewards, and check orders and account balances. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://giftbit.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://giftbit.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http giftbit https://giftbit.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=giftbit&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgiftbit.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "giftbit": {
      "url": "https://giftbit.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Giftbit credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/giftbit/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Giftbit API token** (Giftbit → **Account → API keys**) and its **Environment**: **Testbed** or **Production**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `giftbit_list_brands` | read | List reward brands |
| `giftbit_get_brand` | read | Get a reward brand |
| `giftbit_list_regions` | read | List regions |
| `giftbit_list_rewards` | read | List rewards |
| `giftbit_get_reward` | read | Get a reward |
| `giftbit_get_order` | read | Get an order |
| `giftbit_get_link_urls` | read | Get link URLs |
| `giftbit_get_funds` | read | Get account funds |
| `giftbit_create_email_reward` | **write** | Order an email reward |
| `giftbit_create_shortlink_order` | **write** | Order shortlink rewards |
| `giftbit_create_direct_link_order` | **write** | Order direct link rewards |
| `giftbit_create_embedded_reward` | **write** | Order an embedded reward |
| `giftbit_resend_reward` | **write** | Resend a reward |
| `giftbit_cancel_reward` | **write** | Cancel a reward |
| `giftbit_usage_status` | meta | Usage status (free-tier meter) |
| `giftbit_request_feature` | meta | Request a missing feature |
| `giftbit_upgrade` | meta | Upgrade to Pro or Pro+ |
| `giftbit_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `giftbit_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `giftbit_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `giftbit_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
