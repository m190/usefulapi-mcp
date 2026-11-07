# Referrals.com MCP by usefulapi

Use your [Referrals.com](https://referrals.com) account from Claude, Cursor, or any MCP client. Read brands, campaigns, participants and stats, and create or update brands and campaigns. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://referrals-com.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://referrals-com.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http referrals-com https://referrals-com.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=referrals-com&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Freferrals-com.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "referrals-com": {
      "url": "https://referrals-com.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Referrals.com credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/referrals-com/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Referrals.com API key** (in the Referrals.com dashboard, under your account's API settings). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `referrals_com_get_profile` | read | Get account profile |
| `referrals_com_list_brands` | read | List brands |
| `referrals_com_get_brand` | read | Get brand |
| `referrals_com_get_brand_stats` | read | Get brand stats |
| `referrals_com_create_brand` | **write** | Create brand |
| `referrals_com_update_brand` | **write** | Update brand |
| `referrals_com_list_campaigns` | read | List campaigns |
| `referrals_com_get_campaign` | read | Get campaign |
| `referrals_com_get_campaign_stats` | read | Get campaign stats |
| `referrals_com_create_campaign` | **write** | Create campaign |
| `referrals_com_update_campaign` | **write** | Update campaign |
| `referrals_com_list_participants` | read | List participants |
| `referrals_com_get_participant` | read | Get participant |
| `referrals_com_list_webhooks` | read | List webhooks |
| `referrals_com_get_lander` | read | Get lander settings |
| `referrals_com_usage_status` | meta | Usage status (free-tier meter) |
| `referrals_com_request_feature` | meta | Request a missing feature |
| `referrals_com_upgrade` | meta | Upgrade to Pro or Pro+ |
| `referrals_com_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `referrals_com_upgrade` (it returns a Stripe Checkout link). Cancel any time with `referrals_com_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `referrals_com_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
