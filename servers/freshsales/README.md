# Freshsales MCP by usefulapi

Use [Freshsales](https://www.freshworks.com/crm/sales/) from Claude, Cursor, or any MCP client — work with your contacts, accounts, deals, tasks and appointments. Hosted, no local install: connect with your own Freshsales credentials.

**Live endpoint:** `https://freshsales.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/freshsales

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://freshsales.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http freshsales https://freshsales.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=freshsales&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffreshsales.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "freshsales": {
      "url": "https://freshsales.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Freshsales credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/freshsales/

<!-- connect:end (generated above, edit below) -->

On first connect you'll enter your **Freshsales domain and API key** (Freshsales Profile Settings → API Settings). They are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `freshsales_list_contact_views` | read | List contact views |
| `freshsales_list_contacts` | read | List contacts |
| `freshsales_get_contact` | read | Get contact |
| `freshsales_search` | read | Search records |
| `freshsales_lookup` | read | Look up by exact field |
| `freshsales_list_account_views` | read | List account views |
| `freshsales_list_accounts` | read | List accounts |
| `freshsales_get_account` | read | Get account |
| `freshsales_list_deal_views` | read | List deal views |
| `freshsales_list_deals` | read | List deals |
| `freshsales_get_deal` | read | Get deal |
| `freshsales_list_tasks` | read | List tasks |
| `freshsales_get_task` | read | Get task |
| `freshsales_list_appointments` | read | List appointments |
| `freshsales_get_appointment` | read | Get appointment |
| `freshsales_list_sales_activities` | read | List sales activities |
| `freshsales_list_owners` | read | List owners (users) |
| `freshsales_list_deal_pipelines` | read | List deal pipelines |
| `freshsales_list_deal_stages` | read | List deal stages |
| `freshsales_list_options` | read | List option values |
| `freshsales_create_contact` | **write** | Create contact |
| `freshsales_update_contact` | **write** | Update contact |
| `freshsales_create_account` | **write** | Create account |
| `freshsales_update_account` | **write** | Update account |
| `freshsales_create_deal` | **write** | Create deal |
| `freshsales_update_deal` | **write** | Update deal |
| `freshsales_create_note` | **write** | Add note |
| `freshsales_update_note` | **write** | Update note |
| `freshsales_create_task` | **write** | Create task |
| `freshsales_update_task` | **write** | Update task |
| `freshsales_create_appointment` | **write** | Create appointment |
| `freshsales_usage_status` | meta | Usage status (free-tier meter) |
| `freshsales_request_feature` | meta | Request a missing feature |
| `freshsales_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `freshsales_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `freshsales_upgrade` (it returns a Stripe Checkout link). Cancel any time with `freshsales_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `freshsales_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
