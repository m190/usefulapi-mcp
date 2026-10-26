# GoFormz MCP by usefulapi

**Live endpoint:** `https://goformz.usefulapi.io/mcp`

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://goformz.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http goformz https://goformz.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=goformz&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgoformz.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "goformz": {
      "url": "https://goformz.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your GoFormz credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/goformz/

<!-- connect:end (generated above, edit below) -->

On first connect you will paste your **GoFormz Client ID and Client Secret**. They are validated, stored per-user, and scoped to you. No keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `goformz_list_templates` | read | List templates |
| `goformz_get_template` | read | Get a template |
| `goformz_list_forms` | read | List forms |
| `goformz_list_template_forms` | read | List forms of a template |
| `goformz_get_form` | read | Get a form |
| `goformz_list_groups` | read | List groups |
| `goformz_get_group` | read | Get a group |
| `goformz_list_users` | read | List users |
| `goformz_get_user` | read | Get a user |
| `goformz_list_datasources` | read | List data sources |
| `goformz_get_datasource` | read | Get a data source |
| `goformz_list_datasource_rows` | read | List data source rows |
| `goformz_get_datasource_row` | read | Get a data source row |
| `goformz_list_webhooks` | read | List webhooks |
| `goformz_get_queue_item` | read | Get an async job status |
| `goformz_get_file` | read | Get a file |
| `goformz_get_pdf_export` | read | Get a PDF export |
| `goformz_export_form_pdf` | **write** | Export a form to PDF |
| `goformz_create_form` | **write** | Create a form |
| `goformz_update_form` | **write** | Update a form |
| `goformz_set_form_status` | **write** | Complete or re-open a form |
| `goformz_create_datasource_row` | **write** | Add a data source row |
| `goformz_update_datasource_row` | **write** | Update a data source row |
| `goformz_usage_status` | meta | Usage status (free-tier meter) |
| `goformz_request_feature` | meta | Request a missing feature |
| `goformz_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `goformz_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `goformz_upgrade` (it returns a Stripe Checkout link). Cancel any time with `goformz_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `goformz_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
