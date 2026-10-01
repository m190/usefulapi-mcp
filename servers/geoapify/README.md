# Geoapify MCP by usefulapi

Geocode, reverse-geocode, autocomplete, route and search places. Hosted, no local install.

**Live endpoint:** `https://geoapify.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "geoapify": {
      "url": "https://geoapify.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Geoapify credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `geoapify_geocode_search` | read | Forward geocoding |
| `geoapify_geocode_reverse` | read | Reverse geocoding |
| `geoapify_geocode_autocomplete` | read | Address autocomplete |
| `geoapify_places` | read | Places search |
| `geoapify_place_details` | read | Place details |
| `geoapify_routing` | read | Routing |
| `geoapify_isoline` | read | Reachability isoline |
| `geoapify_ip_geolocation` | read | IP geolocation |
| `geoapify_usage_status` | meta | Usage status (free-tier meter) |
| `geoapify_upgrade` | meta | Upgrade to Pro (unlimited) |
| `geoapify_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `geoapify_upgrade` (it returns a Stripe Checkout link). Cancel any time with `geoapify_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `geoapify_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
