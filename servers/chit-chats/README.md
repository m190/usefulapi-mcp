# Chit Chats MCP by usefulapi

Use your [Chit Chats](https://chitchats.com) account from Claude, Cursor, or any MCP client. Read shipments, batches and returns, and create shipments or change batch membership. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://chit-chats.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://chit-chats.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http chit-chats https://chit-chats.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=chit-chats&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fchit-chats.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "chit-chats": {
      "url": "https://chit-chats.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Chit Chats credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/chit-chats/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Chit Chats Client ID** (the number in your API address) and your **API access token** (Settings → Developer → API Access Tokens). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `chitchats_list_shipments` | read | List shipments |
| `chitchats_get_shipment` | read | Get a shipment |
| `chitchats_count_shipments` | read | Count shipments |
| `chitchats_list_batches` | read | List batches |
| `chitchats_get_batch` | read | Get a batch |
| `chitchats_count_batches` | read | Count batches |
| `chitchats_list_returns` | read | List returns |
| `chitchats_create_shipment` | **write** | Create a shipment |
| `chitchats_refresh_shipment_rates` | **write** | Refresh shipment rates |
| `chitchats_add_shipments_to_batch` | **write** | Add shipments to a batch |
| `chitchats_remove_shipments_from_batch` | **write** | Remove shipments from their batch |
| `chitchats_usage_status` | meta | Usage status (free-tier meter) |
| `chitchats_request_feature` | meta | Request a missing feature |
| `chitchats_upgrade` | meta | Upgrade to Pro or Pro+ |
| `chitchats_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `chitchats_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `chitchats_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `chitchats_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
