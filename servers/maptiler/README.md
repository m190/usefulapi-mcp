# MapTiler MCP by usefulapi

Geocode places, look up elevation, and transform coordinates with the MapTiler Cloud API — from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your MapTiler API key.

**Live endpoint:** `https://maptiler.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/maptiler

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://maptiler.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http maptiler https://maptiler.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=maptiler&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmaptiler.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "maptiler": {
      "url": "https://maptiler.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your MapTiler credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/maptiler/

<!-- connect:end (generated above, edit below) -->

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
| `maptiler_request_feature` | meta | Request a missing feature |
| `maptiler_upgrade` | meta | Upgrade to Pro (unlimited) |
| `maptiler_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `maptiler_upgrade` (it returns a Stripe Checkout link). Cancel any time with `maptiler_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `maptiler_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
