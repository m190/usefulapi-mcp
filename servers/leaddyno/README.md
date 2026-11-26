# LeadDyno MCP by usefulapi

Use your [LeadDyno](https://leaddyno.com) account from Claude, Cursor, or any MCP client. Read affiliates, purchases, commissions and leads, and approve or reject affiliate applications. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://leaddyno.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://leaddyno.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http leaddyno https://leaddyno.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=leaddyno&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fleaddyno.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "leaddyno": {
      "url": "https://leaddyno.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your LeadDyno credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/leaddyno/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **LeadDyno private API key** (Account → Profile → API Keys; not the public tracking key). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `leaddyno_list_affiliates` | read | List affiliates |
| `leaddyno_get_affiliate` | read | Get affiliate |
| `leaddyno_get_affiliate_by_email` | read | Get affiliate by email |
| `leaddyno_get_affiliate_by_code` | read | Get affiliate by code |
| `leaddyno_list_affiliate_groups` | read | List affiliate groups |
| `leaddyno_list_purchases` | read | List purchases |
| `leaddyno_get_purchase` | read | Get purchase |
| `leaddyno_list_commissions` | read | List commissions |
| `leaddyno_get_commission_totals` | read | Get commission totals |
| `leaddyno_get_lead_by_email` | read | Get lead by email |
| `leaddyno_list_campaigns` | read | List campaigns |
| `leaddyno_approve_affiliate` | **write** | Approve affiliate |
| `leaddyno_reject_affiliate` | **write** | Reject affiliate |
| `leaddyno_usage_status` | meta | Usage status (free-tier meter) |
| `leaddyno_request_feature` | meta | Request a missing feature |
| `leaddyno_upgrade` | meta | Upgrade to Pro or Pro+ |
| `leaddyno_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `leaddyno_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `leaddyno_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `leaddyno_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
