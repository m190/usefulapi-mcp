# Zendesk MCP by usefulapi

Use your [Zendesk](https://www.zendesk.com) account from Claude, Cursor, or any MCP client — read tickets, users, organizations, macros and satisfaction ratings, and create, update or comment on tickets. Hosted,
no local install: connect with your own credentials.

**Live endpoint:** `https://zendesk.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://zendesk.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http zendesk https://zendesk.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=zendesk&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fzendesk.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "zendesk": {
      "url": "https://zendesk.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Zendesk credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/zendesk/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Zendesk subdomain**, **agent email** and **API token** (Admin Center → Apps and integrations → APIs). It is validated, stored per-user, and scoped to you — no
keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `zendesk_search` | read | Search |
| `zendesk_list_tickets` | read | List tickets |
| `zendesk_get_ticket` | read | Get ticket |
| `zendesk_list_ticket_comments` | read | List ticket comments |
| `zendesk_current_user` | read | Current user (whoami) |
| `zendesk_get_user` | read | Get user |
| `zendesk_search_users` | read | Search users |
| `zendesk_list_organizations` | read | List organizations |
| `zendesk_get_organization` | read | Get organization |
| `zendesk_list_groups` | read | List groups |
| `zendesk_list_views` | read | List views |
| `zendesk_execute_view` | read | Execute view |
| `zendesk_list_macros` | read | List macros |
| `zendesk_list_ticket_fields` | read | List ticket fields |
| `zendesk_get_ticket_metrics` | read | Get ticket metrics |
| `zendesk_list_satisfaction_ratings` | read | List satisfaction ratings |
| `zendesk_create_ticket` | **write** | Create ticket |
| `zendesk_update_ticket` | **write** | Update ticket |
| `zendesk_add_ticket_comment` | **write** | Add ticket comment |
| `zendesk_usage_status` | meta | Usage status (free-tier meter) |
| `zendesk_request_feature` | meta | Request a missing feature |
| `zendesk_upgrade` | meta | Upgrade to Pro (unlimited) |
| `zendesk_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `zendesk_upgrade` (it returns a Stripe Checkout link). Cancel any time with `zendesk_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `zendesk_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
