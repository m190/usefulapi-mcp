# Quaderno MCP by usefulapi

Calculate tax rates and read or create your invoices, contacts and transactions from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Quaderno API key.

**Live endpoint:** `https://quaderno.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/quaderno

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://quaderno.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http quaderno https://quaderno.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=quaderno&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fquaderno.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "quaderno": {
      "url": "https://quaderno.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Quaderno credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/quaderno/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Quaderno API key and account subdomain. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ping` | read | Ping |
| `calculate_tax` | read | Calculate tax |
| `list_invoices` | read | List invoices |
| `get_invoice` | read | Get invoice |
| `list_contacts` | read | List contacts |
| `get_contact` | read | Get contact |
| `list_items` | read | List items |
| `get_item` | read | Get item |
| `list_credit_notes` | read | List credit notes |
| `get_credit_note` | read | Get credit note |
| `list_receipts` | read | List receipts |
| `get_receipt` | read | Get receipt |
| `list_expenses` | read | List expenses |
| `get_expense` | read | Get expense |
| `list_tax_codes` | read | List tax codes |
| `list_jurisdictions` | read | List jurisdictions |
| `list_webhooks` | read | List webhooks |
| `quaderno_request` | read | Request |
| `create_contact` | **write** | Create contact |
| `update_contact` | **write** | Update contact |
| `create_item` | **write** | Create item |
| `create_invoice` | **write** | Create invoice |
| `create_transaction` | **write** | Create transaction |
| `quaderno_usage_status` | meta | Usage status (free-tier meter) |
| `quaderno_upgrade` | meta | Upgrade to Pro (unlimited) |
| `quaderno_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `quaderno_upgrade` (it returns a Stripe Checkout link). Cancel any time with `quaderno_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `quaderno_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
