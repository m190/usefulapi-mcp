# Packeta MCP by usefulapi

Use your [Packeta](https://www.packeta.com) account from Claude, Cursor, or any MCP client. Validate, create and cancel packets, and read their status, tracking and courier details. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://packeta.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://packeta.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http packeta https://packeta.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=packeta&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpacketa.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "packeta": {
      "url": "https://packeta.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Packeta credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/packeta/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Packeta API password** (Packeta client section, API credentials). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `packeta_validate_packet` | read | Validate a packet |
| `packeta_packet_status` | read | Get packet status |
| `packeta_packet_tracking` | read | Get packet tracking history |
| `packeta_packet_info` | read | Get packet info |
| `packeta_shipment_packets` | read | List packets in a shipment |
| `packeta_return_routing` | read | Get return routing strings |
| `packeta_create_packet` | **write** | Create a packet |
| `packeta_cancel_packet` | **write** | Cancel a packet |
| `packeta_usage_status` | meta | Usage status (free-tier meter) |
| `packeta_request_feature` | meta | Request a missing feature |
| `packeta_upgrade` | meta | Upgrade to Pro or Pro+ |
| `packeta_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `packeta_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `packeta_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `packeta_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
