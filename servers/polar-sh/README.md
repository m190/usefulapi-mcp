# Polar MCP by usefulapi

Products, customers, orders, subscriptions, benefits, revenue metrics and refunds. Hosted, no local install.

**Live endpoint:** `https://polar-sh.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "polar-sh": {
      "url": "https://polar-sh.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Polar credentials**. They are validated,
stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `polar_list_organizations` | read | List organisations |
| `polar_list_products` | read | List products |
| `polar_get_product` | read | Get one product |
| `polar_list_customers` | read | List customers |
| `polar_get_customer` | read | Get one customer |
| `polar_get_customer_state` | read | Get a customer's full state |
| `polar_get_customer_state_by_external_id` | read | Get a customer's state by your own id |
| `polar_list_orders` | read | List orders |
| `polar_get_order` | read | Get one order |
| `polar_list_subscriptions` | read | List subscriptions |
| `polar_get_subscription` | read | Get one subscription |
| `polar_get_metrics` | read | Get revenue metrics |
| `polar_list_benefits` | read | List benefits |
| `polar_list_benefit_grants` | read | List grants of a benefit |
| `polar_list_discounts` | read | List discounts |
| `polar_list_refunds` | read | List refunds |
| `polar_list_license_keys` | read | List licence keys |
| `polar_list_meters` | read | List usage meters |
| `polar_get_meter_quantities` | read | Get a meter's quantities |
| `polar_list_events` | read | List usage events |
| `polar_list_webhook_deliveries` | read | List webhook deliveries |
| `polar_list_webhook_endpoints` | read | List webhook endpoints |
| `polar_redeliver_webhook_event` | **write** | Redeliver a webhook event |
| `polar_create_refund` | **write** | Refund an order |
| `polar_cancel_subscription` | **write** | Cancel a subscription |
| `polar_create_checkout_link` | **write** | Create a checkout link |
| `polar_sh_usage_status` | meta | Usage status (free-tier meter) |
| `polar_sh_upgrade` | meta | Upgrade to Pro (unlimited) |
| `polar_sh_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `polar_sh_upgrade` (it returns a Stripe Checkout link). Cancel any time with `polar_sh_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `polar_sh_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
