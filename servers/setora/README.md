# Setora MCP by usefulapi

Use your [Setora](https://www.setora.co.uk) account from Claude, Cursor, or any MCP client. Look up locations, services, staff, open slots, clients and bookings. Also create clients and create, move or cancel bookings with a read_write key. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://setora.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://setora.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http setora https://setora.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=setora&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsetora.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "setora": {
      "url": "https://setora.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Setora credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/setora/

<!-- connect:end (generated above, edit below) -->

On first connect you enter a **Setora API key** (Setora Hub → Settings → Developer; a read_write key is needed to change bookings). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `setora_list_locations` | read | List locations |
| `setora_list_services` | read | List services at a location |
| `setora_list_staff` | read | List staff at a location |
| `setora_get_availability` | read | Get availability |
| `setora_lookup_client` | read | Look up a client |
| `setora_get_booking` | read | Get a booking |
| `setora_create_client` | **write** | Create a client |
| `setora_create_booking` | **write** | Create a booking |
| `setora_reschedule_booking` | **write** | Reschedule a booking |
| `setora_cancel_booking` | **write** | Cancel a booking |
| `setora_usage_status` | meta | Usage status (free-tier meter) |
| `setora_request_feature` | meta | Request a missing feature |
| `setora_upgrade` | meta | Upgrade to Pro or Pro+ |
| `setora_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `setora_upgrade` (it returns a Stripe Checkout link). Cancel any time with `setora_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `setora_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
