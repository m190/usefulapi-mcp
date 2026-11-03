# Freshly Inventory MCP by usefulapi

Use your [Freshly](https://apps.shopify.com/freshly) account from Claude, Cursor, or any MCP client. Reads and manages inventory batches and their order-line assignments, and changes Shopify stock only when you turn sync on. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://freshly-inventory.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://freshly-inventory.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http freshly-inventory https://freshly-inventory.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=freshly-inventory&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffreshly-inventory.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "freshly-inventory": {
      "url": "https://freshly-inventory.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Freshly Inventory credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/freshly-inventory/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Freshly API key** (Preferences → API keys in Freshly; Freshly shows it once). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `freshly_get_shop` | read | Get Freshly shop |
| `freshly_list_inventory_batches` | read | List inventory batches |
| `freshly_get_inventory_batch` | read | Get inventory batch |
| `freshly_list_batch_assignments` | read | List batch assignments for an order line |
| `freshly_create_inventory_batch` | **write** | Create inventory batch |
| `freshly_update_inventory_batch` | **write** | Update inventory batch |
| `freshly_assign_batch_to_line_item` | **write** | Assign batch to order line |
| `freshly_remove_batch_assignment` | **write** | Remove batch assignment from order line |
| `freshly_usage_status` | meta | Usage status (free-tier meter) |
| `freshly_request_feature` | meta | Request a missing feature |
| `freshly_upgrade` | meta | Upgrade to Pro or Pro+ |
| `freshly_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `freshly_upgrade` (it returns a Stripe Checkout link). Cancel any time with `freshly_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `freshly_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
