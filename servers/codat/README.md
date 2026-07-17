# Codat MCP by usefulapi

Read your customers' unified accounting data across QuickBooks, Xero and more from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Codat API key.

**Live endpoint:** `https://codat.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/codat

## Add to Claude

```json
{
  "mcpServers": {
    "codat": {
      "url": "https://codat.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Codat API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `codat_get_profile` | read | Get profile |
| `codat_list_companies` | read | List companies |
| `codat_get_company` | read | Get company |
| `codat_list_connections` | read | List connections |
| `codat_get_connection` | read | Get connection |
| `codat_get_data_status` | read | Get data status |
| `codat_get_data_info` | read | Get data info |
| `codat_list_integrations` | read | List integrations |
| `codat_list_accounts` | read | List accounts |
| `codat_list_invoices` | read | List invoices |
| `codat_get_invoice` | read | Get invoice |
| `codat_list_bills` | read | List bills |
| `codat_list_bill_payments` | read | List bill payments |
| `codat_list_credit_notes` | read | List credit notes |
| `codat_list_customers` | read | List customers |
| `codat_list_suppliers` | read | List suppliers |
| `codat_list_payments` | read | List payments |
| `codat_list_journal_entries` | read | List journal entries |
| `codat_get_balance_sheet` | read | Get balance sheet |
| `codat_get_profit_and_loss` | read | Get profit and loss |
| `codat_get_cash_flow_statement` | read | Get cash flow statement |
| `codat_list_direct_costs` | read | List direct costs |
| `codat_list_account_transactions` | read | List account transactions |
| `codat_request` | read | Request |
| `codat_create_company` | **write** | Create company |
| `codat_create_connection` | **write** | Create connection |
| `codat_refresh_all_data` | **write** | Refresh all data |
| `codat_refresh_data_type` | **write** | Refresh data type |
| `codat_usage_status` | meta | Usage status (free-tier meter) |
| `codat_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
