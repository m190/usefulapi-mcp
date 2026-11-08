# GHTK MCP by usefulapi

Use your [GHTK](https://giaohangtietkiem.vn) account from Claude, Cursor, or any MCP client. Quote fees, check addresses and order status, and create or cancel GHTK orders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://ghtk.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ghtk.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ghtk https://ghtk.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ghtk&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fghtk.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ghtk": {
      "url": "https://ghtk.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your GHTK credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ghtk/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **GHTK API token** (Shop Information, account page, top left sidebar) and your **shop code or private partner code**. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ghtk_list_pickup_addresses` | read | List pickup addresses |
| `ghtk_find_address` | read | Look up a level-4 address |
| `ghtk_calculate_shipping_fee` | read | Calculate a shipping fee |
| `ghtk_search_products` | read | Search warehouse products |
| `ghtk_list_solutions` | read | List GHTK solutions |
| `ghtk_get_order_status` | read | Get order status |
| `ghtk_create_order` | **write** | Create a shipping order |
| `ghtk_cancel_order` | **write** | Cancel a shipping order |
| `ghtk_usage_status` | meta | Usage status (free-tier meter) |
| `ghtk_request_feature` | meta | Request a missing feature |
| `ghtk_upgrade` | meta | Upgrade to Pro or Pro+ |
| `ghtk_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `ghtk_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `ghtk_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `ghtk_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
