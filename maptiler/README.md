# MapTiler MCP by usefulapi

Geocode places, look up elevation, and transform coordinates with the MapTiler Cloud API — from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your MapTiler API key.

**Live endpoint:** `https://maptiler.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/maptiler

## Add to Claude

```json
{
  "mcpServers": {
    "maptiler": {
      "url": "https://maptiler.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your MapTiler API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `maptiler_geocode` | read | Geocode |
| `maptiler_reverse_geocode` | read | Reverse geocode |
| `maptiler_batch_geocode` | read | Batch geocode |
| `maptiler_geolocate_ip` | read | Geolocate ip |
| `maptiler_get_elevation` | read | Get elevation |
| `maptiler_transform_coordinates` | read | Transform coordinates |
| `maptiler_search_coordinate_systems` | read | Search coordinate systems |
| `maptiler_get_data_features` | read | Get data features |
| `maptiler_usage_status` | meta | Usage status (free-tier meter) |
| `maptiler_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
