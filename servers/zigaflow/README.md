# Zigaflow MCP by usefulapi

Use your [Zigaflow](https://www.zigaflow.com) account from Claude, Cursor, or any MCP client. Read clients, contacts, quotations, jobs, invoices, products, stock, suppliers, purchase orders and tickets. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://zigaflow.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://zigaflow.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http zigaflow https://zigaflow.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=zigaflow&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fzigaflow.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "zigaflow": {
      "url": "https://zigaflow.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Zigaflow credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/zigaflow/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Zigaflow API key** (click the cog, choose **Advanced**, then **Generate**). Zigaflow must enable API access first. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `zigaflow_list_clients` | read | List clients |
| `zigaflow_get_client` | read | Get a client |
| `zigaflow_find_client_by_name` | read | Find a client by name |
| `zigaflow_list_client_addresses` | read | List client addresses |
| `zigaflow_list_contacts` | read | List contacts |
| `zigaflow_get_contact` | read | Get a contact |
| `zigaflow_find_contact_by_email` | read | Find a contact by email |
| `zigaflow_list_quotations` | read | List quotations |
| `zigaflow_get_quotation` | read | Get a quotation |
| `zigaflow_list_quotations_by_contact` | read | List quotations of a contact |
| `zigaflow_list_jobs` | read | List jobs |
| `zigaflow_get_job` | read | Get a job |
| `zigaflow_list_invoices` | read | List invoices |
| `zigaflow_get_invoice` | read | Get an invoice |
| `zigaflow_list_products` | read | List products |
| `zigaflow_get_product` | read | Get a product |
| `zigaflow_list_product_prices` | read | List product prices |
| `zigaflow_list_product_costs` | read | List product costs |
| `zigaflow_get_product_stock` | read | Get stock of a product |
| `zigaflow_list_stock` | read | List stock levels |
| `zigaflow_list_suppliers` | read | List suppliers |
| `zigaflow_get_supplier` | read | Get a supplier |
| `zigaflow_list_purchase_orders` | read | List purchase orders |
| `zigaflow_get_purchase_order` | read | Get a purchase order |
| `zigaflow_list_tickets` | read | List tickets |
| `zigaflow_get_ticket` | read | Get a ticket |
| `zigaflow_list_eforms` | read | List eForms |
| `zigaflow_get_eform` | read | Get an eForm |
| `zigaflow_list_tasks` | read | List tasks |
| `zigaflow_list_users` | read | List users |
| `zigaflow_list_lookup` | read | List a lookup list |
| `zigaflow_usage_status` | meta | Usage status (free-tier meter) |
| `zigaflow_request_feature` | meta | Request a missing feature |
| `zigaflow_upgrade` | meta | Upgrade to Pro or Pro+ |
| `zigaflow_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `zigaflow_upgrade` (it returns a Stripe Checkout link). Cancel any time with `zigaflow_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `zigaflow_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
