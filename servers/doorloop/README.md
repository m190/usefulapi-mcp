# DoorLoop MCP by usefulapi

Use your [DoorLoop](https://www.doorloop.com) account from Claude, Cursor, or any MCP client. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://doorloop.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://doorloop.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http doorloop https://doorloop.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=doorloop&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdoorloop.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "doorloop": {
      "url": "https://doorloop.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your DoorLoop credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/doorloop/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **DoorLoop API key** (DoorLoop → Settings → Zapier & API Keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `doorloop_get_current_user` | read | Get current user |
| `doorloop_list_properties` | read | List properties |
| `doorloop_get_property` | read | Get a property |
| `doorloop_list_units` | read | List units |
| `doorloop_get_unit` | read | Get a unit |
| `doorloop_list_leases` | read | List leases |
| `doorloop_get_lease` | read | Get a lease |
| `doorloop_list_lease_tenants` | read | List lease tenants |
| `doorloop_list_tenants` | read | List tenants |
| `doorloop_get_tenant` | read | Get a tenant |
| `doorloop_list_lease_payments` | read | List lease payments |
| `doorloop_list_lease_charges` | read | List lease charges |
| `doorloop_list_tasks` | read | List tasks |
| `doorloop_get_task` | read | Get a task |
| `doorloop_list_owners` | read | List owners |
| `doorloop_list_vendors` | read | List vendors |
| `doorloop_list_portfolios` | read | List portfolios |
| `doorloop_list_users` | read | List users |
| `doorloop_list_accounts` | read | List accounts |
| `doorloop_create_task` | **write** | Create a task |
| `doorloop_post_task_update` | **write** | Post an update on a task |
| `doorloop_usage_status` | meta | Usage status (free-tier meter) |
| `doorloop_request_feature` | meta | Request a missing feature |
| `doorloop_upgrade` | meta | Upgrade to Pro or Pro+ |
| `doorloop_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `doorloop_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `doorloop_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `doorloop_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
