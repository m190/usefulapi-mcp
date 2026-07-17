# Increase MCP by usefulapi

Read your Increase bank accounts, balances, transactions, transfers, cards and entities from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Increase API key.

**Live endpoint:** `https://increase.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/increase

## Add to Claude

```json
{
  "mcpServers": {
    "increase": {
      "url": "https://increase.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Increase API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `increase_list_accounts` | read | List bank accounts, filtered by entity and status. |
| `increase_get_account` | read | Retrieve a single bank account by id. |
| `increase_get_account_balance` | read | Get an account's current and available balance, optionally as of a point in time. |
| `increase_list_account_numbers` | read | List deposit account/routing number pairs for an account. |
| `increase_list_transactions` | read | List settled transactions, filtered by account, category and date range. |
| `increase_get_transaction` | read | Retrieve a single settled transaction by id. |
| `increase_list_pending_transactions` | read | List pending (not-yet-settled) transactions for an account. |
| `increase_list_declined_transactions` | read | List declined transactions for an account. |
| `increase_list_ach_transfers` | read | List ACH transfers (read-only; no transfers are created). |
| `increase_get_ach_transfer` | read | Retrieve a single ACH transfer by id. |
| `increase_list_wire_transfers` | read | List wire transfers (read-only; no transfers are created). |
| `increase_list_check_transfers` | read | List check transfers (read-only; no transfers are created). |
| `increase_list_real_time_payments_transfers` | read | List Real-Time Payments (RTP) transfers (read-only; no transfers are created). |
| `increase_list_cards` | read | List cards for an account (read-only; no card actions are exposed). |
| `increase_list_entities` | read | List entities — the people/businesses (KYC records) that own accounts. |
| `increase_list_external_accounts` | read | List external (counterparty) bank accounts registered in Increase. |
| `increase_lookup_routing_number` | read | Look up a 9-digit ABA routing number to see supported ACH/RTP/wire services. |
| `increase_create_external_account` | **write** | Register an external (counterparty) bank account for future transfers — creates a record only, moves no money. |
| `increase_usage_status` | meta | Your tier + usage this month |
| `increase_upgrade` | meta | Upgrade to Pro |

Read tools are annotated `readOnlyHint`; write tools are `destructiveHint` so clients confirm before mutating.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
