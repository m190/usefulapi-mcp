# Quartix MCP by usefulapi

Use your [Quartix](https://www.quartix.com) account from Claude, Cursor, or any MCP client. It reads vehicle and driver positions, trips, trip summaries, sites and groups, and it changes nothing. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://quartix.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://quartix.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http quartix https://quartix.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=quartix&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fquartix.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "quartix": {
      "url": "https://quartix.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Quartix credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/quartix/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Quartix customer ID**, **Quartix username** and **Quartix password**, the same details you use for Quartix Web Services. Quartix must enable API access on your account first. The server validates them, keeps only the access tokens per user, and never stores the password. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `quartix_list_regions` | read | List regions |
| `quartix_list_sites` | read | List sites |
| `quartix_list_groups` | read | List groups |
| `quartix_list_vehicles` | read | List vehicles |
| `quartix_get_vehicle_positions` | read | Get latest vehicle positions |
| `quartix_list_drivers` | read | List drivers |
| `quartix_get_driver_positions` | read | Get latest driver positions |
| `quartix_list_vehicle_trips` | read | List vehicle trips |
| `quartix_get_vehicle_trip_summary` | read | Get vehicle trip summary |
| `quartix_list_driver_trips` | read | List driver trips |
| `quartix_get_driver_trip_summary` | read | Get driver trip summary |
| `quartix_usage_status` | meta | Usage status (free-tier meter) |
| `quartix_request_feature` | meta | Request a missing feature |
| `quartix_upgrade` | meta | Upgrade to Pro or Pro+ |
| `quartix_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `quartix_upgrade` (it returns a Stripe Checkout link). Cancel any time with `quartix_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `quartix_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
