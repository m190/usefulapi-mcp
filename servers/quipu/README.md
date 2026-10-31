# Quipu MCP by usefulapi

Use your [Quipu](https://getquipu.com) account from Claude, Cursor, or any MCP client. Read clients, suppliers, invoices and accounting entries, and create contacts and draft invoices. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://quipu.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://quipu.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http quipu https://quipu.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=quipu&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fquipu.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "quipu": {
      "url": "https://quipu.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Quipu credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/quipu/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Quipu API client ID and client secret** (Quipu → Settings → API) and your **account slug** (the part after getquipu.com/ in your Quipu URL). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `quipu_list_contacts` | read | List contacts |
| `quipu_get_contact` | read | Get contact |
| `quipu_list_invoices` | read | List invoices |
| `quipu_get_invoice` | read | Get invoice |
| `quipu_list_book_entries` | read | List book entries |
| `quipu_list_numbering_series` | read | List numbering series |
| `quipu_list_accounting_categories` | read | List accounting categories |
| `quipu_list_accounting_subcategories` | read | List accounting subcategories |
| `quipu_create_contact` | **write** | Create contact |
| `quipu_update_contact` | **write** | Update contact |
| `quipu_create_draft_invoice` | **write** | Create draft invoice |
| `quipu_usage_status` | meta | Usage status (free-tier meter) |
| `quipu_request_feature` | meta | Request a missing feature |
| `quipu_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `quipu_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `quipu_upgrade` (it returns a Stripe Checkout link). Cancel any time with `quipu_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `quipu_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
