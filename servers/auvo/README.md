# Auvo MCP by usefulapi

Use your Auvo account from Claude, Cursor, or any MCP client. Read tasks, customers, teams, invoices and receivables, and create tasks and customers. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://auvo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://auvo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http auvo https://auvo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=auvo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fauvo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "auvo": {
      "url": "https://auvo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Auvo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/auvo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **Auvo apiKey** and **apiToken** (Menu > Integration in Auvo). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `auvo_list_users` | read | List users |
| `auvo_get_user` | read | Get user |
| `auvo_list_customers` | read | List customers |
| `auvo_get_customer` | read | Get customer |
| `auvo_list_customer_groups` | read | List customer groups |
| `auvo_list_tasks` | read | List tasks |
| `auvo_get_task` | read | Get task |
| `auvo_list_task_types` | read | List task types |
| `auvo_list_products` | read | List products |
| `auvo_list_services` | read | List services |
| `auvo_list_equipments` | read | List equipments |
| `auvo_list_teams` | read | List teams |
| `auvo_list_tickets` | read | List tickets |
| `auvo_get_ticket` | read | Get ticket |
| `auvo_list_invoices` | read | List invoices |
| `auvo_list_receivables` | read | List receivables |
| `auvo_list_expenses` | read | List expenses |
| `auvo_create_customer` | **write** | Create customer |
| `auvo_create_task` | **write** | Create task |
| `auvo_usage_status` | meta | Usage status (free-tier meter) |
| `auvo_request_feature` | meta | Request a missing feature |
| `auvo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `auvo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `auvo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `auvo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `auvo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
