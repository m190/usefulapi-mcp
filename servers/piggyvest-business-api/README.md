# PiggyVest Business MCP by usefulapi

Use your [PiggyVest Business](https://piggyvestbusiness.com) account from Claude, Cursor, or any MCP client. Read wallets, transactions and bank lookups, and move or schedule money only when you confirm it. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://piggyvest-business-api.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://piggyvest-business-api.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http piggyvest-business-api https://piggyvest-business-api.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=piggyvest-business-api&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpiggyvest-business-api.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "piggyvest-business-api": {
      "url": "https://piggyvest-business-api.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your PiggyVest Business credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/piggyvest-business-api/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **PiggyVest Business secret key** (PiggyVest Business dashboard, under API keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `piggyvest_list_wallets` | read | List API wallets |
| `piggyvest_get_wallet` | read | Get a wallet |
| `piggyvest_get_wallet_accounts` | read | Get wallet funding accounts |
| `piggyvest_get_wallet_interest` | read | Get wallet interest accruals |
| `piggyvest_list_banks` | read | List supported banks |
| `piggyvest_name_enquiry` | read | Resolve an account name |
| `piggyvest_get_transaction_status` | read | Check a transaction by reference |
| `piggyvest_get_transaction` | read | Get a transaction |
| `piggyvest_list_transactions` | read | List transactions |
| `piggyvest_list_customers` | read | List customers |
| `piggyvest_create_wallet` | **write** | Create an API wallet |
| `piggyvest_create_customer` | **write** | Create a customer |
| `piggyvest_reserve_account` | **write** | Reserve a virtual account |
| `piggyvest_transfer_between_wallets` | **write** | Transfer between wallets |
| `piggyvest_transfer_to_bank` | **write** | Transfer to a bank account |
| `piggyvest_schedule_payment` | **write** | Schedule a payment |
| `piggyvest_set_schedule_payment_active` | **write** | Cancel or reactivate a scheduled payment |
| `piggyvest_usage_status` | meta | Usage status (free-tier meter) |
| `piggyvest_request_feature` | meta | Request a missing feature |
| `piggyvest_upgrade` | meta | Upgrade to Pro or Pro+ |
| `piggyvest_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `piggyvest_upgrade` (it returns a Stripe Checkout link). Cancel any time with `piggyvest_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `piggyvest_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
