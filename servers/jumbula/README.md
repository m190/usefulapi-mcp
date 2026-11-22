# Jumbula MCP by usefulapi

Use your [Jumbula](https://jumbula.com) account from Claude, Cursor, or any MCP client. Read orders, forms, installments, transactions and families, and create or update discount coupons. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://jumbula.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://jumbula.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http jumbula https://jumbula.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=jumbula&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fjumbula.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "jumbula": {
      "url": "https://jumbula.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Jumbula credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/jumbula/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **client ID** and **client secret** from Jumbula support, plus the **username** (email) and **password** of the Jumbula user the tools act as. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `jumbula_search_orders` | read | Search orders |
| `jumbula_get_order` | read | Get an order |
| `jumbula_get_order_forms` | read | Get an order's forms |
| `jumbula_get_order_waiver` | read | Get a waiver |
| `jumbula_list_order_transactions` | read | List payment transactions |
| `jumbula_list_installments` | read | List installments |
| `jumbula_search_families` | read | Search families |
| `jumbula_get_family` | read | Get a family |
| `jumbula_list_family_participants` | read | List a family's participants |
| `jumbula_list_family_parents` | read | List a family's parents |
| `jumbula_create_coupon` | **write** | Create a coupon |
| `jumbula_update_coupon` | **write** | Update a coupon |
| `jumbula_usage_status` | meta | Usage status (free-tier meter) |
| `jumbula_request_feature` | meta | Request a missing feature |
| `jumbula_upgrade` | meta | Upgrade to Pro or Pro+ |
| `jumbula_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `jumbula_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `jumbula_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `jumbula_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
