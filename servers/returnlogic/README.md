# ReturnLogic MCP by usefulapi

Use your [ReturnLogic](https://returnlogic.com) account from Claude, Cursor, or any MCP client. Read returns, orders, customers and products, and flag a return, mark its items received or add custom fields to it. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://returnlogic.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://returnlogic.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http returnlogic https://returnlogic.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=returnlogic&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Freturnlogic.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "returnlogic": {
      "url": "https://returnlogic.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ReturnLogic credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/returnlogic/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **ReturnLogic API token**, generated in ReturnLogic under **Settings → Applications → Private**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `returnlogic_list_rmas` | read | List returns (RMAs) |
| `returnlogic_count_rmas` | read | Count returns (RMAs) |
| `returnlogic_get_rma` | read | Get return (RMA) |
| `returnlogic_get_rma_item_type_history` | read | Get return type history of an RMA item |
| `returnlogic_get_rma_metafields` | read | Get RMA metafields |
| `returnlogic_get_rma_item_metafields` | read | Get RMA item metafields |
| `returnlogic_list_orders` | read | List orders |
| `returnlogic_count_orders` | read | Count orders |
| `returnlogic_get_order` | read | Get order |
| `returnlogic_list_customers` | read | List customers |
| `returnlogic_get_customer` | read | Get customer |
| `returnlogic_list_products` | read | List products |
| `returnlogic_count_products` | read | Count products |
| `returnlogic_get_product` | read | Get product |
| `returnlogic_list_product_categories` | read | List product categories |
| `returnlogic_flag_rma` | **write** | Flag an RMA |
| `returnlogic_mark_rma_items_received` | **write** | Mark RMA items received |
| `returnlogic_add_rma_metafields` | **write** | Add RMA metafields |
| `returnlogic_usage_status` | meta | Usage status (free-tier meter) |
| `returnlogic_request_feature` | meta | Request a missing feature |
| `returnlogic_upgrade` | meta | Upgrade to Pro or Pro+ |
| `returnlogic_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `returnlogic_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `returnlogic_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `returnlogic_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
