# amego MCP by usefulapi

Use your [amego](https://invoice.amego.tw/) account from Claude, Cursor, or any MCP client. Read invoices, allowances, number ranges and prize results, with no way to issue or void them. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://amego.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://amego.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http amego https://amego.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=amego&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Famego.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "amego": {
      "url": "https://amego.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your amego credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/amego/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **company tax ID** (8 digits) and the **amego App Key** that amego customer service issued for that company. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `amego_query_invoice` | read | Query invoice |
| `amego_list_invoices` | read | List invoices |
| `amego_get_invoice_upload_status` | read | Get invoice upload status |
| `amego_get_invoice_file` | read | Get invoice PDF link |
| `amego_check_lottery_invoices` | read | Check lottery invoices |
| `amego_get_track_status` | read | Get number range status |
| `amego_list_track_ranges` | read | List number ranges |
| `amego_query_allowance` | read | Query allowance |
| `amego_list_allowances` | read | List allowances |
| `amego_get_allowance_upload_status` | read | Get allowance upload status |
| `amego_get_allowance_file` | read | Get allowance PDF link |
| `amego_lookup_company_name` | read | Look up company name |
| `amego_check_mobile_barcode` | read | Check mobile barcode |
| `amego_usage_status` | meta | Usage status (free-tier meter) |
| `amego_request_feature` | meta | Request a missing feature |
| `amego_upgrade` | meta | Upgrade to Pro or Pro+ |
| `amego_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `amego_upgrade` (it returns a Stripe Checkout link). Cancel any time with `amego_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `amego_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
