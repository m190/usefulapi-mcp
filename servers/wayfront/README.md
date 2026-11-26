# Wayfront MCP by usefulapi

Use your [Wayfront](https://www.wayfront.com) account from Claude, Cursor, or any MCP client. Read clients, orders, tickets, invoices and pipelines, and post messages, create tasks and open tickets. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://wayfront.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://wayfront.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http wayfront https://wayfront.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=wayfront&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwayfront.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "wayfront": {
      "url": "https://wayfront.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Wayfront credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/wayfront/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **workspace name** (the part before .wayfront.com) and a **Wayfront staff API token** (API access turned on). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `wayfront_list_clients` | read | List clients |
| `wayfront_get_client` | read | Get a client |
| `wayfront_list_companies` | read | List companies |
| `wayfront_list_orders` | read | List orders |
| `wayfront_get_order` | read | Get an order |
| `wayfront_list_order_deliverables` | read | List order deliverables |
| `wayfront_list_order_messages` | read | List order messages |
| `wayfront_list_order_tasks` | read | List order tasks |
| `wayfront_list_tickets` | read | List tickets |
| `wayfront_get_ticket` | read | Get a ticket |
| `wayfront_list_ticket_messages` | read | List ticket messages |
| `wayfront_list_invoices` | read | List invoices |
| `wayfront_get_invoice` | read | Get an invoice |
| `wayfront_list_subscriptions` | read | List subscriptions |
| `wayfront_list_services` | read | List services |
| `wayfront_list_pipelines` | read | List pipelines |
| `wayfront_list_pipeline_items` | read | List pipeline items |
| `wayfront_list_team` | read | List team members |
| `wayfront_list_tags` | read | List tags |
| `wayfront_list_tracked_times` | read | List tracked time |
| `wayfront_post_order_message` | **write** | Post an order message |
| `wayfront_post_ticket_message` | **write** | Post a ticket message |
| `wayfront_create_order_task` | **write** | Create an order task |
| `wayfront_set_task_complete` | **write** | Mark a task complete or open |
| `wayfront_add_order_tags` | **write** | Add tags to an order |
| `wayfront_create_ticket` | **write** | Create a ticket |
| `wayfront_usage_status` | meta | Usage status (free-tier meter) |
| `wayfront_request_feature` | meta | Request a missing feature |
| `wayfront_upgrade` | meta | Upgrade to Pro or Pro+ |
| `wayfront_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `wayfront_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `wayfront_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `wayfront_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
