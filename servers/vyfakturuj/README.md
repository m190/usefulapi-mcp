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
| `vyfakturuj_upgrade` | meta | Upgrade to Pro or Pro+ |
| `vyfakturuj_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `vyfakturuj_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `vyfakturuj_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `vyfakturuj_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Vyfakturuj.
