# Tenant Inc MCP by usefulapi

Use your [Tenant Inc](https://www.tenantinc.com) account from Claude, Cursor, or any MCP client. Read properties, units, leases, ledgers, move-outs, tenants and management reports (read-only). Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://tenant-inc.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://tenant-inc.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http tenant-inc https://tenant-inc.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=tenant-inc&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftenant-inc.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "tenant-inc": {
      "url": "https://tenant-inc.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Tenant Inc credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/tenant-inc/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Region** (USA or Australia), **Company ID**, **Application ID** and **Tenant Inc API key** (the Application ID and key come from the Nectar developer portal, nectar.tenantinc.com). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `tenantinc_list_properties` | read | List properties |
| `tenantinc_get_property` | read | Get a property |
| `tenantinc_list_units` | read | List units in a property |
| `tenantinc_list_available_units` | read | List available units |
| `tenantinc_get_unit` | read | Get a unit |
| `tenantinc_list_leases` | read | List leases |
| `tenantinc_get_lease` | read | Get a lease |
| `tenantinc_get_lease_ledger` | read | Get a lease ledger |
| `tenantinc_list_move_outs` | read | List move-outs |
| `tenantinc_list_tenants` | read | List tenants |
| `tenantinc_get_contact` | read | Get a contact |
| `tenantinc_list_reservations` | read | List active reservations |
| `tenantinc_list_promotions` | read | List promotions |
| `tenantinc_get_management_summary` | read | Get the management summary |
| `tenantinc_get_property_management_summary` | read | Get a property's management summary |
| `tenantinc_get_daily_deposits` | read | Get daily deposits |
| `tenantinc_get_rental_activity` | read | Get rental activity |
| `tenantinc_get_occupancy_report` | read | Get the occupancy report |
| `tenantinc_usage_status` | meta | Usage status (free-tier meter) |
| `tenantinc_request_feature` | meta | Request a missing feature |
| `tenantinc_upgrade` | meta | Upgrade to Pro or Pro+ |
| `tenantinc_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `tenantinc_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `tenantinc_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `tenantinc_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
