# Silverfin MCP by usefulapi

Use your [Silverfin](https://www.silverfin.com) account from Claude, Cursor, or any MCP client. Read companies, periods, trial balances, workflows and reconciliations; it never changes data. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://silverfin.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://silverfin.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http silverfin https://silverfin.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=silverfin&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsilverfin.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "silverfin": {
      "url": "https://silverfin.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you enter your own Silverfin app's client ID and secret, then sign in with your Silverfin account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/silverfin/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Silverfin firm ID**, **client ID** and **client secret** from your own Silverfin API application. Then you sign in to Silverfin and approve access. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `silverfin_get_firm` | read | Get the firm |
| `silverfin_list_companies` | read | List companies |
| `silverfin_get_company` | read | Get a company |
| `silverfin_list_periods` | read | List periods |
| `silverfin_list_accounts` | read | List accounts |
| `silverfin_get_account` | read | Get an account |
| `silverfin_list_workflows` | read | List workflows |
| `silverfin_list_workflow_reconciliations` | read | List workflow reconciliations |
| `silverfin_get_reconciliation` | read | Get a reconciliation |
| `silverfin_get_reconciliation_results` | read | Get reconciliation results |
| `silverfin_usage_status` | meta | Usage status (free-tier meter) |
| `silverfin_request_feature` | meta | Request a missing feature |
| `silverfin_upgrade` | meta | Upgrade to Pro or Pro+ |
| `silverfin_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `silverfin_upgrade` (it returns a Stripe Checkout link). Cancel any time with `silverfin_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `silverfin_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
