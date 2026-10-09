# Buildium MCP by usefulapi

Use [Buildium](https://www.buildium.com) from Claude, Cursor, or any MCP client — read rental properties, units, owners, leases, tenants, balances, vendors and bills, and create or update work orders and tasks.
Hosted, no local install: connect with your own Buildium credentials.

**Live endpoint:** `https://buildium.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/buildium

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://buildium.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http buildium https://buildium.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=buildium&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbuildium.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "buildium": {
      "url": "https://buildium.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Buildium credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/buildium/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Buildium client ID and client secret** (Settings → Developer Tools; Premium plan).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `buildium_list_rental_properties` | read | List rental properties |
| `buildium_get_rental_property` | read | Get a rental property |
| `buildium_list_rental_units` | read | List rental units |
| `buildium_get_rental_unit` | read | Get a rental unit |
| `buildium_list_rental_owners` | read | List rental owners |
| `buildium_list_leases` | read | List leases |
| `buildium_get_lease` | read | Get a lease |
| `buildium_list_outstanding_balances` | read | List lease outstanding balances |
| `buildium_list_lease_transactions` | read | List lease transactions |
| `buildium_list_tenants` | read | List tenants |
| `buildium_get_tenant` | read | Get a tenant |
| `buildium_list_applicants` | read | List applicants |
| `buildium_list_work_orders` | read | List work orders |
| `buildium_get_work_order` | read | Get a work order |
| `buildium_list_tasks` | read | List tasks |
| `buildium_list_vendors` | read | List vendors |
| `buildium_list_bills` | read | List bills |
| `buildium_list_gl_accounts` | read | List general ledger accounts |
| `buildium_list_associations` | read | List associations |
| `buildium_create_work_order` | **write** | Create a work order |
| `buildium_update_work_order` | **write** | Update a work order |
| `buildium_create_todo_task` | **write** | Create a to-do task |
| `buildium_update_todo_task` | **write** | Update a to-do task |
| `buildium_usage_status` | meta | Usage status (free-tier meter) |
| `buildium_upgrade` | meta | Upgrade to Pro (unlimited) |
| `buildium_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `buildium_upgrade` (it returns a Stripe Checkout link). Cancel any time with `buildium_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `buildium_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Buildium.
