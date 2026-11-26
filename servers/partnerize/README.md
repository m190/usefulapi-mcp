# Partnerize MCP by usefulapi

Use your [Partnerize](https://www.partnerize.com) account from Claude, Cursor, or any MCP client. Read campaigns, tracking links, conversions and payments, and create or update tracking links. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://partnerize.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://partnerize.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http partnerize https://partnerize.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=partnerize&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpartnerize.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "partnerize": {
      "url": "https://partnerize.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Partnerize credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/partnerize/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **User Application Key**, a **User API key** and your **Partner ID** (Settings → Account settings in the Partnerize console). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `partnerize_get_partner` | read | Get partner account |
| `partnerize_list_campaigns` | read | List campaigns by status |
| `partnerize_list_campaign_creatives` | read | List creatives on a campaign |
| `partnerize_list_campaign_vouchers` | read | List campaign voucher codes |
| `partnerize_list_campaign_commissions` | read | List commissions for a campaign |
| `partnerize_list_brands` | read | Discover brands and campaigns |
| `partnerize_list_invitations` | read | List campaign invitations |
| `partnerize_list_websites` | read | List partner websites |
| `partnerize_list_feeds` | read | List product feeds |
| `partnerize_list_tracking_links` | read | List tracking links |
| `partnerize_get_tracking_link` | read | Get a tracking link |
| `partnerize_get_payment_summary` | read | Get payment summary |
| `partnerize_list_selfbills` | read | List self-billing invoices |
| `partnerize_get_conversions_report` | read | Get conversions report |
| `partnerize_create_tracking_link` | **write** | Create a tracking link |
| `partnerize_update_tracking_link` | **write** | Update a tracking link |
| `partnerize_usage_status` | meta | Usage status (free-tier meter) |
| `partnerize_request_feature` | meta | Request a missing feature |
| `partnerize_upgrade` | meta | Upgrade to Pro or Pro+ |
| `partnerize_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `partnerize_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `partnerize_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `partnerize_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
