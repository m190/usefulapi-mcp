# Fakturowo MCP by usefulapi

**Live endpoint:** `https://fakturowo.usefulapi.io/mcp`

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://fakturowo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http fakturowo https://fakturowo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=fakturowo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffakturowo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "fakturowo": {
      "url": "https://fakturowo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Fakturowo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/fakturowo/

<!-- connect:end (generated above, edit below) -->

Connect with your Fakturowo API key from Konto and, if needed, the account-specific API URL shown there. API access requires the vendor’s paid add-on. Issuing a document creates it immediately; payment changes affect the saved document. Regenerating the API key creates a new usefulapi billing identity.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fakturowo_list_documents` | read | List documents |
| `fakturowo_get_document` | read | Get document |
| `fakturowo_get_next_document_number` | read | Get next document number |
| `fakturowo_list_clients` | read | List clients |
| `fakturowo_get_client` | read | Get client |
| `fakturowo_list_products` | read | List products |
| `fakturowo_get_product` | read | Get product |
| `fakturowo_create_document` | **write** | Create document |
| `fakturowo_set_document_payment_status` | **write** | Set document payment status |
| `fakturowo_usage_status` | meta | Usage status (free-tier meter) |
| `fakturowo_request_feature` | meta | Request a missing feature |
| `fakturowo_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `fakturowo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API key) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `fakturowo_upgrade` (it returns a Stripe Checkout link). Cancel any time with `fakturowo_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `fakturowo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
