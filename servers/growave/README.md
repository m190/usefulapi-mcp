# Growave MCP by usefulapi

Use your [Growave](https://growave.io) account from Claude, Cursor, or any MCP client. Read loyalty tiers, rewards, reviews, product questions and wishlists of a Shopify shop. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://growave.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://growave.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http growave https://growave.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=growave&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgrowave.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "growave": {
      "url": "https://growave.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Growave credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/growave/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Growave API key** and **API secret** (Growave Admin → Settings → API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `growave_get_program_status` | read | Get loyalty program status |
| `growave_list_tiers` | read | List VIP tiers |
| `growave_get_tier_progress` | read | Get customer tier progress |
| `growave_get_customer` | read | Get customer |
| `growave_get_active_rewards` | read | Get customer active rewards |
| `growave_get_activity_history` | read | Get customer activity history |
| `growave_get_punch_card_progress` | read | Get customer punch card progress |
| `growave_list_earning_rules` | read | List earning rules |
| `growave_list_spending_rules` | read | List spending rules |
| `growave_list_referral_sessions` | read | List referral sessions |
| `growave_list_reviews` | read | List reviews |
| `growave_get_review_aggregates` | read | Get review aggregates |
| `growave_can_create_review` | read | Check if a customer can review |
| `growave_list_questions` | read | List product questions |
| `growave_list_wishlists` | read | List wishlists |
| `growave_get_wishlist_items` | read | Get wishlist items |
| `growave_usage_status` | meta | Usage status (free-tier meter) |
| `growave_request_feature` | meta | Request a missing feature |
| `growave_upgrade` | meta | Upgrade to Pro or Pro+ |
| `growave_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `growave_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `growave_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `growave_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
