# Arthur Online MCP by usefulapi

Hosted MCP endpoint: https://arthur-online.usefulapi.io/mcp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://arthur-online.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http arthur-online https://arthur-online.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=arthur-online&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Farthur-online.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "arthur-online": {
      "url": "https://arthur-online.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your Arthur Online account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/arthur-online/

<!-- connect:end (generated above, edit below) -->

Connect your Arthur account through OAuth and enter its Entity ID from Settings → Your Account → OAuth Applications.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `arthur_list_properties` | read | List properties |
| `arthur_get_property` | read | Get property |
| `arthur_list_units` | read | List units |
| `arthur_get_unit` | read | Get unit |
| `arthur_list_tenancies` | read | List tenancies |
| `arthur_get_tenancy` | read | Get tenancy |
| `arthur_list_tenants` | read | List tenants |
| `arthur_get_tenant` | read | Get tenant |
| `arthur_list_tasks` | read | List tasks |
| `arthur_get_task` | read | Get task |
| `arthur_list_workorders` | read | List workorders |
| `arthur_get_workorder` | read | Get workorder |
| `arthur_list_transactions` | read | List transactions |
| `arthur_get_transaction` | read | Get transaction |
| `arthur_list_invoices` | read | List invoices |
| `arthur_get_invoice` | read | Get invoice |
| `arthur_list_certificates` | read | List certificates |
| `arthur_get_certificate` | read | Get certificate |
| `arthur_create_unit_task` | **write** | Create maintenance task on a unit |
| `arthur_add_task_note` | **write** | Add note to maintenance task |
| `arthur_usage_status` | meta | Usage status (free-tier meter) |
| `arthur_request_feature` | meta | Request a missing feature |
| `arthur_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `arthur_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per property-management account) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |

Pro covers this server only. Subscribe with `arthur_upgrade` (it returns a Stripe Checkout link). Cancel any time with `arthur_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `arthur_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
