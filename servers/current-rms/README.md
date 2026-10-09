# Current RMS MCP by usefulapi

Use [Current RMS](https://www.current-rms.com) from Claude, Cursor, or any MCP client — browse opportunities, products, stock, availability and invoices, and create members and quotes.
Hosted, no local install: connect with your own Current RMS credentials.

**Live endpoint:** `https://current-rms.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/current-rms

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://current-rms.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http current-rms https://current-rms.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=current-rms&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcurrent-rms.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "current-rms": {
      "url": "https://current-rms.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Current RMS credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/current-rms/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Current RMS subdomain** (the `acme` in acme.current-rms.com) and an **API key** (System Setup → Integrations → API).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `current_rms_list_members` | read | List members |
| `current_rms_get_member` | read | Get one member |
| `current_rms_list_opportunities` | read | List opportunities |
| `current_rms_get_opportunity` | read | Get one opportunity |
| `current_rms_list_opportunity_items` | read | List an opportunity's line items |
| `current_rms_list_products` | read | List products |
| `current_rms_get_product` | read | Get one product |
| `current_rms_list_product_inventories` | read | List product inventory |
| `current_rms_check_product_availability` | read | Check a product's availability |
| `current_rms_list_stock_levels` | read | List stock levels |
| `current_rms_list_stores` | read | List stores |
| `current_rms_list_invoices` | read | List invoices and credit notes |
| `current_rms_get_invoice` | read | Get one invoice |
| `current_rms_list_projects` | read | List projects |
| `current_rms_list_activities` | read | List activities |
| `current_rms_create_member` | **write** | Create a member |
| `current_rms_update_member` | **write** | Update a member |
| `current_rms_create_opportunity` | **write** | Create an opportunity |
| `current_rms_update_opportunity` | **write** | Update an opportunity |
| `current_rms_create_activity` | **write** | Log an activity |
| `current_rms_usage_status` | meta | Usage status (free-tier meter) |
| `current_rms_request_feature` | meta | Request a missing feature |
| `current_rms_upgrade` | meta | Upgrade to Pro (unlimited) |
| `current_rms_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `current_rms_upgrade` (it returns a Stripe Checkout link). Cancel any time with `current_rms_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `current_rms_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Current RMS.
