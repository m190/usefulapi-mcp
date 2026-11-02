# Ticimax MCP by usefulapi

Use your [Ticimax](https://www.ticimax.com) account from Claude, Cursor, or any MCP client. Read orders, products, stock, categories and members, move an order forward, or record an invoice number. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://ticimax.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ticimax.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ticimax https://ticimax.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ticimax&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fticimax.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ticimax": {
      "url": "https://ticimax.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Ticimax credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ticimax/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **store address** (for example `www.yourstore.com`) and your **WS code**, created in the Ticimax admin panel under **Ayarlar → WS Yetki Kodu Yönetimi → Yeni Ekle**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ticimax_list_orders` | read | List orders |
| `ticimax_get_order` | read | Get order |
| `ticimax_list_order_items` | read | List order line items |
| `ticimax_list_order_payments` | read | List order payments |
| `ticimax_list_order_shipments` | read | List order shipments |
| `ticimax_list_order_statuses` | read | List order statuses |
| `ticimax_list_payment_types` | read | List payment types |
| `ticimax_update_order_status` | **write** | Update order status |
| `ticimax_set_invoice_number` | **write** | Set order invoice number |
| `ticimax_list_products` | read | List products |
| `ticimax_count_products` | read | Count products |
| `ticimax_list_variants` | read | List product variants (stock and prices) |
| `ticimax_list_categories` | read | List categories |
| `ticimax_list_brands` | read | List brands |
| `ticimax_list_suppliers` | read | List suppliers |
| `ticimax_list_members` | read | List members (customers) |
| `ticimax_list_member_addresses` | read | List member addresses |
| `ticimax_usage_status` | meta | Usage status (free-tier meter) |
| `ticimax_request_feature` | meta | Request a missing feature |
| `ticimax_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `ticimax_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `ticimax_upgrade` (it returns a Stripe Checkout link). Cancel any time with `ticimax_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `ticimax_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
