# FieldAware MCP by usefulapi

Use your [FieldAware](https://www.fieldaware.com) account from Claude, Cursor, or any MCP client. Read jobs, customers, contacts and invoices, create customers, and create or update jobs. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://fieldaware.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://fieldaware.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http fieldaware https://fieldaware.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=fieldaware&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffieldaware.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "fieldaware": {
      "url": "https://fieldaware.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your FieldAware credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/fieldaware/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **FieldAware API key** for your user account (ask your FieldAware administrator or FieldAware support). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fieldaware_whoami` | read | Who am I |
| `fieldaware_get_business` | read | Get business profile |
| `fieldaware_list_jobs` | read | List jobs |
| `fieldaware_get_job` | read | Get job |
| `fieldaware_list_customers` | read | List customers |
| `fieldaware_get_customer` | read | Get customer |
| `fieldaware_list_contacts` | read | List contacts |
| `fieldaware_list_locations` | read | List locations |
| `fieldaware_list_invoices` | read | List invoices |
| `fieldaware_list_items` | read | List items |
| `fieldaware_list_tasks` | read | List task templates |
| `fieldaware_list_assets` | read | List assets |
| `fieldaware_list_users` | read | List users |
| `fieldaware_create_customer` | **write** | Create customer |
| `fieldaware_create_job` | **write** | Create job |
| `fieldaware_update_job` | **write** | Update job |
| `fieldaware_usage_status` | meta | Usage status (free-tier meter) |
| `fieldaware_request_feature` | meta | Request a missing feature |
| `fieldaware_upgrade` | meta | Upgrade to Pro or Pro+ |
| `fieldaware_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `fieldaware_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `fieldaware_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `fieldaware_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
