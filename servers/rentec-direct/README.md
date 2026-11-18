# Rentec Direct MCP by usefulapi

Use your [Rentec Direct](https://www.rentecdirect.com) account from Claude, Cursor, or any MCP client. Read properties, tenants, leases, owners, vendors and transactions, and create maintenance work orders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://rentec-direct.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://rentec-direct.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http rentec-direct https://rentec-direct.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=rentec-direct&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frentec-direct.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "rentec-direct": {
      "url": "https://rentec-direct.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Rentec Direct credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/rentec-direct/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Rentec Direct API key**, created in Settings → Utilities → API Keys with only the permissions you need. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `rentecdirect_ping` | read | Check connection |
| `rentecdirect_list_properties` | read | List properties |
| `rentecdirect_get_property` | read | Get a property |
| `rentecdirect_list_tenants` | read | List tenants |
| `rentecdirect_get_tenant` | read | Get a tenant |
| `rentecdirect_list_leases` | read | List leases |
| `rentecdirect_get_lease` | read | Get a lease |
| `rentecdirect_list_work_orders` | read | List work orders |
| `rentecdirect_get_work_order` | read | Get a work order |
| `rentecdirect_list_transactions` | read | List transactions |
| `rentecdirect_list_owners` | read | List owners |
| `rentecdirect_get_owner` | read | Get an owner |
| `rentecdirect_list_vendors` | read | List vendors |
| `rentecdirect_get_vendor` | read | Get a vendor |
| `rentecdirect_create_work_order` | **write** | Create a work order |
| `rentecdirect_usage_status` | meta | Usage status (free-tier meter) |
| `rentecdirect_request_feature` | meta | Request a missing feature |
| `rentecdirect_upgrade` | meta | Upgrade to Pro or Pro+ |
| `rentecdirect_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `rentecdirect_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `rentecdirect_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `rentecdirect_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
