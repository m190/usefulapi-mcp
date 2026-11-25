# Finch MCP by usefulapi

Use your [Finch](https://www.tryfinch.com) account from Claude, Cursor, or any MCP client. It reads the employer's directory, employment, payroll, pay statements, deductions and documents, and cannot change data. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://finch.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://finch.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http finch https://finch.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=finch&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffinch.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "finch": {
      "url": "https://finch.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you enter your own Finch app's client ID and secret, then sign in with your Finch account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/finch/

<!-- connect:end (generated above, edit below) -->

On first connect you enter your own Finch app's client ID and secret, then sign in to Finch and approve access. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `finch_introspect` | read | Show the connection |
| `finch_get_company` | read | Get company |
| `finch_list_providers` | read | List providers |
| `finch_list_directory` | read | List directory |
| `finch_get_individuals` | read | Get individuals |
| `finch_get_employment` | read | Get employment |
| `finch_list_payments` | read | List payments |
| `finch_get_pay_statements` | read | Get pay statements |
| `finch_list_pay_statement_items` | read | List pay statement items |
| `finch_list_pay_groups` | read | List pay groups |
| `finch_get_pay_group` | read | Get pay group |
| `finch_list_deductions` | read | List deductions |
| `finch_get_deduction` | read | Get deduction |
| `finch_list_enrolled_individuals` | read | List enrolled individuals |
| `finch_list_documents` | read | List documents |
| `finch_get_document` | read | Get document |
| `finch_usage_status` | meta | Usage status (free-tier meter) |
| `finch_request_feature` | meta | Request a missing feature |
| `finch_upgrade` | meta | Upgrade to Pro or Pro+ |
| `finch_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `finch_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `finch_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `finch_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
