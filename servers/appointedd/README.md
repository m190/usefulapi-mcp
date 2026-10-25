# Appointedd MCP by usefulapi

Read Appointedd bookings, customers and availability; create, change and cancel bookings. Hosted, no local install.

**Live endpoint:** `https://appointedd.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/appointedd

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://appointedd.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http appointedd https://appointedd.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=appointedd&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fappointedd.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "appointedd": {
      "url": "https://appointedd.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Appointedd credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/appointedd/

<!-- connect:end (generated above, edit below) -->

On first connect you will paste your **Appointedd credentials**. They are validated, stored per-user, and scoped to you. No keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `appointedd_list_bookings` | read | List bookings |
| `appointedd_list_customers` | read | List customers |
| `appointedd_get_customer` | read | Get customer |
| `appointedd_list_resources` | read | List resources |
| `appointedd_list_resource_groups` | read | List resource groups |
| `appointedd_list_services` | read | List services |
| `appointedd_get_service` | read | Get service |
| `appointedd_list_service_categories` | read | List service categories |
| `appointedd_get_service_category` | read | Get service category |
| `appointedd_find_available_intervals` | read | Find available times |
| `appointedd_find_available_dates` | read | Find available days |
| `appointedd_get_reservation` | read | Get reservation |
| `appointedd_create_customer` | **write** | Create customer |
| `appointedd_update_customer` | **write** | Update customer |
| `appointedd_create_reservation` | **write** | Create reservation (hold a time) |
| `appointedd_create_booking` | **write** | Create booking |
| `appointedd_update_booking` | **write** | Update booking |
| `appointedd_update_booking_customer` | **write** | Update customer on booking |
| `appointedd_cancel_booking` | **write** | Cancel booking |
| `appointedd_cancel_booking_customer` | **write** | Cancel customer on booking |
| `appointedd_usage_status` | meta | Usage status (free-tier meter) |
| `appointedd_request_feature` | meta | Request a missing feature |
| `appointedd_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `appointedd_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `appointedd_upgrade` (it returns a Stripe Checkout link). Cancel any time with `appointedd_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `appointedd_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
