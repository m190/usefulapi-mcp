# Printify MCP by usefulapi

Use your [Printify](https://printify.com) account from Claude, Cursor, or any MCP client — read shops, catalog blueprints, print providers, products and orders, and create or publish products. Hosted,
no local install: connect with your own credentials.

**Live endpoint:** `https://printify.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://printify.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http printify https://printify.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=printify&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fprintify.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "printify": {
      "url": "https://printify.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Printify credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/printify/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Printify API token** (My profile → Connections → API tokens). It is validated, stored per-user, and scoped to you — no
keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `printify_list_shops` | read | List shops |
| `printify_list_products` | read | List products |
| `printify_get_product` | read | Get product |
| `printify_list_orders` | read | List orders |
| `printify_get_order` | read | Get order |
| `printify_calculate_shipping` | read | Calculate shipping |
| `printify_list_catalog_blueprints` | read | List catalog blueprints |
| `printify_get_blueprint` | read | Get blueprint |
| `printify_get_print_providers` | read | Get blueprint print providers |
| `printify_get_variants` | read | Get variants |
| `printify_list_print_providers` | read | List print providers |
| `printify_list_webhooks` | read | List webhooks |
| `printify_list_uploads` | read | List uploads |
| `printify_publish_product` | **write** | Publish product |
| `printify_usage_status` | meta | Usage status (free-tier meter) |
| `printify_request_feature` | meta | Request a missing feature |
| `printify_upgrade` | meta | Upgrade to Pro (unlimited) |
| `printify_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `printify_upgrade` (it returns a Stripe Checkout link). Cancel any time with `printify_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `printify_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
