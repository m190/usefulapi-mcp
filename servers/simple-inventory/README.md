# Simple Inventory MCP by usefulapi

Use your [Simple Inventory](https://app.simpleinventory.io) account from Claude, Cursor, or any MCP client. Read items, stock, folders and events, change items and stock, and subscribe URLs to events. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://simple-inventory.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://simple-inventory.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http simple-inventory https://simple-inventory.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=simple-inventory&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsimple-inventory.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "simple-inventory": {
      "url": "https://simple-inventory.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Simple Inventory credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/simple-inventory/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Simple Inventory API key** (Settings → Integrations → API Keys, created by an Owner or Admin). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `simpleinventory_get_account` | read | Get the connected account |
| `simpleinventory_list_folders` | read | List folders |
| `simpleinventory_list_items` | read | List items |
| `simpleinventory_get_item` | read | Get an item |
| `simpleinventory_list_recent_events` | read | List recent events |
| `simpleinventory_create_item` | **write** | Create an item |
| `simpleinventory_update_item` | **write** | Update an item's details |
| `simpleinventory_change_stock` | **write** | Change an item's stock |
| `simpleinventory_bulk_update_stock` | **write** | Change stock on many items |
| `simpleinventory_subscribe_webhook` | **write** | Subscribe a URL to an event |
| `simpleinventory_unsubscribe_webhook` | **write** | Remove an API subscription |
| `simpleinventory_usage_status` | meta | Usage status (free-tier meter) |
| `simpleinventory_request_feature` | meta | Request a missing feature |
| `simpleinventory_upgrade` | meta | Upgrade to Pro or Pro+ |
| `simpleinventory_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `simpleinventory_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `simpleinventory_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `simpleinventory_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
