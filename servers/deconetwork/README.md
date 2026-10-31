# DecoNetwork MCP by usefulapi

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://deconetwork.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http deconetwork https://deconetwork.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=deconetwork&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdeconetwork.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "deconetwork": {
      "url": "https://deconetwork.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your DecoNetwork credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/deconetwork/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `deconetwork_search_orders` | read | Search orders |
| `deconetwork_get_order` | read | Get order |
| `deconetwork_list_orders_due` | read | List orders due |
| `deconetwork_update_order_status` | **write** | Mark order produced or shipped |
| `deconetwork_add_order_note` | **write** | Add internal note to order |
| `deconetwork_usage_status` | meta | Usage status (free-tier meter) |
| `deconetwork_request_feature` | meta | Request a missing feature |
| `deconetwork_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `deconetwork_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** (per DecoNetwork site) | $0 | 50 tool calls / month |
| **Pro** (per DecoNetwork site) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `deconetwork_upgrade` (it returns a Stripe Checkout link). Cancel any time with `deconetwork_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `deconetwork_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT.

## Access, data and production effects

This initial release supports order operations. Supplier product/catalogue tools and document/media links are unavailable. Passwords, login tokens, card fields and redeemable coupon/gift-certificate codes are removed from results. No file downloads, payments, refunds or order creation are exposed.

Customer contacts/addresses, order amounts and production data requested through tools reach your chosen AI client and its LLM provider. Only connect data and designs you may process with that service. The vendor API uses staff username/password credentials, including HTTPS query parameters on searches. Disable the dedicated staff account or change its password to stop access; usage and billing follow the site.

Marking produced or shipped changes live production/shipping records. Customer email is disabled by default and sent only when explicitly requested for a whole-order change. Internal notes are visible to staff; repeated calls add notes. No request is automatically retried. Check DecoNetwork before repeating an uncertain write. Independent integration; no vendor approval or endorsement claimed.
