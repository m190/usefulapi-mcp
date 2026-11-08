# Tavzio MCP by usefulapi

Use your Tavzio account from Claude, Cursor, or any MCP client. Read orders and other records, and set the status of an order. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://tavzio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://tavzio.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http tavzio https://tavzio.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=tavzio&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftavzio.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "tavzio": {
      "url": "https://tavzio.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Tavzio credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/tavzio/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Tavzio API key** (Tavzio → Settings → API & Integrations → API Keys; shown once, starts with `tvz_live_`). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `tavzio_list_resources` | read | List API resources |
| `tavzio_list_records` | read | List records of a resource |
| `tavzio_get_record` | read | Get one record |
| `tavzio_update_order_status` | **write** | Set order status |
| `tavzio_usage_status` | meta | Usage status (free-tier meter) |
| `tavzio_request_feature` | meta | Request a missing feature |
| `tavzio_upgrade` | meta | Upgrade to Pro or Pro+ |
| `tavzio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `tavzio_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `tavzio_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `tavzio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
