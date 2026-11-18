# ReturnGO MCP by usefulapi

Use your [ReturnGO](https://returngo.ai) account from Claude, Cursor, or any MCP client. Read return requests, refunds and shipments, set RMA statuses, add RMA comments, update refund and shipment details. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://returngo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://returngo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http returngo https://returngo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=returngo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Freturngo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "returngo": {
      "url": "https://returngo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ReturnGO credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/returngo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **ReturnGO API key**, created in Settings → API, and your **store URL**, such as demo-store.myshopify.com. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `returngo_list_rmas` | read | List RMAs |
| `returngo_get_rma` | read | Get an RMA |
| `returngo_list_transactions` | read | List transactions |
| `returngo_list_webhooks` | read | List webhooks |
| `returngo_track_shipment` | **write** | Track a shipment |
| `returngo_set_shipment` | **write** | Set shipment details |
| `returngo_add_rma_comment` | **write** | Add an RMA comment |
| `returngo_set_rma_status` | **write** | Set an RMA status |
| `returngo_update_transaction` | **write** | Update a transaction |
| `returngo_usage_status` | meta | Usage status (free-tier meter) |
| `returngo_request_feature` | meta | Request a missing feature |
| `returngo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `returngo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `returngo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `returngo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `returngo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
