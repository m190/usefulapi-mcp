# AgendaPro MCP by usefulapi

Read AgendaPro bookings, slots, clients, services and sales; create, update and cancel bookings.

**Live endpoint:** `https://agendapro.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/agendapro

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://agendapro.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http agendapro https://agendapro.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=agendapro&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fagendapro.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "agendapro": {
      "url": "https://agendapro.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your AgendaPro credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/agendapro/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your AgendaPro **API key** (Configuraciones → Integraciones; Pro plan). The key needs read access to locations, providers or services.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `agendapro_list_locations` | read | List locations |
| `agendapro_get_location` | read | Get location |
| `agendapro_list_services` | read | List services |
| `agendapro_get_service` | read | Get service |
| `agendapro_list_service_categories` | read | List service categories |
| `agendapro_list_providers` | read | List providers |
| `agendapro_get_provider` | read | Get provider |
| `agendapro_list_bookings` | read | List bookings |
| `agendapro_get_booking` | read | Get booking |
| `agendapro_list_available_slots` | read | List available slots |
| `agendapro_create_booking` | **write** | Create booking |
| `agendapro_update_booking` | **write** | Update booking |
| `agendapro_cancel_booking` | **write** | Cancel booking |
| `agendapro_list_clients` | read | List clients |
| `agendapro_search_clients` | read | Search clients |
| `agendapro_get_client` | read | Get client |
| `agendapro_list_client_custom_attributes` | read | List a client's custom attributes |
| `agendapro_list_custom_attributes` | read | List custom attribute templates |
| `agendapro_create_client` | **write** | Create client |
| `agendapro_update_client` | **write** | Update client |
| `agendapro_list_sales` | read | List sales |
| `agendapro_get_sale` | read | Get sale |
| `agendapro_list_products` | read | List products |
| `agendapro_get_product` | read | Get product |
| `agendapro_usage_status` | meta | Usage status (free-tier meter) |
| `agendapro_request_feature` | meta | Request a missing feature |
| `agendapro_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `agendapro_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `agendapro_upgrade` (it returns a Stripe Checkout link). Cancel any time with `agendapro_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `agendapro_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by AgendaPro.
