# Tapfiliate MCP by usefulapi

Use your [Tapfiliate](https://tapfiliate.com) account from Claude, Cursor, or any MCP client. Read programs, affiliates, conversions, commissions and payments, and create or approve records. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://tapfiliate.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://tapfiliate.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http tapfiliate https://tapfiliate.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=tapfiliate&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftapfiliate.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "tapfiliate": {
      "url": "https://tapfiliate.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Tapfiliate credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/tapfiliate/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Tapfiliate API key** (in Tapfiliate under **Profile Settings**, at the bottom of the page). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `tapfiliate_list_programs` | read | List programs |
| `tapfiliate_get_program` | read | Get program |
| `tapfiliate_list_program_affiliates` | read | List affiliates in a program |
| `tapfiliate_list_affiliates` | read | List affiliates |
| `tapfiliate_get_affiliate` | read | Get affiliate |
| `tapfiliate_get_affiliate_balances` | read | Get affiliate balances |
| `tapfiliate_list_affiliate_payments` | read | List affiliate payments |
| `tapfiliate_list_affiliate_groups` | read | List affiliate groups |
| `tapfiliate_list_conversions` | read | List conversions |
| `tapfiliate_get_conversion` | read | Get conversion |
| `tapfiliate_list_commissions` | read | List commissions |
| `tapfiliate_get_commission` | read | Get commission |
| `tapfiliate_list_customers` | read | List customers |
| `tapfiliate_get_customer` | read | Get customer |
| `tapfiliate_list_clicks` | read | List clicks |
| `tapfiliate_get_click` | read | Get click details |
| `tapfiliate_list_balances` | read | List balances |
| `tapfiliate_list_payments` | read | List payments |
| `tapfiliate_get_payment` | read | Get payment |
| `tapfiliate_create_affiliate` | **write** | Create affiliate |
| `tapfiliate_create_customer` | **write** | Create customer |
| `tapfiliate_create_conversion` | **write** | Create conversion |
| `tapfiliate_set_affiliate_group` | **write** | Set affiliate group |
| `tapfiliate_approve_commission` | **write** | Approve commission |
| `tapfiliate_disapprove_commission` | **write** | Disapprove commission |
| `tapfiliate_usage_status` | meta | Usage status (free-tier meter) |
| `tapfiliate_request_feature` | meta | Request a missing feature |
| `tapfiliate_upgrade` | meta | Upgrade to Pro or Pro+ |
| `tapfiliate_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `tapfiliate_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `tapfiliate_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `tapfiliate_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
