# PowerHub MCP by usefulapi

Use your PowerHub account from Claude, Cursor, or any MCP client. Read orders, products, stock, shipments and invoices. The server is read-only. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://powerhub.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://powerhub.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http powerhub https://powerhub.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=powerhub&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpowerhub.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "powerhub": {
      "url": "https://powerhub.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your PowerHub credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/powerhub/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **PowerHub API key** (Pomoc → API in PowerHub; the API needs the Professional plan or higher). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `powerhub_list_orders` | read | List orders |
| `powerhub_get_order` | read | Get order |
| `powerhub_list_products` | read | List products |
| `powerhub_get_product` | read | Get product |
| `powerhub_get_product_inventory` | read | Get product inventory |
| `powerhub_list_stocks` | read | List warehouses |
| `powerhub_list_shipments` | read | List shipments |
| `powerhub_get_shipment` | read | Get shipment |
| `powerhub_list_carriers` | read | List carriers |
| `powerhub_list_invoices` | read | List invoices |
| `powerhub_usage_status` | meta | Usage status (free-tier meter) |
| `powerhub_request_feature` | meta | Request a missing feature |
| `powerhub_upgrade` | meta | Upgrade to Pro or Pro+ |
| `powerhub_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `powerhub_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `powerhub_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `powerhub_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
