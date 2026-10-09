# Numeral MCP by usefulapi

Manage [Numeral](https://www.numeralhq.com) sales-tax compliance from Claude, Cursor, or any MCP client
— calculate sales tax and VAT, record transactions and refunds, and manage products and customers.
Hosted, no local install: connect with your Numeral API key.

**Live endpoint:** `https://numeral.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://numeral.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http numeral https://numeral.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=numeral&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fnumeral.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "numeral": {
      "url": "https://numeral.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Numeral credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/numeral/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Numeral API key** (from the Numeral dashboard). It's validated,
stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `numeral_ping` | read | Ping (health check) |
| `numeral_calculate_tax` | read | Calculate tax |
| `numeral_get_transaction` | read | Get transaction |
| `numeral_list_transaction_refunds` | read | List transaction refunds |
| `numeral_list_products` | read | List products |
| `numeral_get_product` | read | Get product |
| `numeral_get_customer` | read | Get customer |
| `numeral_create_transaction` | **write** | Create transaction |
| `numeral_create_refund` | **write** | Create refund |
| `numeral_create_product` | **write** | Create product |
| `numeral_create_customer` | **write** | Create customer |
| `numeral_usage_status` | meta | Usage status (free-tier meter) |
| `numeral_request_feature` | meta | Request a missing feature |
| `numeral_upgrade` | meta | Upgrade to Pro (unlimited) |
| `numeral_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `numeral_upgrade` (it returns a Stripe Checkout link). Cancel any time with `numeral_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `numeral_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
