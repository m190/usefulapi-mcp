# Bill4Time MCP by usefulapi

Use [Bill4Time](https://www.bill4time.com) from Claude, Cursor, or any MCP client — read clients, projects, time entries, expenses, invoices, payments, users and contacts with typed filters and sorting. Read-only; confidential fields such as addresses, tax ids and pay rates are never returned. Needs a Bill4Time v1 API key.
Hosted, no local install: connect with your own Bill4Time credentials.

**Live endpoint:** `https://bill4time.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/bill4time

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bill4time.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bill4time https://bill4time.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bill4time&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbill4time.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bill4time": {
      "url": "https://bill4time.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Bill4Time credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bill4time/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bill4time_list_clients` | read | List clients |
| `bill4time_list_projects` | read | List projects (matters) |
| `bill4time_list_time_entries` | read | List time entries |
| `bill4time_list_expenses` | read | List expenses |
| `bill4time_list_invoices` | read | List invoices |
| `bill4time_list_payments` | read | List payments |
| `bill4time_list_users` | read | List users (timekeepers) |
| `bill4time_list_contacts` | read | List contacts |
| `bill4time_usage_status` | meta | Usage status (free-tier meter) |
| `bill4time_request_feature` | meta | Request a missing feature |
| `bill4time_upgrade` | meta | Upgrade to Pro or Pro+ |
| `bill4time_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API key) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per API key) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `bill4time_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `bill4time_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `bill4time_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Bill4Time.
