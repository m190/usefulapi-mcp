# Rivo MCP by usefulapi

Use your [Rivo](https://rivo.io) account from Claude, Cursor, or any MCP client. Read customers, points, rewards, VIP tiers and referrals, and adjust points, turn rewards on or off, and change favorite products. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://rivo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://rivo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http rivo https://rivo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=rivo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frivo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "rivo": {
      "url": "https://rivo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Rivo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/rivo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Rivo REST API key** (Settings → Developer Toolkit → REST API keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `rivo_get_shop` | read | Get shop details |
| `rivo_list_customers` | read | List customers |
| `rivo_get_customer` | read | Get a customer |
| `rivo_list_points_events` | read | List points events |
| `rivo_list_points_redemptions` | read | List points redemptions |
| `rivo_get_points_redemption` | read | Get a points redemption |
| `rivo_list_rewards` | read | List rewards |
| `rivo_get_reward` | read | Get a reward |
| `rivo_list_vip_tiers` | read | List VIP tiers |
| `rivo_list_referrals` | read | List referrals |
| `rivo_list_favorite_products` | read | List a customer's favourite products |
| `rivo_adjust_customer_points` | **write** | Add or remove customer points |
| `rivo_set_reward_enabled` | **write** | Enable or disable a reward |
| `rivo_add_favorite_product` | **write** | Add a favourite product |
| `rivo_remove_favorite_product` | **write** | Remove a favourite product |
| `rivo_usage_status` | meta | Usage status (free-tier meter) |
| `rivo_request_feature` | meta | Request a missing feature |
| `rivo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `rivo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `rivo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `rivo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `rivo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
