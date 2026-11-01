# WeFile MCP by usefulapi

Use your [WeFile](https://wefile.co.uk) account from Claude, Cursor, or any MCP client. It lists companies and filings, creates and saves CT600 drafts, generates documents, and submits filings to HMRC and Companies House. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://wefile.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://wefile.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http wefile https://wefile.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=wefile&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwefile.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "wefile": {
      "url": "https://wefile.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your WeFile credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/wefile/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **WeFile API key** (in the WeFile developer dashboard under API Access; it needs the Developer Package). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `wefile_list_companies` | read | List companies |
| `wefile_get_company_periods` | read | Get accounting periods |
| `wefile_add_company` | **write** | Add company |
| `wefile_list_filings` | read | List filings |
| `wefile_get_filing_status` | read | Get filing status |
| `wefile_list_submissions` | read | List submissions |
| `wefile_list_documents` | read | List documents |
| `wefile_generate_document` | read | Generate document |
| `wefile_create_filing` | **write** | Create filing |
| `wefile_save_filing` | **write** | Save filing |
| `wefile_delete_filing_credentials` | **write** | Delete stored credentials |
| `wefile_submit_filing` | **write** | Submit filing |
| `wefile_usage_status` | meta | Usage status (free-tier meter) |
| `wefile_request_feature` | meta | Request a missing feature |
| `wefile_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `wefile_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `wefile_upgrade` (it returns a Stripe Checkout link). Cancel any time with `wefile_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `wefile_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
