# Cogmento MCP by usefulapi

**Live endpoint:** `https://cogmento.usefulapi.io/mcp`

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cogmento.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cogmento https://cogmento.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cogmento&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcogmento.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cogmento": {
      "url": "https://cogmento.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Cogmento credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cogmento/

<!-- connect:end (generated above, edit below) -->

On first connect you will paste your **Cogmento API token**. It is validated, stored per-user, and scoped to you. No keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cogmento_get_current_user` | read | Get current user |
| `cogmento_get_account` | read | Get account |
| `cogmento_get_templates` | read | Get field templates |
| `cogmento_list_contacts` | read | List contacts |
| `cogmento_get_contact` | read | Get contact |
| `cogmento_create_contact` | **write** | Create contact |
| `cogmento_list_companies` | read | List companies |
| `cogmento_get_company` | read | Get company |
| `cogmento_create_company` | **write** | Create company |
| `cogmento_list_deals` | read | List deals |
| `cogmento_get_deal` | read | Get deal |
| `cogmento_create_deal` | **write** | Create deal |
| `cogmento_get_deal_pipeline_summary` | read | Get deal pipeline summary |
| `cogmento_aggregate_deals` | read | Aggregate deal values |
| `cogmento_list_deal_stages` | read | List deal contact stages |
| `cogmento_set_deal_contact_stage` | **write** | Set a contact's stage in a deal |
| `cogmento_list_tasks` | read | List tasks |
| `cogmento_get_task` | read | Get task |
| `cogmento_create_task` | **write** | Create task |
| `cogmento_complete_task` | **write** | Complete task |
| `cogmento_list_cases` | read | List cases |
| `cogmento_get_case` | read | Get case |
| `cogmento_create_case` | **write** | Create case |
| `cogmento_list_products` | read | List products |
| `cogmento_list_calls` | read | List calls |
| `cogmento_update_record_field` | **write** | Update one field of a record |
| `cogmento_usage_status` | meta | Usage status (free-tier meter) |
| `cogmento_request_feature` | meta | Request a missing feature |
| `cogmento_upgrade` | meta | Upgrade to Pro or Pro+ |
| `cogmento_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per account) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `cogmento_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `cogmento_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `cogmento_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
