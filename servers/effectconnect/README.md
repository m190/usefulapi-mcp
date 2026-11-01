# EffectConnect MCP by usefulapi

Use your [EffectConnect](https://effectconnect.com) account from Claude, Cursor, or any MCP client. It reads channels, product selections, products, orders and asynchronous process reports, and it makes no writes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://effectconnect.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://effectconnect.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http effectconnect https://effectconnect.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=effectconnect&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Feffectconnect.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "effectconnect": {
      "url": "https://effectconnect.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your EffectConnect credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/effectconnect/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **EffectConnect public key** and **private key** (create them in the API module of your EffectConnect account). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `effectconnect_list_channels` | read | List channels |
| `effectconnect_get_channel` | read | Get channel |
| `effectconnect_list_product_selections` | read | List product selections |
| `effectconnect_get_product_selection` | read | Get product selection |
| `effectconnect_list_product_selection_products` | read | List products in a product selection |
| `effectconnect_list_products` | read | List products |
| `effectconnect_search_products` | read | Search products |
| `effectconnect_get_product` | read | Get product |
| `effectconnect_search_orders` | read | Search orders |
| `effectconnect_read_orders` | read | Read orders by identifier |
| `effectconnect_get_order` | read | Get order |
| `effectconnect_list_processes` | read | List processes |
| `effectconnect_get_process` | read | Get process status |
| `effectconnect_get_process_report` | read | Get process report |
| `effectconnect_usage_status` | meta | Usage status (free-tier meter) |
| `effectconnect_request_feature` | meta | Request a missing feature |
| `effectconnect_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `effectconnect_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `effectconnect_upgrade` (it returns a Stripe Checkout link). Cancel any time with `effectconnect_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `effectconnect_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
