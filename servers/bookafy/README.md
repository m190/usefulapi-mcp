# Bookafy MCP by usefulapi

Hosted at https://bookafy.usefulapi.io/mcp.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bookafy.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bookafy https://bookafy.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bookafy&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbookafy.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bookafy": {
      "url": "https://bookafy.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Bookafy credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bookafy/

<!-- connect:end (generated above, edit below) -->

Connect your Bookafy account using the credentials described on the login page.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bookafy_get_account` | read | Get account |
| `bookafy_list_appointments` | read | List appointments |
| `bookafy_create_appointment` | **write** | Create appointment |
| `bookafy_update_appointment` | **write** | Update appointment |
| `bookafy_cancel_appointment` | **write** | Cancel appointment |
| `bookafy_list_customers` | read | List customers |
| `bookafy_create_customer` | **write** | Create customer |
| `bookafy_update_customer` | **write** | Update customer |
| `bookafy_list_services` | read | List services |
| `bookafy_list_appointment_types` | read | List appointment types with booking links |
| `bookafy_list_staff` | read | List staff |
| `bookafy_list_classes` | read | List classes |
| `bookafy_get_class` | read | Get class with sessions and attendees |
| `bookafy_list_session_attendees` | read | List session attendees |
| `bookafy_list_webhooks` | read | List webhook subscriptions |
| `bookafy_usage_status` | meta | Usage status (free-tier meter) |
| `bookafy_request_feature` | meta | Request a missing feature |
| `bookafy_upgrade` | meta | Upgrade to Pro or Pro+ |
| `bookafy_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per admin account) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per admin account) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `bookafy_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `bookafy_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `bookafy_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
