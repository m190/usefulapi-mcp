# Facturis Online MCP by usefulapi

Use your [Facturis Online](https://facturis-online.ro) account from Claude, Cursor, or any MCP client. Read invoices, clients, products and stock levels, and create clients and invoices. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://facturis-online.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://facturis-online.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http facturis-online https://facturis-online.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=facturis-online&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffacturis-online.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "facturis-online": {
      "url": "https://facturis-online.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Facturis Online credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/facturis-online/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **APIkey** from Facturis Online, the **user name** and **password** you log in with, and your **company fiscal code** (CUI or CIF). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `facturisonline_list_products` | read | List products |
| `facturisonline_get_stock` | read | Get stock levels |
| `facturisonline_list_clients` | read | List clients |
| `facturisonline_list_invoices` | read | List invoices |
| `facturisonline_create_client` | **write** | Create a client |
| `facturisonline_create_invoice` | **write** | Create an invoice |
| `facturisonline_usage_status` | meta | Usage status (free-tier meter) |
| `facturisonline_request_feature` | meta | Request a missing feature |
| `facturisonline_upgrade` | meta | Upgrade to Pro or Pro+ |
| `facturisonline_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `facturisonline_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `facturisonline_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `facturisonline_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
