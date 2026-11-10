# GoAudits MCP by usefulapi

Use your [GoAudits](https://goaudits.com) account from Claude, Cursor, or any MCP client. It reads audit summaries and details, checklists, locations, users and action plans. It cannot change data. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://goaudits.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://goaudits.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http goaudits https://goaudits.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=goaudits&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgoaudits.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "goaudits": {
      "url": "https://goaudits.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your GoAudits credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/goaudits/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **GoAudits username** (the email you sign in with) and your **GoAudits password**. The GoAudits REST API needs an Enterprise plan. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `goaudits_list_checklists` | read | List checklists |
| `goaudits_list_companies` | read | List companies |
| `goaudits_list_locations` | read | List locations |
| `goaudits_list_users` | read | List users |
| `goaudits_list_audit_summaries` | read | List audit summaries |
| `goaudits_get_audit` | read | Get audit details |
| `goaudits_list_action_plans` | read | List action plans |
| `goaudits_get_action_plan` | read | Get action plan for an audit |
| `goaudits_usage_status` | meta | Usage status (free-tier meter) |
| `goaudits_request_feature` | meta | Request a missing feature |
| `goaudits_upgrade` | meta | Upgrade to Pro or Pro+ |
| `goaudits_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `goaudits_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `goaudits_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `goaudits_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
