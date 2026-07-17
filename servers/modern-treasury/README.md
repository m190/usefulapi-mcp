# Modern Treasury MCP by usefulapi

Query your Modern Treasury payment-ops and ledger data from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Modern Treasury API key.

**Live endpoint:** `https://modern-treasury.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/modern-treasury

## Add to Claude

```json
{
  "mcpServers": {
    "modern-treasury": {
      "url": "https://modern-treasury.usefulapi.io/mcp"
    }
  }
}
```

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

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
