# DNSimple MCP by usefulapi

Manage your domains and DNS records from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your DNSimple API token.

**Live endpoint:** `https://dnsimple.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/dnsimple

## Add to Claude

```json
{
  "mcpServers": {
    "dnsimple": {
      "url": "https://dnsimple.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your DNSimple API token. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `dnsimple_whoami` | read | Whoami |
| `dnsimple_list_domains` | read | List domains |
| `dnsimple_get_domain` | read | Get domain |
| `dnsimple_list_zones` | read | List zones |
| `dnsimple_list_zone_records` | read | List zone records |
| `dnsimple_get_zone_record` | read | Get zone record |
| `dnsimple_check_domain` | read | Check domain |
| `dnsimple_get_domain_prices` | read | Get domain prices |
| `dnsimple_list_contacts` | read | List contacts |
| `dnsimple_create_zone_record` | **write** | Create zone record |
| `dnsimple_update_zone_record` | **write** | Update zone record |
| `dnsimple_delete_zone_record` | **write** | Delete zone record |
| `dnsimple_usage_status` | meta | Usage status (free-tier meter) |
| `dnsimple_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
