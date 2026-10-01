# Keap MCP by usefulapi

**Live endpoint:** `https://keap.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "keap": {
      "url": "https://keap.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Keap API token** (Keap → Settings → API). It's
validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `keap_list_contacts` | read | List contacts |
| `keap_get_contact` | read | Get contact |
| `keap_list_companies` | read | List companies |
| `keap_get_company` | read | Get company |
| `keap_list_opportunities` | read | List opportunities |
| `keap_get_opportunity` | read | Get opportunity |
| `keap_list_tags` | read | List tags |
| `keap_list_tasks` | read | List tasks |
| `keap_get_task` | read | Get task |
| `keap_list_subscriptions` | read | List subscriptions |
| `keap_list_orders` | read | List orders |
| `keap_list_products` | read | List products |
| `keap_list_campaigns` | read | List campaigns |
| `keap_list_affiliates` | read | List affiliates |
| `keap_create_contact` | **write** | Create contact |
| `keap_update_contact` | **write** | Update contact |
| `keap_create_task` | **write** | Create task |
| `keap_apply_tag` | **write** | Apply tag to contacts |
| `keap_usage_status` | meta | Usage status (free-tier meter) |
| `keap_upgrade` | meta | Upgrade to Pro (unlimited) |
| `keap_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `keap_upgrade` (it returns a Stripe Checkout link). Cancel any time with `keap_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `keap_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
