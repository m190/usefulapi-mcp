# RetailCloud MCP by usefulapi

Use your RetailCloud vendor account from Claude, Cursor, or any MCP client. Read products, orders and purchase orders, and update inventory, costs and shipping tracking. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://retailcloud-pos.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://retailcloud-pos.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http retailcloud-pos https://retailcloud-pos.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=retailcloud-pos&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fretailcloud-pos.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "retailcloud-pos": {
      "url": "https://retailcloud-pos.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your RetailCloud credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/retailcloud-pos/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **environment** (production or staging) and your **RetailCloud API token** (RetailCloud admin portal: vendor profile, Generate token). The buyer must enable the V2 API for your vendor profile first. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `retailcloudpos_list_products` | read | List products |
| `retailcloudpos_list_orders` | read | List orders |
| `retailcloudpos_get_purchase_order` | read | Get purchase order |
| `retailcloudpos_create_products` | **write** | Create or update products |
| `retailcloudpos_add_variants` | **write** | Add variants |
| `retailcloudpos_update_inventory` | **write** | Update inventory, price and cost |
| `retailcloudpos_add_tracking` | **write** | Add tracking and mark shipped |
| `retailcloudpos_usage_status` | meta | Usage status (free-tier meter) |
| `retailcloudpos_request_feature` | meta | Request a missing feature |
| `retailcloudpos_upgrade` | meta | Upgrade to Pro or Pro+ |
| `retailcloudpos_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `retailcloudpos_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `retailcloudpos_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `retailcloudpos_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
