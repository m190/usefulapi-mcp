# Vyfakturuj MCP by usefulapi

Use [Vyfakturuj](https://www.vyfakturuj.cz) from Claude, Cursor, or any MCP client — search invoices and contacts, create invoices and contacts, read number series, payment methods and tags.
Hosted, no local install: connect with your own Vyfakturuj credentials.

**Live endpoint:** `https://vyfakturuj.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/vyfakturuj

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://vyfakturuj.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http vyfakturuj https://vyfakturuj.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=vyfakturuj&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fvyfakturuj.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "vyfakturuj": {
      "url": "https://vyfakturuj.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Vyfakturuj credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/vyfakturuj/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `vyfakturuj_list_invoices` | read | List invoices |
| `vyfakturuj_get_invoice` | read | Get an invoice |
| `vyfakturuj_create_invoice` | **write** | Create an invoice (issues a real numbered document) |
| `vyfakturuj_list_contacts` | read | List contacts |
| `vyfakturuj_get_contact` | read | Get a contact |
| `vyfakturuj_create_contact` | **write** | Create a contact |
| `vyfakturuj_get_template` | read | Get a recurring-invoice template |
| `vyfakturuj_list_payment_methods` | read | List payment methods |
| `vyfakturuj_list_number_series` | read | List number series |
| `vyfakturuj_list_tags` | read | List tags |
| `vyfakturuj_usage_status` | meta | Usage status (free-tier meter) |
| `vyfakturuj_request_feature` | meta | Request a missing feature |
| `vyfakturuj_upgrade` | meta | Upgrade to Pro (unlimited) |
| `vyfakturuj_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `vyfakturuj_upgrade` (it returns a Stripe Checkout link). Cancel any time with `vyfakturuj_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `vyfakturuj_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Vyfakturuj.
