# Method CRM MCP by usefulapi

Query Method CRM customers, leads, activities and invoices; create and update records.

**Live endpoint:** `https://method-crm.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/method-crm

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://method-crm.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http method-crm https://method-crm.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=method-crm&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmethod-crm.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "method-crm": {
      "url": "https://method-crm.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Method CRM credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/method-crm/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste a Method **API key** (blue circle icon → Integrations → API → New; it is shown only once).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `method_get_account` | read | Get API key owner |
| `method_list_tables` | read | List tables |
| `method_get_table_fields` | read | Get table fields |
| `method_query_records` | read | Query records |
| `method_count_records` | read | Count records |
| `method_get_record` | read | Get record |
| `method_search_customers` | read | Search customers and leads |
| `method_list_contacts` | read | List contacts |
| `method_list_activities` | read | List activities |
| `method_list_invoices` | read | List invoices |
| `method_list_files` | read | List files on a record |
| `method_get_file_url` | read | Get file download link |
| `method_create_customer` | **write** | Create customer or lead |
| `method_create_activity` | **write** | Log an activity |
| `method_create_record` | **write** | Create a record |
| `method_update_record` | **write** | Update a record |
| `method_usage_status` | meta | Usage status (free-tier meter) |
| `method_request_feature` | meta | Request a missing feature |
| `method_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `method_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `method_upgrade` (it returns a Stripe Checkout link). Cancel any time with `method_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `method_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Method CRM.
