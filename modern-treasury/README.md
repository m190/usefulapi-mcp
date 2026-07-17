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
| `modern_treasury_ping` | read | Verify connectivity and credentials |
| `modern_treasury_list_counterparties` | read | List counterparties (contacts) |
| `modern_treasury_get_counterparty` | read | Get a counterparty by id |
| `modern_treasury_list_internal_accounts` | read | List your organization's internal bank accounts |
| `modern_treasury_list_external_accounts` | read | List external (counterparty) bank accounts |
| `modern_treasury_list_payment_orders` | read | List payment orders (read only) |
| `modern_treasury_get_payment_order` | read | Get a payment order by id |
| `modern_treasury_list_expected_payments` | read | List expected payments |
| `modern_treasury_list_transactions` | read | List bank transactions |
| `modern_treasury_get_transaction` | read | Get a transaction by id |
| `modern_treasury_list_returns` | read | List payment returns (e.g. ACH returns) |
| `modern_treasury_list_ledgers` | read | List double-entry ledgers |
| `modern_treasury_list_ledger_accounts` | read | List ledger accounts |
| `modern_treasury_get_ledger_account` | read | Get a ledger account with balances |
| `modern_treasury_list_ledger_transactions` | read | List ledger transactions |
| `modern_treasury_list_ledger_entries` | read | List ledger entries (individual debits/credits) |
| `modern_treasury_create_counterparty` | **write** | Create a contact-only counterparty record (no bank details, moves no money) |
| `modern-treasury_usage_status` | meta | Your tier + usage this month |
| `modern-treasury_upgrade` | meta | Upgrade to Pro |

Read tools are annotated `readOnlyHint`; write tools are `destructiveHint` so clients confirm before mutating.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
