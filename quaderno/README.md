# Quaderno MCP by usefulapi

Calculate tax rates and read or create your invoices, contacts and transactions from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Quaderno API key.

**Live endpoint:** `https://quaderno.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/quaderno

## Add to Claude

```json
{
  "mcpServers": {
    "quaderno": {
      "url": "https://quaderno.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Quaderno API key and account subdomain. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ping` | read | Ping |
| `calculate_tax` | read | Calculate tax |
| `list_invoices` | read | List invoices |
| `get_invoice` | read | Get invoice |
| `list_contacts` | read | List contacts |
| `get_contact` | read | Get contact |
| `list_items` | read | List items |
| `get_item` | read | Get item |
| `list_credit_notes` | read | List credit notes |
| `get_credit_note` | read | Get credit note |
| `list_receipts` | read | List receipts |
| `get_receipt` | read | Get receipt |
| `list_expenses` | read | List expenses |
| `get_expense` | read | Get expense |
| `list_tax_codes` | read | List tax codes |
| `list_jurisdictions` | read | List jurisdictions |
| `list_webhooks` | read | List webhooks |
| `quaderno_request` | read | Request |
| `create_contact` | **write** | Create contact |
| `update_contact` | **write** | Update contact |
| `create_item` | **write** | Create item |
| `create_invoice` | **write** | Create invoice |
| `create_transaction` | **write** | Create transaction |
| `quaderno_usage_status` | meta | Usage status (free-tier meter) |
| `quaderno_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
