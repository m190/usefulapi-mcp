# Zomentum MCP by usefulapi

Use your [Zomentum](https://www.zomentum.com) account from Claude, Cursor, or any MCP client. Read and search sales data, and create tasks and add comments in your Zomentum workspace. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://zomentum.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://zomentum.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http zomentum https://zomentum.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=zomentum&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fzomentum.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "zomentum": {
      "url": "https://zomentum.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Zomentum credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/zomentum/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Zomentum API user refresh token**. In Grow, open Settings → Users, open the API user, and copy its Refresh Token. The API User role needs the Growth plan or the API Access add-on. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `zomentum_list_opportunities` | read | List opportunities |
| `zomentum_get_opportunity` | read | Get opportunity |
| `zomentum_count_opportunities` | read | Count opportunities by stage |
| `zomentum_list_pipelines` | read | List pipelines |
| `zomentum_get_pipeline` | read | Get pipeline |
| `zomentum_search` | read | Search workspace |
| `zomentum_list_client_companies` | read | List client companies |
| `zomentum_get_client_company` | read | Get client company |
| `zomentum_list_client_users` | read | List contacts |
| `zomentum_get_client_user` | read | Get contact |
| `zomentum_list_documents` | read | List documents |
| `zomentum_get_document` | read | Get document |
| `zomentum_get_document_download_url` | read | Get document PDF link |
| `zomentum_list_items` | read | List catalog items |
| `zomentum_get_item` | read | Get catalog item |
| `zomentum_list_activities` | read | List sales activities |
| `zomentum_list_tasks` | read | List tasks |
| `zomentum_list_meetings` | read | List meetings |
| `zomentum_list_suppliers` | read | List suppliers |
| `zomentum_list_users` | read | List team members |
| `zomentum_get_user` | read | Get team member |
| `zomentum_list_tags` | read | List tags |
| `zomentum_list_custom_fields` | read | List custom fields |
| `zomentum_create_task` | **write** | Create task |
| `zomentum_add_comment` | **write** | Add comment |
| `zomentum_usage_status` | meta | Usage status (free-tier meter) |
| `zomentum_request_feature` | meta | Request a missing feature |
| `zomentum_upgrade` | meta | Upgrade to Pro or Pro+ |
| `zomentum_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `zomentum_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `zomentum_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `zomentum_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
