# Modern Treasury MCP by usefulapi

Query your Modern Treasury payment-ops and ledger data from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Modern Treasury API key.

**Live endpoint:** `https://modern-treasury.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/modern-treasury

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://modern-treasury.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http modern-treasury https://modern-treasury.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=modern-treasury&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmodern-treasury.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "modern-treasury": {
      "url": "https://modern-treasury.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Modern Treasury credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/modern-treasury/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Modern Treasury org ID + API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `modern_treasury_ping` | read | Ping (auth check) |
| `modern_treasury_list_counterparties` | read | List counterparties |
| `modern_treasury_get_counterparty` | read | Get counterparty |
| `modern_treasury_list_internal_accounts` | read | List internal accounts |
| `modern_treasury_list_external_accounts` | read | List external accounts |
| `modern_treasury_list_payment_orders` | read | List payment orders |
| `modern_treasury_get_payment_order` | read | Get payment order |
| `modern_treasury_list_expected_payments` | read | List expected payments |
| `modern_treasury_list_transactions` | read | List transactions |
| `modern_treasury_get_transaction` | read | Get transaction |
| `modern_treasury_list_returns` | read | List returns |
| `modern_treasury_list_ledgers` | read | List ledgers |
| `modern_treasury_list_ledger_accounts` | read | List ledger accounts |
| `modern_treasury_get_ledger_account` | read | Get ledger account |
| `modern_treasury_list_ledger_transactions` | read | List ledger transactions |
| `modern_treasury_list_ledger_entries` | read | List ledger entries |
| `modern_treasury_create_counterparty` | **write** | Create counterparty |
| `modern_treasury_usage_status` | meta | Usage status (free-tier meter) |
| `modern_treasury_upgrade` | meta | Upgrade to Pro (unlimited) |
| `modern_treasury_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `modern_treasury_upgrade` (it returns a Stripe Checkout link). Cancel any time with `modern_treasury_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `modern_treasury_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
