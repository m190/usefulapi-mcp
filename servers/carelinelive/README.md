# CareLineLive MCP by usefulapi

Use your [CareLineLive](https://carelinelive.app) account from Claude, Cursor, or any MCP client. Read carers, clients, users, teams, visit rounds, leave, incidents, public holidays and work patterns, and update a carer's payroll and cost centre codes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://carelinelive.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://carelinelive.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http carelinelive https://carelinelive.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=carelinelive&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcarelinelive.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "carelinelive": {
      "url": "https://carelinelive.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your CareLineLive credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/carelinelive/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Environment address** (the part before .carelinelive.app in your web address) and a **Personal access token** (Accounts → API tokens; the API must be enabled for your environment). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `carelinelive_list_carers` | read | List carers |
| `carelinelive_get_carer` | read | Get carer |
| `carelinelive_list_clients` | read | List clients |
| `carelinelive_get_client` | read | Get client |
| `carelinelive_list_users` | read | List users |
| `carelinelive_get_user` | read | Get user |
| `carelinelive_list_teams` | read | List teams |
| `carelinelive_list_visit_rounds` | read | List visit rounds |
| `carelinelive_list_leaves` | read | List leave |
| `carelinelive_list_incidents` | read | List incidents |
| `carelinelive_list_public_holidays` | read | List public holidays |
| `carelinelive_list_work_patterns` | read | List work patterns |
| `carelinelive_list_permissions` | read | List permissions |
| `carelinelive_update_carer` | **write** | Update carer payroll details |
| `carelinelive_usage_status` | meta | Usage status (free-tier meter) |
| `carelinelive_request_feature` | meta | Request a missing feature |
| `carelinelive_upgrade` | meta | Upgrade to Pro or Pro+ |
| `carelinelive_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `carelinelive_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `carelinelive_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `carelinelive_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
