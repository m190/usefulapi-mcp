# Braintree MCP by usefulapi

Query payments and issue refunds in your Braintree merchant account from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Braintree credentials.

**Live endpoint:** `https://braintree.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/braintree

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://braintree.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http braintree https://braintree.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=braintree&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbraintree.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "braintree": {
      "url": "https://braintree.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Braintree credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/braintree/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Braintree merchant ID + keys. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `braintree_find_transaction` | read | Find a transaction |
| `braintree_search_transactions` | read | Search transactions |
| `braintree_find_customer` | read | Find a customer |
| `braintree_customer_payment_methods` | read | List a customer's payment methods |
| `braintree_list_subscriptions` | read | List a customer's subscription activity |
| `braintree_refund_transaction` | **write** | Refund a transaction |
| `braintree_void_transaction` | **write** | Void a transaction |
| `braintree_usage_status` | meta | Usage status (free-tier meter) |
| `braintree_request_feature` | meta | Request a missing feature |
| `braintree_upgrade` | meta | Upgrade to Pro or Pro+ |
| `braintree_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `braintree_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `braintree_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `braintree_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
