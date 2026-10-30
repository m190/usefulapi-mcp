# Cliento MCP by usefulapi

Hosted at https://cliento.usefulapi.io/mcp.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cliento.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cliento https://cliento.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cliento&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcliento.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cliento": {
      "url": "https://cliento.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Cliento credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cliento/

<!-- connect:end (generated above, edit below) -->

Use a scoped Cliento API key created on your account page. Grant read access only to the locations and catalog resources you need. This integration covers administration and stock, with customer, booking and clinical records excluded.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cliento_list_locations` | read | List locations |
| `cliento_get_location` | read | Get location |
| `cliento_list_staff` | read | List staff |
| `cliento_list_resources` | read | List resources |
| `cliento_get_resource` | read | Get resource |
| `cliento_list_resource_groups` | read | List resource groups |
| `cliento_list_services` | read | List services |
| `cliento_get_service` | read | Get service |
| `cliento_list_service_groups` | read | List service groups |
| `cliento_list_resource_services` | read | List resource services |
| `cliento_list_products` | read | List products |
| `cliento_get_product` | read | Get product |
| `cliento_list_stock_movements` | read | List stock movements |
| `cliento_list_merchants` | read | List merchants |
| `cliento_list_colour_bar_ranges` | read | List colour bar ranges |
| `cliento_get_colour_bar_range` | read | Get colour bar range |
| `cliento_list_colour_bar_items` | read | List colour bar items |
| `cliento_get_colour_bar_item` | read | Get colour bar item |
| `cliento_usage_status` | meta | Usage status (free-tier meter) |
| `cliento_request_feature` | meta | Request a missing feature |
| `cliento_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `cliento_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API key) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `cliento_upgrade` (it returns a Stripe Checkout link). Cancel any time with `cliento_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `cliento_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT.
