# Delfi PMS MCP by usefulapi

Use your [Delfi PMS](https://www.delfipms.com) account from Claude, Cursor, or any MCP client. Read properties, units, leases, payments, invoices, expenses, owners, tenants and maintenance requests. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://delfi-pms.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://delfi-pms.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http delfi-pms https://delfi-pms.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=delfi-pms&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdelfi-pms.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "delfi-pms": {
      "url": "https://delfi-pms.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Delfi PMS credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/delfi-pms/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Delfi workspace domain** (for example yourcompany.delfipms.com) and a **Delfi API token** (created under Settings → API Tokens in your workspace). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `delfipms_list_properties` | read | List properties |
| `delfipms_list_units` | read | List units of a property |
| `delfipms_list_leases` | read | List leases |
| `delfipms_get_lease` | read | Get a lease |
| `delfipms_list_payments` | read | List payments |
| `delfipms_get_payment` | read | Get a payment |
| `delfipms_list_invoices` | read | List invoices |
| `delfipms_list_owners` | read | List owners |
| `delfipms_get_owner` | read | Get an owner |
| `delfipms_list_tenants` | read | List tenants |
| `delfipms_get_tenant` | read | Get a tenant |
| `delfipms_list_property_expenses` | read | List expenses of a property |
| `delfipms_list_unit_expenses` | read | List expenses of a unit |
| `delfipms_list_maintenance` | read | List maintenance requests |
| `delfipms_get_maintenance` | read | Get a maintenance request |
| `delfipms_list_suppliers` | read | List suppliers |
| `delfipms_get_supplier` | read | Get a supplier |
| `delfipms_usage_status` | meta | Usage status (free-tier meter) |
| `delfipms_request_feature` | meta | Request a missing feature |
| `delfipms_upgrade` | meta | Upgrade to Pro or Pro+ |
| `delfipms_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `delfipms_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `delfipms_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `delfipms_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
