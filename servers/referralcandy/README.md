# ReferralCandy MCP by usefulapi

Use your [ReferralCandy](https://www.referralcandy.com) account from Claude, Cursor, or any MCP client. Read campaigns, referrals and rewards, and enroll advocates, record purchases and update rewards. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://referralcandy.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://referralcandy.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http referralcandy https://referralcandy.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=referralcandy&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Freferralcandy.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "referralcandy": {
      "url": "https://referralcandy.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ReferralCandy credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/referralcandy/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **API Access ID** and **API Secret Key** (Account → Profile → API Tokens). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `referralcandy_list_campaigns` | read | List referral campaigns |
| `referralcandy_list_segments` | read | List static segments |
| `referralcandy_list_contacts` | read | List contacts |
| `referralcandy_get_referrer` | read | Get a customer's referrer |
| `referralcandy_list_referrals` | read | List referred purchases |
| `referralcandy_list_rewards` | read | List rewards |
| `referralcandy_list_reward_purchases` | read | List purchases behind a reward |
| `referralcandy_signup_advocate` | **write** | Enroll an advocate |
| `referralcandy_record_purchase` | **write** | Record a purchase |
| `referralcandy_update_referral` | **write** | Mark a referred purchase as returned |
| `referralcandy_add_segment_contact` | **write** | Add a contact to a segment |
| `referralcandy_remove_segment_contact` | **write** | Remove a contact from a segment |
| `referralcandy_send_invite` | **write** | Send the welcome invite |
| `referralcandy_update_reward_status` | **write** | Set a reward's status |
| `referralcandy_usage_status` | meta | Usage status (free-tier meter) |
| `referralcandy_request_feature` | meta | Request a missing feature |
| `referralcandy_upgrade` | meta | Upgrade to Pro or Pro+ |
| `referralcandy_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `referralcandy_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `referralcandy_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `referralcandy_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
