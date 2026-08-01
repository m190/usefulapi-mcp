# Gumroad MCP by usefulapi

Use your [Gumroad](https://gumroad.com) account from Claude, Cursor, or any MCP client — read products, sales, subscribers and offer codes, and verify, enable or disable product licenses. Hosted,
no local install: connect with your own credentials.

**Live endpoint:** `https://gumroad.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "gumroad": {
      "url": "https://gumroad.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Gumroad access token** (Settings → Advanced → Applications). It is validated, stored per-user, and scoped to you — no
keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `gumroad_get_user` | read | Get user |
| `gumroad_list_products` | read | List products |
| `gumroad_get_product` | read | Get product |
| `gumroad_list_sales` | read | List sales |
| `gumroad_get_sale` | read | Get sale |
| `gumroad_list_subscribers` | read | List subscribers |
| `gumroad_get_subscriber` | read | Get subscriber |
| `gumroad_list_offer_codes` | read | List offer codes |
| `gumroad_get_offer_code` | read | Get offer code |
| `gumroad_list_variant_categories` | read | List variant categories |
| `gumroad_get_variant_category` | read | Get variant category |
| `gumroad_list_custom_fields` | read | List custom fields |
| `gumroad_list_resource_subscriptions` | read | List resource subscriptions |
| `gumroad_verify_license` | read | Verify license |
| `gumroad_enable_product` | **write** | Enable product |
| `gumroad_disable_product` | **write** | Disable product |
| `gumroad_create_offer_code` | **write** | Create offer code |
| `gumroad_update_offer_code` | **write** | Update offer code |
| `gumroad_enable_license` | **write** | Enable license |
| `gumroad_disable_license` | **write** | Disable license |
| `gumroad_usage_status` | meta | Usage status (free-tier meter) |
| `gumroad_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
