# Booxi MCP by usefulapi

Use your [Booxi](https://www.booxi.com) account from Claude, Cursor, or any MCP client. Read the services, staff, group events and free time slots of a business for online booking. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://booxi.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://booxi.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http booxi https://booxi.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=booxi&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbooxi.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "booxi": {
      "url": "https://booxi.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Booxi credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/booxi/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Booxi Merchant API key** (Booxi Back Office → My Business → Business Details). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `booxi_get_merchant` | read | Get the business |
| `booxi_list_services` | read | List services |
| `booxi_list_service_categories` | read | List service categories |
| `booxi_list_staff` | read | List staff |
| `booxi_list_service_customizations` | read | List service customizations |
| `booxi_list_group_events` | read | List group events |
| `booxi_get_group_event` | read | Get a group event |
| `booxi_get_service_availability` | read | Get availability for a service |
| `booxi_find_merchant_availability` | read | Find availability across services |
| `booxi_search_availability` | read | Search availability for several services |
| `booxi_usage_status` | meta | Usage status (free-tier meter) |
| `booxi_request_feature` | meta | Request a missing feature |
| `booxi_upgrade` | meta | Upgrade to Pro or Pro+ |
| `booxi_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `booxi_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `booxi_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `booxi_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
