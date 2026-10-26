# SafetyChain MCP by usefulapi

**Live endpoint:** `https://safetychain.usefulapi.io/mcp`

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://safetychain.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http safetychain https://safetychain.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=safetychain&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsafetychain.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "safetychain": {
      "url": "https://safetychain.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SafetyChain credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/safetychain/

<!-- connect:end (generated above, edit below) -->

On first connect you will enter your SafetyChain **tenant** (the part before `.safetychain.com`), the **username and password** of a SafetyChain integration user, and the environment (Production or Train). They are validated, stored per-user, and scoped to you. No keys in config files. This server is read-only.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `safetychain_list_customers` | read | List customers |
| `safetychain_get_customer` | read | Get customer |
| `safetychain_list_locations` | read | List locations |
| `safetychain_get_location` | read | Get location |
| `safetychain_list_suppliers` | read | List suppliers |
| `safetychain_get_supplier` | read | Get supplier |
| `safetychain_list_items` | read | List items |
| `safetychain_get_item` | read | Get item |
| `safetychain_list_equipment` | read | List equipment |
| `safetychain_get_equipment` | read | Get equipment |
| `safetychain_list_resources` | read | List resources |
| `safetychain_get_resource` | read | Get resource |
| `safetychain_list_forms` | read | List forms |
| `safetychain_get_form` | read | Get form |
| `safetychain_list_categories` | read | List categories |
| `safetychain_get_category` | read | Get category |
| `safetychain_search_capas` | read | Search CAPAs |
| `safetychain_get_capa` | read | Get CAPA |
| `safetychain_get_capa_tasks` | read | Get CAPA tasks |
| `safetychain_get_capa_attachments` | read | Get CAPA attachments |
| `safetychain_get_capa_history` | read | Get CAPA history |
| `safetychain_get_capa_linked_records` | read | Get CAPA linked records |
| `safetychain_get_capa_linked_capas` | read | Get CAPA linked capas |
| `safetychain_get_capa_activity` | read | Get CAPA activity |
| `safetychain_get_record` | read | Get record |
| `safetychain_record_exists` | read | Check a record exists |
| `safetychain_search_records` | read | Search records |
| `safetychain_get_record_fields` | read | Get record field values |
| `safetychain_get_record_summary` | read | Summarize records |
| `safetychain_usage_status` | meta | Usage status (free-tier meter) |
| `safetychain_request_feature` | meta | Request a missing feature |
| `safetychain_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `safetychain_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `safetychain_upgrade` (it returns a Stripe Checkout link). Cancel any time with `safetychain_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `safetychain_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
