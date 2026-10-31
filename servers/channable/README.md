# Channable MCP by usefulapi

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://channable.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http channable https://channable.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=channable&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fchannable.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "channable": {
      "url": "https://channable.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Channable credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/channable/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `channable_list_orders` | read | List orders |
| `channable_get_order` | read | Get an order |
| `channable_ship_order` | **write** | Mark an order as shipped |
| `channable_cancel_order` | **write** | Cancel an order |
| `channable_mark_order_manual` | **write** | Mark an order as handled manually |
| `channable_create_return` | **write** | Create a return for an order |
| `channable_list_returns` | read | List returns |
| `channable_get_return` | read | Get a return |
| `channable_update_return_status` | **write** | Set the status of a return |
| `channable_list_stock_updates` | read | List posted stock updates |
| `channable_update_stock` | **write** | Update product stock on all marketplaces |
| `channable_get_order_statistics` | read | Get order statistics |
| `channable_list_transporters` | read | List transporter codes |
| `channable_usage_status` | meta | Usage status (free-tier meter) |
| `channable_request_feature` | meta | Request a missing feature |
| `channable_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `channable_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** (per Channable company) | $0 | 50 tool calls / month |
| **Pro** (per Channable company) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `channable_upgrade` (it returns a Stripe Checkout link). Cancel any time with `channable_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `channable_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT.

## Account access and marketplace effects

Only a company owner can generate the API token under Company settings → Channable API. Find the project ID in its Settings. Tokens expire after one year; revoke the dedicated token to stop access. Usage and billing follow the company ID.

Requested customer contact/address, order and return data reaches your chosen AI client and LLM provider; API tokens do not. Shipment, cancellation, return and stock tools can change live marketplace orders and availability. Mark-manual stops Channable processing without notifying the marketplace. Confirm targets and values before changes. No request is automatically retried; check Channable before retrying an uncertain or partial write. Independent integration; no vendor approval or endorsement claimed.
