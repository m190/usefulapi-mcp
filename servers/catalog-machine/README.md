# Catalog Machine MCP by usefulapi

Use your [Catalog Machine](https://catalogmachine.com) account from Claude, Cursor, or any MCP client. Read products, categories, orders and catalogs, update products and rebuild catalog PDFs. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://catalog-machine.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://catalog-machine.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http catalog-machine https://catalog-machine.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=catalog-machine&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcatalog-machine.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "catalog-machine": {
      "url": "https://catalog-machine.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Catalog Machine credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/catalog-machine/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Catalog Machine API key** (Catalog Machine → Automation page → API section). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `catalogmachine_list_products` | read | List products |
| `catalogmachine_get_product` | read | Get a product |
| `catalogmachine_update_product` | **write** | Update a product |
| `catalogmachine_list_categories` | read | List categories |
| `catalogmachine_list_orders` | read | List orders |
| `catalogmachine_list_catalogs` | read | List catalogs |
| `catalogmachine_rebuild_catalog` | **write** | Rebuild a catalog PDF |
| `catalogmachine_get_catalog_job` | read | Get a catalog rebuild job |
| `catalogmachine_get_import_job` | read | Get an import job |
| `catalogmachine_usage_status` | meta | Usage status (free-tier meter) |
| `catalogmachine_request_feature` | meta | Request a missing feature |
| `catalogmachine_upgrade` | meta | Upgrade to Pro or Pro+ |
| `catalogmachine_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `catalogmachine_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `catalogmachine_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `catalogmachine_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
