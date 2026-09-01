# Dub MCP by usefulapi

Short links with click, lead and sale analytics, customers, tags and the partner programme. Hosted, no local install.

**Live endpoint:** `https://dub.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "dub": {
      "url": "https://dub.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Dub credentials**. They are validated,
stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `dub_list_links` | read | List short links |
| `dub_get_link` | read | Get one short link |
| `dub_count_links` | read | Count short links |
| `dub_get_analytics` | read | Get analytics |
| `dub_list_events` | read | List raw events |
| `dub_list_customers` | read | List customers |
| `dub_get_customer` | read | Get one customer |
| `dub_list_tags` | read | List tags |
| `dub_list_folders` | read | List folders |
| `dub_list_domains` | read | List domains |
| `dub_list_partners` | read | List partners |
| `dub_get_partner_analytics` | read | Get partner analytics |
| `dub_list_partner_applications` | read | List partner applications |
| `dub_list_commissions` | read | List commissions |
| `dub_list_payouts` | read | List payouts |
| `dub_create_link` | **write** | Create a short link |
| `dub_update_link` | **write** | Update a short link |
| `dub_delete_link` | **write** | Delete a short link |
| `dub_create_tag` | **write** | Create a tag |
| `dub_create_folder` | **write** | Create a folder |
| `dub_approve_partner_application` | **write** | Approve a partner application |
| `dub_reject_partner_application` | **write** | Reject a partner application |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
