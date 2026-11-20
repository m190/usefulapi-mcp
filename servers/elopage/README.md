# Ablefy (elopage) MCP by usefulapi

Use your [Ablefy (elopage)](https://ablefy.com) account from Claude, Cursor, or any MCP client. Read your account's products, orders, payments, invoices, funnels, event tickets and webhook endpoints. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://elopage.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://elopage.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http elopage https://elopage.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=elopage&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Felopage.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "elopage": {
      "url": "https://elopage.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Ablefy (elopage) credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/elopage/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **Ablefy API key** and the **Ablefy API secret**, which you create in your Ablefy account under the API integration settings. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `elopage_get_me` | read | Show the connected account |
| `elopage_list_products` | read | List products |
| `elopage_get_product` | read | Get a product |
| `elopage_get_order` | read | Get an order |
| `elopage_get_payment` | read | Get a payment |
| `elopage_list_invoices` | read | List invoices |
| `elopage_list_funnels` | read | List funnels |
| `elopage_get_funnel` | read | Get a funnel |
| `elopage_list_event_tickets` | read | List event tickets |
| `elopage_list_pricing_plans` | read | List pricing plans |
| `elopage_list_publishers` | read | List publishers |
| `elopage_list_affiliate_redirections` | read | List affiliate redirections |
| `elopage_list_webhook_endpoints` | read | List webhook endpoints |
| `elopage_get_transfer` | read | Get a transfer |
| `elopage_usage_status` | meta | Usage status (free-tier meter) |
| `elopage_request_feature` | meta | Request a missing feature |
| `elopage_upgrade` | meta | Upgrade to Pro or Pro+ |
| `elopage_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `elopage_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `elopage_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `elopage_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
