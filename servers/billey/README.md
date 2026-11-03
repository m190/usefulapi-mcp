# billey MCP by usefulapi

Use your [billey](https://billey.nl) account from Claude, Cursor, or any MCP client. Read the clients, invoices, quotes, expenses, bank transactions and time entries of your book. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://billey.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://billey.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http billey https://billey.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=billey&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbilley.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "billey": {
      "url": "https://billey.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your billey credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/billey/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **billey personal access token** (your book's Settings → API tokens; two-factor authentication must be on). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `billey_list_clients` | read | List clients |
| `billey_get_client` | read | Get a client |
| `billey_list_invoices` | read | List invoices |
| `billey_get_invoice` | read | Get an invoice |
| `billey_list_quotes` | read | List quotes |
| `billey_list_expenses` | read | List expenses |
| `billey_list_vendors` | read | List vendors |
| `billey_list_bank_transactions` | read | List bank transactions |
| `billey_list_products` | read | List products |
| `billey_list_projects` | read | List projects |
| `billey_list_time_entries` | read | List time entries |
| `billey_usage_status` | meta | Usage status (free-tier meter) |
| `billey_request_feature` | meta | Request a missing feature |
| `billey_upgrade` | meta | Upgrade to Pro or Pro+ |
| `billey_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `billey_upgrade` (it returns a Stripe Checkout link). Cancel any time with `billey_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `billey_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
