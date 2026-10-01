# Loyverse MCP by usefulapi

Use [Loyverse](https://loyverse.com) from Claude, Cursor, or any MCP client — review receipts, shifts, items, inventory and customers, and update customers, categories, suppliers and stock levels.
Hosted, no local install: connect with your own Loyverse credentials.

**Live endpoint:** `https://loyverse.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/loyverse

## Add to Claude

```json
{
  "mcpServers": {
    "loyverse": {
      "url": "https://loyverse.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Loyverse personal access token** (Back Office > Integrations > Access tokens).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `loyverse_get_merchant` | read | Get the merchant |
| `loyverse_list_stores` | read | List stores |
| `loyverse_list_employees` | read | List employees |
| `loyverse_list_receipts` | read | List receipts |
| `loyverse_get_receipt` | read | Get one receipt |
| `loyverse_list_shifts` | read | List shifts |
| `loyverse_list_items` | read | List items |
| `loyverse_get_item` | read | Get one item |
| `loyverse_list_variants` | read | List item variants |
| `loyverse_list_categories` | read | List categories |
| `loyverse_list_inventory` | read | List inventory levels |
| `loyverse_list_customers` | read | List customers |
| `loyverse_get_customer` | read | Get one customer |
| `loyverse_list_payment_types` | read | List payment types |
| `loyverse_list_discounts` | read | List discounts |
| `loyverse_list_taxes` | read | List taxes |
| `loyverse_list_suppliers` | read | List suppliers |
| `loyverse_upsert_customer` | **write** | Create or update a customer |
| `loyverse_upsert_category` | **write** | Create or update a category |
| `loyverse_upsert_supplier` | **write** | Create or update a supplier |
| `loyverse_set_inventory_levels` | **write** | Set inventory levels |
| `loyverse_usage_status` | meta | Usage status (free-tier meter) |
| `loyverse_upgrade` | meta | Upgrade to Pro (unlimited) |
| `loyverse_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `loyverse_upgrade` (it returns a Stripe Checkout link). Cancel any time with `loyverse_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `loyverse_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Loyverse.
