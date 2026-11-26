# Capmo MCP by usefulapi

Use your [Capmo](https://www.capmo.de) account from Claude, Cursor, or any MCP client. Read projects, tickets, plans, site journals, documents and change orders, and create or update tickets and change orders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://capmo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://capmo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http capmo https://capmo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=capmo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcapmo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "capmo": {
      "url": "https://capmo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Capmo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/capmo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Capmo API key** (your personal account settings page in Capmo). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `capmo_list_projects` | read | List projects |
| `capmo_get_project` | read | Get a project |
| `capmo_list_project_tickets` | read | List tickets |
| `capmo_get_project_ticket` | read | Get a ticket |
| `capmo_list_ticket_comments` | read | List ticket comments |
| `capmo_list_ticket_categories` | read | List ticket categories |
| `capmo_create_project_ticket` | **write** | Create a ticket |
| `capmo_update_project_ticket` | **write** | Update a ticket |
| `capmo_list_project_people` | read | List project people |
| `capmo_list_project_companies` | read | List project companies |
| `capmo_list_organisation_people` | read | List organisation contacts |
| `capmo_list_documents` | read | List project documents |
| `capmo_get_document` | read | Get a project document |
| `capmo_list_plans` | read | List plans |
| `capmo_get_plan` | read | Get a plan |
| `capmo_list_site_journals` | read | List site journals |
| `capmo_get_site_journal` | read | Get a site journal |
| `capmo_list_change_orders` | read | List change orders |
| `capmo_get_change_order` | read | Get a change order |
| `capmo_list_change_order_steps` | read | List change order steps |
| `capmo_create_change_order` | **write** | Create a change order |
| `capmo_update_change_order` | **write** | Update a change order |
| `capmo_list_room_listings` | read | List room listings |
| `capmo_usage_status` | meta | Usage status (free-tier meter) |
| `capmo_request_feature` | meta | Request a missing feature |
| `capmo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `capmo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `capmo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `capmo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `capmo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
