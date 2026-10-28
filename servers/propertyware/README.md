# Propertyware MCP by usefulapi

**Live endpoint:** `https://propertyware.usefulapi.io/mcp`

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://propertyware.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http propertyware https://propertyware.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=propertyware&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpropertyware.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "propertyware": {
      "url": "https://propertyware.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Propertyware credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/propertyware/

<!-- connect:end (generated above, edit below) -->

Connect with the client ID, client secret and organization ID from Administration Setup → API Keys. Enable Buildings read access for the login check and permissions for the resources you need. Task and comment creation require Work Orders write access; a read-only key disables writes.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `propertyware_list_buildings` | read | List buildings |
| `propertyware_get_building` | read | Get building |
| `propertyware_list_units` | read | List units |
| `propertyware_get_unit` | read | Get unit |
| `propertyware_list_leases` | read | List leases |
| `propertyware_get_lease` | read | Get lease |
| `propertyware_list_contacts` | read | List contacts |
| `propertyware_get_contact` | read | Get contact |
| `propertyware_list_portfolios` | read | List portfolios |
| `propertyware_get_portfolio` | read | Get portfolio |
| `propertyware_list_vendors` | read | List vendors |
| `propertyware_get_vendor` | read | Get vendor |
| `propertyware_list_work_orders` | read | List work orders |
| `propertyware_get_work_order` | read | Get work order |
| `propertyware_list_prospects` | read | List prospects |
| `propertyware_get_prospect` | read | Get prospect |
| `propertyware_list_building_notes` | read | List building notes |
| `propertyware_list_lease_notes` | read | List lease notes |
| `propertyware_list_work_order_tasks` | read | List work order tasks |
| `propertyware_create_work_order_task` | **write** | Create work order task |
| `propertyware_add_task_comment` | **write** | Add task comment |
| `propertyware_usage_status` | meta | Usage status (free-tier meter) |
| `propertyware_request_feature` | meta | Request a missing feature |
| `propertyware_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `propertyware_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per organization) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `propertyware_upgrade` (it returns a Stripe Checkout link). Cancel any time with `propertyware_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `propertyware_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
