# Faveo Helpdesk MCP by usefulapi

Use your [Faveo Helpdesk](https://www.faveohelpdesk.com) account from Claude, Cursor, or any MCP client. Read and search tickets and customers, reply to customers and add internal notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://faveo-helpdesk.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://faveo-helpdesk.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http faveo-helpdesk https://faveo-helpdesk.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=faveo-helpdesk&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffaveo-helpdesk.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "faveo-helpdesk": {
      "url": "https://faveo-helpdesk.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Faveo Helpdesk credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/faveo-helpdesk/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **Faveo host** (for example support.yourcompany.com), your **username or email** and **password** of a Faveo agent or admin, and an **API key** only if your admin made it mandatory (Admin Panel → Settings → API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `faveo_get_authenticated_user` | read | Get logged-in user |
| `faveo_list_open_tickets` | read | List open tickets |
| `faveo_list_unassigned_tickets` | read | List unassigned tickets |
| `faveo_list_closed_tickets` | read | List closed tickets |
| `faveo_get_ticket` | read | Get ticket |
| `faveo_get_ticket_thread` | read | Get ticket thread |
| `faveo_search_tickets` | read | Search tickets |
| `faveo_list_customers` | read | List customers |
| `faveo_get_customer` | read | Get customer |
| `faveo_list_agents` | read | List agents |
| `faveo_list_teams` | read | List teams |
| `faveo_list_help_topics` | read | List help topics |
| `faveo_list_sla_plans` | read | List SLA plans |
| `faveo_list_priorities` | read | List priorities |
| `faveo_list_departments` | read | List departments |
| `faveo_create_ticket` | **write** | Create ticket |
| `faveo_reply_to_ticket` | **write** | Reply to ticket |
| `faveo_add_internal_note` | **write** | Add internal note |
| `faveo_usage_status` | meta | Usage status (free-tier meter) |
| `faveo_request_feature` | meta | Request a missing feature |
| `faveo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `faveo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `faveo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `faveo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `faveo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
