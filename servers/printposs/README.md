# PrintPoss MCP by usefulapi

Use your [PrintPoss](https://printposs.com) account from Claude, Cursor, or any MCP client. It reads stores, products, orders and wallet transactions. It creates print-on-demand orders that charge the wallet. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://printposs.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://printposs.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http printposs https://printposs.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=printposs&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fprintposs.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "printposs": {
      "url": "https://printposs.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your PrintPoss credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/printposs/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **PrintPoss seller API token** (Account settings → API Token → Add Key in PrintPoss). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `printposs_list_stores` | read | List stores |
| `printposs_list_products` | read | List products |
| `printposs_list_orders` | read | List orders |
| `printposs_get_order` | read | Get an order |
| `printposs_list_wallet_transactions` | read | List wallet transactions |
| `printposs_get_webhook_setup` | read | Get webhook setup |
| `printposs_create_order` | **write** | Create a fulfillment order |
| `printposs_usage_status` | meta | Usage status (free-tier meter) |
| `printposs_request_feature` | meta | Request a missing feature |
| `printposs_upgrade` | meta | Upgrade to Pro or Pro+ |
| `printposs_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `printposs_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `printposs_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `printposs_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
