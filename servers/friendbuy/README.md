# Friendbuy MCP by usefulapi

Use your [Friendbuy](https://www.friendbuy.com) account from Claude, Cursor, or any MCP client. Read referral analytics, customers, loyalty balances and coupons, and record purchases or send referral share emails. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://friendbuy.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://friendbuy.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http friendbuy https://friendbuy.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=friendbuy&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffriendbuy.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "friendbuy": {
      "url": "https://friendbuy.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Friendbuy credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/friendbuy/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Friendbuy access key** and **secret key**, which Friendbuy support issues for your merchant account. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `friendbuy_list_shares` | read | List advocate shares |
| `friendbuy_list_clicks` | read | List valid referral clicks |
| `friendbuy_list_account_signups` | read | List referral sign-ups |
| `friendbuy_list_purchases` | read | List referral purchases |
| `friendbuy_list_widget_views` | read | List widget views |
| `friendbuy_list_email_captures` | read | List email captures |
| `friendbuy_get_email_metrics` | read | Get email metrics |
| `friendbuy_list_distributed_advocate_rewards` | read | List advocate rewards |
| `friendbuy_list_distributed_friend_incentives` | read | List friend incentives |
| `friendbuy_list_referral_rewards` | read | List referral rewards |
| `friendbuy_list_loyalty_ledger_heads` | read | List loyalty ledger heads |
| `friendbuy_get_customer` | read | Get a customer |
| `friendbuy_get_member_tier` | read | Get a member tier |
| `friendbuy_get_ledger_balance` | read | Get a loyalty balance |
| `friendbuy_get_custom_ledger_balance` | read | Get a loyalty balance by custom id |
| `friendbuy_list_ledger_entries` | read | List loyalty ledger entries |
| `friendbuy_get_user_data` | read | Get stored personal data |
| `friendbuy_get_referral_status` | read | Check a referral code |
| `friendbuy_list_coupons` | read | List reward coupons |
| `friendbuy_list_redemption_options` | read | List redemption options |
| `friendbuy_track_purchase` | **write** | Record a purchase |
| `friendbuy_track_account_signup` | **write** | Record an account sign-up |
| `friendbuy_track_custom_event` | **write** | Record a custom event |
| `friendbuy_upsert_customer` | **write** | Add a customer record |
| `friendbuy_create_personal_referral_link` | **write** | Create a personal referral link |
| `friendbuy_send_share_email` | **write** | Send a referral share email |
| `friendbuy_usage_status` | meta | Usage status (free-tier meter) |
| `friendbuy_request_feature` | meta | Request a missing feature |
| `friendbuy_upgrade` | meta | Upgrade to Pro or Pro+ |
| `friendbuy_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `friendbuy_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `friendbuy_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `friendbuy_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
