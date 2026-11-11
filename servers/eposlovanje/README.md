# ePoslovanje MCP by usefulapi

Use your [ePoslovanje](https://eposlovanje.hr) account from Claude, Cursor, or any MCP client. Validate and send e-invoices, read their status, and check AMS registration. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://eposlovanje.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://eposlovanje.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http eposlovanje https://eposlovanje.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=eposlovanje&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Feposlovanje.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "eposlovanje": {
      "url": "https://eposlovanje.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ePoslovanje credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/eposlovanje/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **ePoslovanje API key**, from your ePoslovanje account. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `eposlovanje_ping` | read | Check service and key |
| `eposlovanje_get_account_balance` | read | Get account balance |
| `eposlovanje_get_f2_settings` | read | Get F2 fiscalization settings |
| `eposlovanje_list_business_units` | read | List business units |
| `eposlovanje_list_incoming_documents` | read | List incoming documents |
| `eposlovanje_list_outgoing_documents` | read | List outgoing documents |
| `eposlovanje_get_document` | read | Get a document |
| `eposlovanje_get_document_status` | read | Get document status |
| `eposlovanje_lookup_document_status` | read | Look up document status by number |
| `eposlovanje_validate_document` | read | Validate a document |
| `eposlovanje_list_ereporting_requests` | read | List e-reporting requests |
| `eposlovanje_check_ams` | read | Check AMS registration |
| `eposlovanje_send_document` | **write** | Send an e-invoice |
| `eposlovanje_change_document_status` | **write** | Change document status (buyer) |
| `eposlovanje_usage_status` | meta | Usage status (free-tier meter) |
| `eposlovanje_request_feature` | meta | Request a missing feature |
| `eposlovanje_upgrade` | meta | Upgrade to Pro or Pro+ |
| `eposlovanje_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `eposlovanje_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `eposlovanje_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `eposlovanje_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
