# Imweb MCP by usefulapi

Use your [Imweb](https://imweb.me) account from Claude, Cursor, or any MCP client. Read store details, products, orders, members, reviews, inquiries and coupons, add tracking numbers and answer product inquiries. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://imweb.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://imweb.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http imweb https://imweb.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=imweb&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fimweb.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "imweb": {
      "url": "https://imweb.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Imweb credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/imweb/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the site's **API Key** and **Secret Key** (환경설정 → 외부 서비스 연동 (API) in the Imweb site admin). The Secret Key is used only to get an access token and is not stored. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `imweb_get_store` | read | Get store info |
| `imweb_list_products` | read | List products |
| `imweb_get_product` | read | Get a product |
| `imweb_list_categories` | read | List product categories |
| `imweb_list_orders` | read | List orders |
| `imweb_get_order` | read | Get an order |
| `imweb_add_tracking_number` | **write** | Add a tracking number |
| `imweb_list_members` | read | List members |
| `imweb_get_member` | read | Get a member |
| `imweb_list_reviews` | read | List product reviews |
| `imweb_list_inquiries` | read | List product inquiries |
| `imweb_answer_inquiry` | **write** | Answer a product inquiry |
| `imweb_list_coupons` | read | List coupons |
| `imweb_usage_status` | meta | Usage status (free-tier meter) |
| `imweb_request_feature` | meta | Request a missing feature |
| `imweb_upgrade` | meta | Upgrade to Pro or Pro+ |
| `imweb_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `imweb_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `imweb_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `imweb_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
