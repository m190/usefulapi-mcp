# e-Courier MCP by usefulapi

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://e-courier.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http e-courier https://e-courier.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=e-courier&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fe-courier.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "e-courier": {
      "url": "https://e-courier.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your e-Courier credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/e-courier/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ecourier_get_order` | read | Get order |
| `ecourier_get_order_fees` | read | Get order fees |
| `ecourier_quote_order` | read | Quote an order |
| `ecourier_get_customer_by_code` | read | Get customer by code |
| `ecourier_get_customer` | read | Get customer by id |
| `ecourier_find_customer_by_phone` | read | Find customer by phone |
| `ecourier_list_customer_ship_tos` | read | List customer ship-to addresses |
| `ecourier_list_drivers` | read | List active drivers |
| `ecourier_get_driver` | read | Get driver |
| `ecourier_get_driver_orders` | read | Get a driver's current orders |
| `ecourier_list_skills` | read | List driver skills |
| `ecourier_get_driver_skills` | read | Get a driver's skills |
| `ecourier_get_manifest` | read | Get manifest |
| `ecourier_list_driver_manifests` | read | List a driver's manifests |
| `ecourier_list_invoices` | read | List invoices |
| `ecourier_get_invoice_fees` | read | Get invoice fees |
| `ecourier_list_payments` | read | List payments |
| `ecourier_usage_status` | meta | Usage status (free-tier meter) |
| `ecourier_request_feature` | meta | Request a missing feature |
| `ecourier_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `ecourier_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** (per e-Courier database/user) | $0 | 50 tool calls / month |
| **Pro** (per e-Courier database/user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `ecourier_upgrade` (it returns a Stripe Checkout link). Cancel any time with `ecourier_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `ecourier_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT.

## API access and data

Customer API enablement is arranged through e-Courier support. The default API host is database.e-courier.com; the optional assigned URL also supports post.database.e-courier.com for that database. Arbitrary hosts or endpoint paths are not accepted.

Requested shipment/customer contacts, addresses, driver, manifest and financial records pass to your chosen AI client and LLM provider. Only connect data you may process with that service. Credentials are masked from results/diagnostics; card fields and base64 images/signatures are removed. Price quotes do not create courier jobs.

No operation is automatically retried. A refused cached token is cleared for the next explicit call. Disable the API user or change its password to stop new logins; already-issued tokens can remain valid until revoked or expired (20 idle days). Usage and billing follow database and normalized username. Independent integration; no vendor approval or endorsement claimed.
