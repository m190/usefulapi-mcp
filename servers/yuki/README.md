# Yuki MCP by usefulapi

**Live endpoint:** `https://yuki.usefulapi.io/mcp`

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://yuki.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http yuki https://yuki.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=yuki&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fyuki.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "yuki": {
      "url": "https://yuki.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Yuki credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/yuki/

<!-- connect:end (generated above, edit below) -->

On first connect you will paste your **Yuki web service access key**. It is validated, stored per-user, and scoped to you. No keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `yuki_list_domains` | read | List domains |
| `yuki_list_administrations` | read | List administrations |
| `yuki_list_outstanding_debtor_items` | read | List open sales invoices (debtors) |
| `yuki_list_outstanding_creditor_items` | read | List open purchase invoices (creditors) |
| `yuki_get_gl_account_balance` | read | Get general ledger balances |
| `yuki_list_gl_account_transactions` | read | List general ledger transactions |
| `yuki_get_net_revenue` | read | Get net revenue |
| `yuki_get_gl_account_scheme` | read | Get chart of accounts |
| `yuki_list_projects` | read | List projects |
| `yuki_search_contacts` | read | Search contacts |
| `yuki_list_document_folders` | read | List archive folders |
| `yuki_list_document_folder_tabs` | read | List archive folder tabs |
| `yuki_list_documents` | read | List archive documents |
| `yuki_search_documents` | read | Search archive documents |
| `yuki_get_document` | read | Get document |
| `yuki_get_document_download_url` | read | Get document download link |
| `yuki_usage_status` | meta | Usage status (free-tier meter) |
| `yuki_request_feature` | meta | Request a missing feature |
| `yuki_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `yuki_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `yuki_upgrade` (it returns a Stripe Checkout link). Cancel any time with `yuki_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `yuki_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
