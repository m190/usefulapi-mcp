# bol.com MCP by usefulapi

Connect your bol seller account at https://bol-com.usefulapi.io/mcp.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bol-com.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bol-com https://bol-com.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bol-com&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbol-com.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bol-com": {
      "url": "https://bol-com.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your bol.com credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bol-com/

<!-- connect:end (generated above, edit below) -->

Create a dedicated client ID and secret for UsefulAPI in your bol Seller Dashboard. This uses bol’s documented authentication route for unlisted integration providers. UsefulAPI is independent and is not a listed bol integration partner. Revoke these credentials in bol to stop access. Buyer information you request passes to your chosen AI client and its LLM provider. Creating a new client ID starts a new usage and billing identity.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bol_list_orders` | read | List orders |
| `bol_get_order` | read | Get an order |
| `bol_list_shipments` | read | List shipments |
| `bol_get_shipment` | read | Get a shipment |
| `bol_list_returns` | read | List returns |
| `bol_get_return` | read | Get a return |
| `bol_list_offers` | read | List offers |
| `bol_get_offer` | read | Get an offer |
| `bol_get_offer_not_for_sale_reasons` | read | Why an offer is not for sale |
| `bol_update_offer` | **write** | Update an offer |
| `bol_list_inventory` | read | List FBB inventory |
| `bol_list_invoices` | read | List invoices |
| `bol_get_invoice_specification` | read | Get an invoice specification |
| `bol_get_commissions` | read | Calculate commissions |
| `bol_get_competing_offers` | read | Competing offers for an EAN |
| `bol_get_performance_indicator` | read | Get a performance indicator |
| `bol_get_sales_forecast` | read | Get a sales forecast |
| `bol_get_process_status` | read | Get a process status |
| `bol_usage_status` | meta | Usage status (free-tier meter) |
| `bol_request_feature` | meta | Request a missing feature |
| `bol_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `bol_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API client ID) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `bol_upgrade` (it returns a Stripe Checkout link). Cancel any time with `bol_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `bol_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

Independent integration by usefulapi. See [Terms](https://usefulapi.io/terms/) and [Privacy](https://usefulapi.io/privacy/).
