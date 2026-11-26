# flespi MCP by usefulapi

Use your [flespi](https://flespi.com) account from Claude, Cursor, or any MCP client. Read devices, telemetry, messages, channels, geofences, groups, calculators and streams, and create or update devices. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://flespi.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://flespi.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http flespi https://flespi.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=flespi&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fflespi.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "flespi": {
      "url": "https://flespi.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your flespi credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/flespi/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **flespi access token** (flespi panel → Settings → Tokens). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `flespi_get_token_info` | read | Get token information |
| `flespi_list_devices` | read | List devices |
| `flespi_get_device_telemetry` | read | Get device telemetry |
| `flespi_list_device_messages` | read | List device messages |
| `flespi_list_channels` | read | List channels |
| `flespi_list_geofences` | read | List geofences |
| `flespi_list_groups` | read | List device groups |
| `flespi_list_calcs` | read | List calculators |
| `flespi_list_streams` | read | List streams |
| `flespi_create_device` | **write** | Create devices |
| `flespi_update_device` | **write** | Update devices |
| `flespi_usage_status` | meta | Usage status (free-tier meter) |
| `flespi_request_feature` | meta | Request a missing feature |
| `flespi_upgrade` | meta | Upgrade to Pro or Pro+ |
| `flespi_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `flespi_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `flespi_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `flespi_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
