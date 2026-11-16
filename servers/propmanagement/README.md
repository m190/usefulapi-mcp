# PropManagement MCP by usefulapi

Use your [PropManagement](https://www.propmanagement.app) account from Claude, Cursor, or any MCP client. Read properties, tenants, rent payments, maintenance requests, vendors, work orders and listings, and create or update properties and tenants. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://propmanagement.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://propmanagement.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http propmanagement https://propmanagement.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=propmanagement&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpropmanagement.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "propmanagement": {
      "url": "https://propmanagement.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your PropManagement credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/propmanagement/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **PropManagement API key** (Organization → API; it starts with pm_live_ and is shown only once). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `propmanagement_list_properties` | read | List properties |
| `propmanagement_get_property` | read | Get a property |
| `propmanagement_list_tenants` | read | List tenants |
| `propmanagement_get_tenant` | read | Get a tenant |
| `propmanagement_list_payments` | read | List rent payments |
| `propmanagement_get_payment` | read | Get a rent payment |
| `propmanagement_list_maintenance_requests` | read | List maintenance requests |
| `propmanagement_get_maintenance_request` | read | Get a maintenance request |
| `propmanagement_list_maintenance_tasks` | read | List scheduled maintenance tasks |
| `propmanagement_list_vendors` | read | List vendors |
| `propmanagement_get_vendor` | read | Get a vendor |
| `propmanagement_list_work_orders` | read | List work orders |
| `propmanagement_list_documents` | read | List tenant documents |
| `propmanagement_list_listings` | read | List rental listings |
| `propmanagement_get_listing` | read | Get a rental listing |
| `propmanagement_list_notifications` | read | List notifications |
| `propmanagement_create_property` | **write** | Create a property |
| `propmanagement_update_property` | **write** | Update a property |
| `propmanagement_create_tenant` | **write** | Create a tenant |
| `propmanagement_update_tenant` | **write** | Update a tenant |
| `propmanagement_usage_status` | meta | Usage status (free-tier meter) |
| `propmanagement_request_feature` | meta | Request a missing feature |
| `propmanagement_upgrade` | meta | Upgrade to Pro or Pro+ |
| `propmanagement_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `propmanagement_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `propmanagement_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `propmanagement_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
