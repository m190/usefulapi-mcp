# F-sąskaita MCP by usefulapi

Use your [F-sąskaita](https://app.fsaskaita.lt) account from Claude, Cursor, or any MCP client. Read invoices, expenses and their PDFs, and create invoices and record expenses. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://f-saskaita.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://f-saskaita.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http f-saskaita https://f-saskaita.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=f-saskaita&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ff-saskaita.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "f-saskaita": {
      "url": "https://f-saskaita.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your F-sąskaita credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/f-saskaita/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **business API token** (F-sąskaita → Settings → Integrations → API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fsaskaita_get_profile` | read | Get business profile |
| `fsaskaita_list_currencies` | read | List currencies |
| `fsaskaita_list_invoices` | read | List invoices |
| `fsaskaita_get_invoice` | read | Get an invoice |
| `fsaskaita_download_invoice_pdf` | read | Download invoice PDF |
| `fsaskaita_list_expenses` | read | List expenses |
| `fsaskaita_get_expense` | read | Get an expense |
| `fsaskaita_download_expense_file` | read | Download expense file |
| `fsaskaita_create_invoice` | **write** | Create an invoice |
| `fsaskaita_update_invoice` | **write** | Replace an invoice |
| `fsaskaita_create_expense` | **write** | Create an expense |
| `fsaskaita_update_expense` | **write** | Replace an expense |
| `fsaskaita_usage_status` | meta | Usage status (free-tier meter) |
| `fsaskaita_request_feature` | meta | Request a missing feature |
| `fsaskaita_upgrade` | meta | Upgrade to Pro or Pro+ |
| `fsaskaita_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `fsaskaita_upgrade` (it returns a Stripe Checkout link). Cancel any time with `fsaskaita_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `fsaskaita_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
