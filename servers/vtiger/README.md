# Vtiger MCP by usefulapi

**Live endpoint:** `https://vtiger.usefulapi.io/mcp`

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://vtiger.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http vtiger https://vtiger.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=vtiger&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fvtiger.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "vtiger": {
      "url": "https://vtiger.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Vtiger credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/vtiger/

<!-- connect:end (generated above, edit below) -->

On first connect you will enter your **Vtiger CRM address**, your **username** and your **Access Key**. They are validated, stored per-user, and scoped to you. No keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `vtiger_get_me` | read | Get the connected user |
| `vtiger_list_modules` | read | List modules |
| `vtiger_describe_module` | read | Describe a module |
| `vtiger_list_records` | read | List or search records |
| `vtiger_count_records` | read | Count records |
| `vtiger_query` | read | Run a SELECT query |
| `vtiger_get_record` | read | Get a record |
| `vtiger_lookup` | read | Find records by email or phone |
| `vtiger_list_related_modules` | read | List related modules |
| `vtiger_get_tags` | read | Get a record's tags |
| `vtiger_create_record` | **write** | Create a record |
| `vtiger_update_record` | **write** | Update fields of a record |
| `vtiger_add_tags` | **write** | Add tags to a record |
| `vtiger_usage_status` | meta | Usage status (free-tier meter) |
| `vtiger_request_feature` | meta | Request a missing feature |
| `vtiger_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `vtiger_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `vtiger_upgrade` (it returns a Stripe Checkout link). Cancel any time with `vtiger_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `vtiger_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
