# Bill.pt MCP by usefulapi

Use your [Bill.pt](https://bill.pt) account from Claude, Cursor, or any MCP client. Read invoices, contacts, items, stock and document types, and create contacts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://bill-pt.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bill-pt.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bill-pt https://bill-pt.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bill-pt&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbill-pt.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bill-pt": {
      "url": "https://bill-pt.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Bill.pt credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bill-pt/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Bill.pt API token**, created in Bill.pt under **Gestão de utilizadores** (give your user API permission, then generate a key for that user). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `billpt_list_document_types` | read | List document types |
| `billpt_list_payment_methods` | read | List payment methods |
| `billpt_list_taxes` | read | List taxes |
| `billpt_list_units` | read | List units of measure |
| `billpt_list_series` | read | List numbering series |
| `billpt_list_stores` | read | List stores |
| `billpt_list_contacts` | read | List contacts |
| `billpt_create_contact` | **write** | Create contact |
| `billpt_list_items` | read | List items |
| `billpt_list_stock` | read | List stock |
| `billpt_list_documents` | read | List documents |
| `billpt_usage_status` | meta | Usage status (free-tier meter) |
| `billpt_request_feature` | meta | Request a missing feature |
| `billpt_upgrade` | meta | Upgrade to Pro or Pro+ |
| `billpt_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `billpt_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `billpt_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `billpt_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
