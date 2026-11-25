# Shirtigo MCP by usefulapi

Use your [Shirtigo](https://www.shirtigo.com) account from Claude, Cursor, or any MCP client. Read orders, projects, products, designs and the base product catalog, and create designs and projects. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://shirtigo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://shirtigo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http shirtigo https://shirtigo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=shirtigo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fshirtigo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "shirtigo": {
      "url": "https://shirtigo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Shirtigo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/shirtigo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Shirtigo Cockpit API key**, which you find under Integrations in Shirtigo Cockpit. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `shirtigo_get_account` | read | Get account |
| `shirtigo_list_projects` | read | List projects |
| `shirtigo_get_project` | read | Get project |
| `shirtigo_list_products` | read | List products |
| `shirtigo_get_product` | read | Get product |
| `shirtigo_list_base_products` | read | List base products |
| `shirtigo_get_base_product` | read | Get base product |
| `shirtigo_list_categories` | read | List base product categories |
| `shirtigo_list_designs` | read | List designs |
| `shirtigo_get_design` | read | Get design |
| `shirtigo_create_design_from_url` | **write** | Create design from URL |
| `shirtigo_create_project` | **write** | Create project |
| `shirtigo_predict_order_price` | read | Predict order price |
| `shirtigo_list_orders` | read | List orders |
| `shirtigo_get_order` | read | Get order |
| `shirtigo_usage_status` | meta | Usage status (free-tier meter) |
| `shirtigo_request_feature` | meta | Request a missing feature |
| `shirtigo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `shirtigo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `shirtigo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `shirtigo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `shirtigo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
