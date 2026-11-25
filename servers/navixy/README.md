# Navixy MCP by usefulapi

Use your [Navixy](https://www.navixy.com) account from Claude, Cursor, or any MCP client. Read assets, devices, asset groups, geofences and the live state of your vehicles and trackers, with their trips and stops. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://navixy.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://navixy.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http navixy https://navixy.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=navixy&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fnavixy.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "navixy": {
      "url": "https://navixy.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Navixy credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/navixy/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Navixy API key** (starts with nvx_, from Navixy Console → API keys), your **region** (EU or US) and, if the key covers several workspaces, a **workspace ID**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `navixy_get_workspace` | read | Get the workspace |
| `navixy_list_assets` | read | List assets |
| `navixy_get_asset` | read | Get an asset |
| `navixy_list_devices` | read | List devices |
| `navixy_get_device` | read | Get a device |
| `navixy_list_asset_groups` | read | List asset groups |
| `navixy_list_geo_objects` | read | List geofences and points of interest |
| `navixy_list_asset_states` | read | List live asset states |
| `navixy_get_asset_state` | read | Get the live state of an asset |
| `navixy_get_device_state` | read | Get the live state of a device |
| `navixy_get_asset_timeline` | read | Get the trips and stops of an asset |
| `navixy_usage_status` | meta | Usage status (free-tier meter) |
| `navixy_request_feature` | meta | Request a missing feature |
| `navixy_upgrade` | meta | Upgrade to Pro or Pro+ |
| `navixy_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `navixy_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `navixy_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `navixy_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
