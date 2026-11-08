# ParkPow MCP by usefulapi

Use your [ParkPow](https://parkpow.com) account from Claude, Cursor, or any MCP client. Read vehicles, camera visits and parking occupancy, edit vehicle records and tags, and add comments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://parkpow.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://parkpow.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http parkpow https://parkpow.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=parkpow&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fparkpow.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "parkpow": {
      "url": "https://parkpow.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ParkPow credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/parkpow/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **ParkPow API token** (from the ParkPow API token page, app.parkpow.com/accounts/token/). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `parkpow_list_vehicles` | read | List vehicles |
| `parkpow_list_visits` | read | List visits |
| `parkpow_list_visits_large` | read | List visits (large exports) |
| `parkpow_get_visit` | read | Get a visit |
| `parkpow_list_sites` | read | List sites |
| `parkpow_get_site_occupancy` | read | Get site occupancy |
| `parkpow_list_vehicle_tags` | read | List vehicle tags |
| `parkpow_list_vehicle_comments` | read | List vehicle comments |
| `parkpow_create_vehicle` | **write** | Create or update a vehicle |
| `parkpow_set_vehicle_tag` | **write** | Set or clear a vehicle tag |
| `parkpow_add_vehicle_comment` | **write** | Add a vehicle comment |
| `parkpow_usage_status` | meta | Usage status (free-tier meter) |
| `parkpow_request_feature` | meta | Request a missing feature |
| `parkpow_upgrade` | meta | Upgrade to Pro or Pro+ |
| `parkpow_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `parkpow_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `parkpow_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `parkpow_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
