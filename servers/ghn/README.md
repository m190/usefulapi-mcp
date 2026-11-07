# GHN MCP by usefulapi

Use your [GHN](https://ghn.vn) account from Claude, Cursor, or any MCP client. Quote shipping fees, read orders, and create or cancel GHN shipping orders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://ghn.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ghn.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ghn https://ghn.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ghn&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fghn.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ghn": {
      "url": "https://ghn.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your GHN credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ghn/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **GHN Token API value** (GHN Developer Portal, Manage token; reveal it with the OTP sent to your phone) and your **GHN ShopId** (in your GHN account information). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ghn_list_provinces` | read | List provinces |
| `ghn_list_districts` | read | List districts |
| `ghn_list_wards` | read | List wards |
| `ghn_list_services` | read | List delivery services |
| `ghn_calculate_fee` | read | Calculate shipping fee |
| `ghn_get_order` | read | Get an order |
| `ghn_get_order_by_client_code` | read | Get an order by your code |
| `ghn_create_order` | **write** | Create a shipping order |
| `ghn_cancel_orders` | **write** | Cancel shipping orders |
| `ghn_usage_status` | meta | Usage status (free-tier meter) |
| `ghn_request_feature` | meta | Request a missing feature |
| `ghn_upgrade` | meta | Upgrade to Pro or Pro+ |
| `ghn_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `ghn_upgrade` (it returns a Stripe Checkout link). Cancel any time with `ghn_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `ghn_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
