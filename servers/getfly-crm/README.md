# Getfly CRM MCP by usefulapi

Connect your API-enabled Getfly CRM account.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://getfly-crm.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http getfly-crm https://getfly-crm.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=getfly-crm&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgetfly-crm.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "getfly-crm": {
      "url": "https://getfly-crm.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Getfly CRM credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/getfly-crm/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `getfly_list_users` | read | List users |
| `getfly_get_user` | read | Get user |
| `getfly_list_accounts` | read | List customers |
| `getfly_get_account` | read | Get customer |
| `getfly_create_account` | **write** | Create customer |
| `getfly_update_account` | **write** | Update customer |
| `getfly_list_campaigns` | read | List campaigns |
| `getfly_get_campaign_stages` | read | Get campaign stages |
| `getfly_list_opportunities` | read | List opportunities |
| `getfly_get_opportunity` | read | Get opportunity |
| `getfly_list_opportunity_comments` | read | List opportunity comments |
| `getfly_create_opportunity` | **write** | Create opportunity |
| `getfly_move_opportunity_stage` | **write** | Move opportunity to a pipeline stage |
| `getfly_add_opportunity_comment` | **write** | Add opportunity comment |
| `getfly_list_products` | read | List products |
| `getfly_get_product` | read | Get product |
| `getfly_list_sale_orders` | read | List sales orders |
| `getfly_get_sale_order` | read | Get sales order |
| `getfly_list_tickets` | read | List support tickets |
| `getfly_get_ticket` | read | Get support ticket |
| `getfly_list_ticket_comments` | read | List ticket comments |
| `getfly_list_ticket_categories` | read | List ticket categories |
| `getfly_list_ticket_statuses` | read | List ticket statuses |
| `getfly_create_ticket` | **write** | Create support ticket |
| `getfly_list_tasks` | read | List tasks |
| `getfly_get_task` | read | Get task |
| `getfly_create_task` | **write** | Create task |
| `getfly_complete_task` | **write** | Complete task |
| `getfly_list_funds` | read | List funds |
| `getfly_usage_status` | meta | Usage status (free-tier meter) |
| `getfly_request_feature` | meta | Request a missing feature |
| `getfly_upgrade` | meta | Upgrade to Pro or Pro+ |
| `getfly_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per Getfly company) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per Getfly company) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `getfly_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `getfly_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `getfly_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
