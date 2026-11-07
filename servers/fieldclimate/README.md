# FieldClimate MCP by usefulapi

Use your FieldClimate account from Claude, Cursor, or any MCP client. Read weather station data, sensors, farms, fields and crop zones, read-only. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://fieldclimate.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://fieldclimate.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http fieldclimate https://fieldclimate.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=fieldclimate&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffieldclimate.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "fieldclimate": {
      "url": "https://fieldclimate.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your FieldClimate credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/fieldclimate/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **HMAC public key** and **HMAC private key** (FieldClimate → user menu → API services → FieldClimate). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fieldclimate_get_user` | read | Get account |
| `fieldclimate_list_sensor_catalog` | read | List sensor types |
| `fieldclimate_list_crops` | read | List crops |
| `fieldclimate_list_stations` | read | List stations |
| `fieldclimate_get_station` | read | Get station |
| `fieldclimate_list_station_sensors` | read | List station sensors |
| `fieldclimate_get_station_data_range` | read | Get data range |
| `fieldclimate_get_last_station_data` | read | Get recent station data |
| `fieldclimate_get_station_data_period` | read | Get station data for a period |
| `fieldclimate_list_farms` | read | List farms |
| `fieldclimate_get_farm` | read | Get farm |
| `fieldclimate_list_farm_fields` | read | List farm fields |
| `fieldclimate_list_fields` | read | List fields |
| `fieldclimate_get_field` | read | Get field |
| `fieldclimate_list_crop_zones` | read | List crop zones |
| `fieldclimate_get_crop_zone` | read | Get crop zone |
| `fieldclimate_usage_status` | meta | Usage status (free-tier meter) |
| `fieldclimate_request_feature` | meta | Request a missing feature |
| `fieldclimate_upgrade` | meta | Upgrade to Pro or Pro+ |
| `fieldclimate_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `fieldclimate_upgrade` (it returns a Stripe Checkout link). Cancel any time with `fieldclimate_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `fieldclimate_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
