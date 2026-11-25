# Onfleet MCP by usefulapi

Use your [Onfleet](https://onfleet.com) account from Claude, Cursor, or any MCP client. It reads tasks, orders, route plans and delivery manifests, and it can create tasks, cancel orders and update webhooks. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://onfleet.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://onfleet.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http onfleet https://onfleet.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=onfleet&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fonfleet.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "onfleet": {
      "url": "https://onfleet.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Onfleet credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/onfleet/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Onfleet API key** (Settings → API & Webhooks in Onfleet). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `onfleet_list_tasks` | read | List tasks |
| `onfleet_get_task` | read | Get task |
| `onfleet_get_task_by_short_id` | read | Get task by short ID |
| `onfleet_get_order` | read | Get order |
| `onfleet_list_route_plans` | read | List route plans |
| `onfleet_get_route_plan` | read | Get route plan |
| `onfleet_get_delivery_manifest` | read | Get delivery manifest |
| `onfleet_create_destination` | **write** | Create destination |
| `onfleet_create_worker` | **write** | Create worker |
| `onfleet_create_task` | **write** | Create task |
| `onfleet_cancel_orders` | **write** | Cancel orders |
| `onfleet_delete_route_plan` | **write** | Delete route plan |
| `onfleet_update_webhook` | **write** | Update webhook |
| `onfleet_usage_status` | meta | Usage status (free-tier meter) |
| `onfleet_request_feature` | meta | Request a missing feature |
| `onfleet_upgrade` | meta | Upgrade to Pro or Pro+ |
| `onfleet_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `onfleet_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `onfleet_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `onfleet_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
