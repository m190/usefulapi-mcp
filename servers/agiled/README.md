# Agiled MCP by usefulapi

Use your [Agiled](https://agiled.ai) account from Claude, Cursor, or any MCP client. It reads CRM contacts, accounts, deals, invoices, projects and tasks, and it creates contacts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://agiled.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://agiled.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http agiled https://agiled.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=agiled&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fagiled.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "agiled": {
      "url": "https://agiled.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Agiled credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/agiled/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Agiled API base URL** (Settings → API in Agiled) and an **Agiled API token** (Settings → Apps → API; Full access or Read only). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `agiled_check_connection` | read | Check the connection |
| `agiled_list_contacts` | read | List contacts |
| `agiled_get_contact` | read | Get a contact |
| `agiled_list_accounts` | read | List accounts |
| `agiled_get_account` | read | Get an account |
| `agiled_list_deals` | read | List deals |
| `agiled_get_deal` | read | Get a deal |
| `agiled_list_invoices` | read | List invoices |
| `agiled_get_invoice` | read | Get an invoice |
| `agiled_list_estimates` | read | List estimates |
| `agiled_list_payments` | read | List payments |
| `agiled_list_expenses` | read | List expenses |
| `agiled_list_projects` | read | List projects |
| `agiled_get_project` | read | Get a project |
| `agiled_list_tasks` | read | List tasks |
| `agiled_get_task` | read | Get a task |
| `agiled_list_time_entries` | read | List time entries |
| `agiled_list_files` | read | List files |
| `agiled_list_users` | read | List users |
| `agiled_list_webhook_subscriptions` | read | List webhook subscriptions |
| `agiled_create_contact` | **write** | Create a contact |
| `agiled_usage_status` | meta | Usage status (free-tier meter) |
| `agiled_request_feature` | meta | Request a missing feature |
| `agiled_upgrade` | meta | Upgrade to Pro or Pro+ |
| `agiled_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `agiled_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `agiled_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `agiled_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
