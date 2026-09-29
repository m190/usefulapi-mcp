# bunny.net MCP by usefulapi

Use [bunny.net](https://bunny.net) from Claude, Cursor, or any MCP client — inspect pull zones, storage, DNS and video libraries, view stats and billing, and purge caches.
Hosted, no local install: connect with your own bunny.net credentials.

**Live endpoint:** `https://bunny-net.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/bunny-net

## Add to Claude

```json
{
  "mcpServers": {
    "bunny-net": {
      "url": "https://bunny-net.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **bunny.net account API key** (dash.bunny.net → Account settings → API key).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bunny_list_pull_zones` | read | List pull zones |
| `bunny_get_pull_zone` | read | Get a pull zone |
| `bunny_list_storage_zones` | read | List storage zones |
| `bunny_get_storage_zone` | read | Get a storage zone |
| `bunny_get_storage_zone_statistics` | read | Get storage zone statistics |
| `bunny_list_dns_zones` | read | List DNS zones |
| `bunny_get_dns_zone` | read | Get a DNS zone |
| `bunny_list_dns_records` | read | List DNS records |
| `bunny_export_dns_zone` | read | Export a DNS zone |
| `bunny_list_video_libraries` | read | List video libraries |
| `bunny_get_video_library` | read | Get a video library |
| `bunny_get_statistics` | read | Get CDN statistics |
| `bunny_list_regions` | read | List edge regions |
| `bunny_get_billing` | read | Get billing details |
| `bunny_get_audit_log` | read | Get the audit log |
| `bunny_purge_pull_zone_cache` | **write** | Purge a pull zone's cache |
| `bunny_purge_url` | **write** | Purge a URL from cache |
| `bunny_add_dns_record` | **write** | Add a DNS record |
| `bunny_update_dns_record` | **write** | Update a DNS record |
| `bunny_set_edge_rule_enabled` | **write** | Enable or disable an edge rule |
| `bunny_add_blocked_ip` | **write** | Block an IP on a pull zone |
| `bunny_remove_blocked_ip` | **write** | Unblock an IP on a pull zone |
| `bunny_usage_status` | meta | Usage status (free-tier meter) |
| `bunny_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT © usefulapi. Not affiliated with or endorsed by bunny.net.
