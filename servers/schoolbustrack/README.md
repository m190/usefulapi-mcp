# SchoolBusTrack MCP by usefulapi

Use your SchoolBusTrack account from Claude, Cursor, or any MCP client. Read pupils, routes, buses, live bus positions, trips, boarding lists and incidents. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://schoolbustrack.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://schoolbustrack.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http schoolbustrack https://schoolbustrack.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=schoolbustrack&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fschoolbustrack.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "schoolbustrack": {
      "url": "https://schoolbustrack.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SchoolBusTrack credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/schoolbustrack/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **SchoolBusTrack school key** (your school administrator creates it under Settings → Integrations → Create a key; it starts with `sbt_live_`). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `schoolbustrack_ping` | read | Check the key |
| `schoolbustrack_list_students` | read | List pupils |
| `schoolbustrack_get_student` | read | Get a pupil |
| `schoolbustrack_list_routes` | read | List routes |
| `schoolbustrack_get_route` | read | Get a route |
| `schoolbustrack_list_buses` | read | List buses |
| `schoolbustrack_list_bus_locations` | read | List bus positions |
| `schoolbustrack_get_bus_location` | read | Get a bus position |
| `schoolbustrack_list_trips` | read | List trips |
| `schoolbustrack_get_trip` | read | Get a trip |
| `schoolbustrack_get_trip_manifest` | read | Get a trip manifest |
| `schoolbustrack_list_incidents` | read | List incidents |
| `schoolbustrack_usage_status` | meta | Usage status (free-tier meter) |
| `schoolbustrack_request_feature` | meta | Request a missing feature |
| `schoolbustrack_upgrade` | meta | Upgrade to Pro or Pro+ |
| `schoolbustrack_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `schoolbustrack_upgrade` (it returns a Stripe Checkout link). Cancel any time with `schoolbustrack_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `schoolbustrack_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
