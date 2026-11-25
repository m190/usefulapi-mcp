# Facturama MCP by usefulapi

Use your [Facturama](https://facturama.mx) account from Claude, Cursor, or any MCP client. It reads issued invoices, clients, products and SAT catalogs, and creates clients and products, but never issues an invoice. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://facturama.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://facturama.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http facturama https://facturama.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=facturama&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffacturama.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "facturama": {
      "url": "https://facturama.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Facturama credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/facturama/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your Facturama portal **user name** and **password**, and the **environment** (sandbox for tests, production for live data). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `facturama_list_clients` | read | List clients |
| `facturama_get_client` | read | Get a client |
| `facturama_list_products` | read | List products |
| `facturama_get_product` | read | Get a product |
| `facturama_search_sat_product_codes` | read | Search SAT product codes |
| `facturama_search_sat_units` | read | Search SAT units |
| `facturama_list_cfdis` | read | List issued CFDIs |
| `facturama_get_cfdi` | read | Get a CFDI |
| `facturama_download_cfdi` | read | Download a CFDI file |
| `facturama_create_client` | **write** | Create a client |
| `facturama_create_product` | **write** | Create a product |
| `facturama_usage_status` | meta | Usage status (free-tier meter) |
| `facturama_request_feature` | meta | Request a missing feature |
| `facturama_upgrade` | meta | Upgrade to Pro or Pro+ |
| `facturama_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `facturama_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `facturama_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `facturama_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
