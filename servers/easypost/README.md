# EasyPost MCP by usefulapi

Rate shipments, buy labels, track packages and verify addresses via EasyPost, from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your EasyPost API key.

**Live endpoint:** `https://easypost.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/easypost

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://easypost.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http easypost https://easypost.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=easypost&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Feasypost.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "easypost": {
      "url": "https://easypost.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your EasyPost credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/easypost/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your EasyPost API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `easypost_list_shipments` | read | List shipments |
| `easypost_get_shipment` | read | Get a shipment |
| `easypost_list_trackers` | read | List trackers |
| `easypost_get_tracker` | read | Get a tracker |
| `easypost_list_addresses` | read | List addresses |
| `easypost_get_address` | read | Get an address |
| `easypost_verify_address` | **write** | Verify an address |
| `easypost_create_shipment` | **write** | Create a shipment (get rates) |
| `easypost_create_tracker` | **write** | Create a tracker |
| `easypost_buy_shipment` | **write** | Buy a shipping label |
| `easypost_refund_shipment` | **write** | Refund / void a label |
| `easypost_usage_status` | meta | Usage status (free-tier meter) |
| `easypost_request_feature` | meta | Request a missing feature |
| `easypost_upgrade` | meta | Upgrade to Pro (unlimited) |
| `easypost_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `easypost_upgrade` (it returns a Stripe Checkout link). Cancel any time with `easypost_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `easypost_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
