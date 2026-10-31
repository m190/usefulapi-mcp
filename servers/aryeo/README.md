# Aryeo MCP by usefulapi

Connect your AI assistant to your Aryeo orders, appointments, listings, customers and tasks.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://aryeo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http aryeo https://aryeo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=aryeo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Faryeo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "aryeo": {
      "url": "https://aryeo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Aryeo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/aryeo/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `aryeo_list_orders` | read | List orders |
| `aryeo_get_order` | read | Get order |
| `aryeo_update_order_notes` | **write** | Update order notes |
| `aryeo_list_appointments` | read | List appointments |
| `aryeo_get_appointment` | read | Get appointment |
| `aryeo_cancel_appointment` | **write** | Cancel appointment |
| `aryeo_reschedule_appointment` | **write** | Reschedule appointment |
| `aryeo_list_available_timeslots` | read | List available timeslots |
| `aryeo_list_available_dates` | read | List available dates |
| `aryeo_list_listings` | read | List listings |
| `aryeo_get_listing` | read | Get listing |
| `aryeo_get_listing_stats` | read | Get listing statistics |
| `aryeo_list_customers` | read | List customers |
| `aryeo_create_customer` | **write** | Create customer |
| `aryeo_list_products` | read | List products |
| `aryeo_list_product_categories` | read | List product categories |
| `aryeo_list_coupons` | read | List coupons |
| `aryeo_list_order_forms` | read | List order forms |
| `aryeo_list_team_members` | read | List team members |
| `aryeo_list_team_member_events` | read | List team member calendar |
| `aryeo_list_tasks` | read | List tasks |
| `aryeo_get_task` | read | Get task |
| `aryeo_create_task` | **write** | Create task |
| `aryeo_complete_task` | **write** | Complete task |
| `aryeo_usage_status` | meta | Usage status (free-tier meter) |
| `aryeo_request_feature` | meta | Request a missing feature |
| `aryeo_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `aryeo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per Aryeo account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `aryeo_upgrade` (it returns a Stripe Checkout link). Cancel any time with `aryeo_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `aryeo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT. Unofficial integration; no Aryeo endorsement is claimed.


## Data and write effects

Requested orders, customer contacts, schedules and media links pass to your chosen AI client and LLM provider. Use only media you may share. Six writes replace whole internal notes, cancel or reschedule appointments, create customers, and create or complete tasks. Appointment changes require an explicit notification choice; creating a customer can email an invitation. No payment or refund tools are exposed. Requests are never automatically retried; inspect uncertain writes before repeating them.

Current vendor OpenAPI, mock integration, security and Worker checks pass. Authenticated customer reads, invitations, appointment notifications and business writes have not been tested. API keys can be revoked in Developer Settings; changing a key, owner or permission can change your usage identity.
