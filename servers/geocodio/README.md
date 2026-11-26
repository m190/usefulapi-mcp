# Geocodio MCP by usefulapi

Use your [Geocodio](https://www.geocod.io) account from Claude, Cursor, or any MCP client. Geocode and reverse-geocode addresses, parse addresses, measure distances, and read or delete geocoding lists. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://geocodio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://geocodio.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http geocodio https://geocodio.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=geocodio&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgeocodio.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "geocodio": {
      "url": "https://geocodio.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Geocodio credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/geocodio/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Geocodio API key** (dash.geocod.io/apikey). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `geocodio_geocode_address` | read | Geocode one address |
| `geocodio_geocode_batch` | read | Geocode many addresses |
| `geocodio_reverse_coordinates` | read | Reverse geocode one point |
| `geocodio_reverse_batch` | read | Reverse geocode many points |
| `geocodio_parse_address` | read | Parse an address |
| `geocodio_distance_from_origin` | read | Distances from one origin |
| `geocodio_distance_matrix` | read | Distance matrix |
| `geocodio_list_spreadsheets` | read | List uploaded spreadsheets |
| `geocodio_get_list_status` | read | Get list status |
| `geocodio_download_list_results` | read | Download list results |
| `geocodio_delete_list` | **write** | Delete a list |
| `geocodio_usage_status` | meta | Usage status (free-tier meter) |
| `geocodio_request_feature` | meta | Request a missing feature |
| `geocodio_upgrade` | meta | Upgrade to Pro or Pro+ |
| `geocodio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `geocodio_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `geocodio_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `geocodio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
