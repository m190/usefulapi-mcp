# Point of Rental MCP by usefulapi

Use your [Point of Rental](https://www.pointofrental.com) account from Claude, Cursor, or any MCP client. Read contracts, customers, products, stock, availability and invoices, and create or update contacts and customers. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://point-of-rental.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://point-of-rental.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http point-of-rental https://point-of-rental.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=point-of-rental&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpoint-of-rental.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "point-of-rental": {
      "url": "https://point-of-rental.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Point of Rental credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/point-of-rental/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Point of Rental API key** (ask your Point of Rental contact or support for it; Elite or Syrinx plans only). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `pointofrental_list_contacts` | read | List contacts |
| `pointofrental_get_contact` | read | Get a contact |
| `pointofrental_list_customers` | read | List customers |
| `pointofrental_get_customer` | read | Get a customer |
| `pointofrental_get_customer_outstanding_invoices` | read | Get customer outstanding invoice totals |
| `pointofrental_list_contracts` | read | List contracts |
| `pointofrental_get_contract` | read | Get a contract |
| `pointofrental_list_products` | read | List products |
| `pointofrental_get_product` | read | Get a product |
| `pointofrental_get_product_availability` | read | Get product availability |
| `pointofrental_list_stock` | read | List stock |
| `pointofrental_get_stock_item` | read | Get a stock item |
| `pointofrental_get_stock_availability` | read | Get stock availability |
| `pointofrental_list_invoices` | read | List invoices |
| `pointofrental_get_invoice` | read | Get an invoice |
| `pointofrental_list_work_orders` | read | List work orders |
| `pointofrental_get_work_order` | read | Get a work order |
| `pointofrental_list_line_items` | read | List line items |
| `pointofrental_list_locations` | read | List locations |
| `pointofrental_list_depots` | read | List depots |
| `pointofrental_list_categories` | read | List categories |
| `pointofrental_create_contact` | **write** | Create a contact |
| `pointofrental_update_contact` | **write** | Update a contact |
| `pointofrental_create_customer` | **write** | Create a customer |
| `pointofrental_update_customer` | **write** | Update a customer |
| `pointofrental_usage_status` | meta | Usage status (free-tier meter) |
| `pointofrental_request_feature` | meta | Request a missing feature |
| `pointofrental_upgrade` | meta | Upgrade to Pro or Pro+ |
| `pointofrental_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `pointofrental_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `pointofrental_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `pointofrental_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
