# TOConline MCP by usefulapi

Connect your assistant to TOConline at https://toconline.usefulapi.io/mcp.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://toconline.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http toconline https://toconline.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=toconline&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftoconline.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "toconline": {
      "url": "https://toconline.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TOConline credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/toconline/

<!-- connect:end (generated above, edit below) -->

An Empresário opens Empresa → Configurações → Dados API, identifies the integrator, and receives a temporary access link containing the company's Client ID, Client secret, OAuth URL and API URL. Enter these on the connector's login page. Use the matching numeric API and OAuth shard URLs supplied by TOConline.

The registered redirect URI defaults to https://oauth.pstmn.io/v1/callback. If changed in TOConline, enter its exact HTTPS value. The connector captures the authorization code directly from the vendor response without visiting that callback. A customer, product or supplier record with a company relationship is required to identify your company.

The 20 product tools read customers, suppliers, products, sales documents, receipts, purchases and reference data. They do not change accounting records.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `toconline_list_customers` | read | List customers |
| `toconline_list_suppliers` | read | List suppliers |
| `toconline_list_products` | read | List products |
| `toconline_list_services` | read | List services |
| `toconline_list_sales_documents` | read | List sales documents |
| `toconline_list_sales_receipts` | read | List sales receipts |
| `toconline_list_purchase_documents` | read | List purchase documents |
| `toconline_list_purchase_payments` | read | List purchase payments |
| `toconline_list_countries` | read | List countries |
| `toconline_list_tax_descriptors` | read | List tax descriptors |
| `toconline_list_item_families` | read | List item families |
| `toconline_list_units_of_measure` | read | List units of measure |
| `toconline_list_document_series` | read | List document series |
| `toconline_list_currencies` | read | List currencies |
| `toconline_get_customer` | read | Get customer |
| `toconline_get_supplier` | read | Get supplier |
| `toconline_get_sales_document` | read | Get sales document |
| `toconline_get_sales_receipt` | read | Get sales receipt |
| `toconline_get_purchase_payment` | read | Get purchase payment |
| `toconline_list_sales_document_lines` | read | List sales document lines |
| `toconline_usage_status` | meta | Usage status (free-tier meter) |
| `toconline_request_feature` | meta | Request a missing feature |
| `toconline_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `toconline_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per company) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `toconline_upgrade` (it returns a Stripe Checkout link). Cancel any time with `toconline_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `toconline_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT. An independent integration by usefulapi; not affiliated with TOConline.
