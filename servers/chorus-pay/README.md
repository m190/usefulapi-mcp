# Chorus Pay MCP by usefulapi

Use your Chorus Pay account from Claude, Cursor, or any MCP client. List, read, create, update and cancel order quotes for public bodies. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://chorus-pay.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://chorus-pay.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http chorus-pay https://chorus-pay.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=chorus-pay&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fchorus-pay.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "chorus-pay": {
      "url": "https://chorus-pay.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Chorus Pay credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/chorus-pay/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Chorus Pay live API key** (starts with `sk_live_`; Paramètres → Clés API in Chorus Pay). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `choruspay_list_orders` | read | List orders |
| `choruspay_get_order` | read | Get an order |
| `choruspay_create_order` | **write** | Create an order quote |
| `choruspay_update_order` | **write** | Update an order |
| `choruspay_cancel_order` | **write** | Cancel an order |
| `choruspay_usage_status` | meta | Usage status (free-tier meter) |
| `choruspay_request_feature` | meta | Request a missing feature |
| `choruspay_upgrade` | meta | Upgrade to Pro or Pro+ |
| `choruspay_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `choruspay_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `choruspay_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `choruspay_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
