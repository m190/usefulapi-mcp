# Craftybase MCP by usefulapi

Use your [Craftybase](https://craftybase.com) account from Claude, Cursor, or any MCP client. Read materials, products, components, manufactures, recipes, purchases and stock history (read-only). Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://craftybase.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://craftybase.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http craftybase https://craftybase.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=craftybase&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcraftybase.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "craftybase": {
      "url": "https://craftybase.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Craftybase credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/craftybase/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **StockSmith personal API key** (starts with live_; Settings → API Keys; needs a Business or Growth plan). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `craftybase_get_account` | read | Get account details |
| `craftybase_list_materials` | read | List materials |
| `craftybase_get_material` | read | Get a material |
| `craftybase_list_material_inventory_adjustments` | read | List a material's inventory adjustments |
| `craftybase_list_products` | read | List products |
| `craftybase_get_product` | read | Get a product |
| `craftybase_list_components` | read | List components |
| `craftybase_get_component` | read | Get a component |
| `craftybase_list_component_inventory_adjustments` | read | List a component's inventory adjustments |
| `craftybase_list_manufactures` | read | List manufactures |
| `craftybase_get_manufacture` | read | Get a manufacture |
| `craftybase_list_recipes` | read | List recipes |
| `craftybase_list_expenses` | read | List purchases |
| `craftybase_list_inventory_adjustments` | read | List inventory adjustments |
| `craftybase_usage_status` | meta | Usage status (free-tier meter) |
| `craftybase_request_feature` | meta | Request a missing feature |
| `craftybase_upgrade` | meta | Upgrade to Pro or Pro+ |
| `craftybase_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `craftybase_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `craftybase_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `craftybase_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
