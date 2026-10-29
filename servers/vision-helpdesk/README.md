# Vision Helpdesk MCP by usefulapi

Connect your assistant at https://vision-helpdesk.usefulapi.io/mcp.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://vision-helpdesk.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http vision-helpdesk https://vision-helpdesk.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=vision-helpdesk&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fvision-helpdesk.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "vision-helpdesk": {
      "url": "https://vision-helpdesk.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Vision Helpdesk credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/vision-helpdesk/

<!-- connect:end (generated above, edit below) -->

Enter your public HTTPS helpdesk address and an admin or staff API access token (vis_txttoken). Ask your helpdesk administrator for the token if you do not already have one. Your role needs API Access permission, and the vendor's Starter plan does not include the REST API.

Use the URL of your hosted helpdesk or your publicly reachable installation, including its folder if applicable. The connector sends your token only to that address and does not follow API redirects.

Every write requires explicit confirmation. Ticket creation and replies disable customer email by default. Internal tickets stay private and cannot include client recipients or customer email flags.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `vision_get_dashboard_counts` | read | Get dashboard counts |
| `vision_list_tickets` | read | List tickets |
| `vision_search_tickets` | read | Search tickets by reference or subject |
| `vision_get_ticket` | read | Get ticket |
| `vision_list_tickets_by_tag` | read | List tickets by tag |
| `vision_list_tickets_by_label` | read | List tickets by label |
| `vision_list_statuses` | read | List ticket statuses |
| `vision_list_priorities` | read | List ticket priorities |
| `vision_list_ticket_types` | read | List ticket types |
| `vision_list_clients` | read | List clients |
| `vision_search_clients` | read | Search clients |
| `vision_get_client_summary` | read | Get client summary |
| `vision_create_ticket` | **write** | Create ticket |
| `vision_reply_to_ticket` | **write** | Reply to ticket |
| `vision_add_ticket_note` | **write** | Add ticket note |
| `vision_add_client_note` | **write** | Add client note |
| `vision_update_ticket_property` | **write** | Update ticket status, priority, department or type |
| `vision_assign_ticket_staff` | **write** | Assign or unassign ticket staff |
| `vision_add_ticket_tag` | **write** | Add tag to ticket |
| `vision_usage_status` | meta | Usage status (free-tier meter) |
| `vision_request_feature` | meta | Request a missing feature |
| `vision_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `vision_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per helpdesk) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `vision_upgrade` (it returns a Stripe Checkout link). Cancel any time with `vision_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `vision_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT. An independent integration by usefulapi; not affiliated with Vision Helpdesk.
