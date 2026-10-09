# Tookan MCP by usefulapi

Use [Tookan](https://jungleworks.com/tookan/) from Claude, Cursor, or any MCP client — read Tookan tasks, agents, teams and customers; create delivery tasks and assign agents.
Hosted, no local install: connect with your own Tookan credentials.

**Live endpoint:** `https://tookan.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/tookan

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://tookan.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http tookan https://tookan.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=tookan&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftookan.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "tookan": {
      "url": "https://tookan.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Tookan credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/tookan/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Tookan V2 API key**.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `get_account` | read | Get account |
| `list_tasks` | read | List tasks |
| `get_tasks` | read | Get task details |
| `get_tasks_by_order_id` | read | Get tasks by order id |
| `get_task_stats` | read | Task statistics |
| `list_agents` | read | List agents |
| `get_agent` | read | Get agent profile |
| `get_agent_location` | read | Get agent location |
| `list_teams` | read | List teams |
| `list_customers` | read | List customers |
| `find_customer_by_phone` | read | Find customer by phone |
| `get_customer` | read | Get customer profile |
| `create_delivery_task` | **write** | Create a delivery task |
| `assign_agent_to_task` | **write** | Assign an agent to a task |
| `update_task_status` | **write** | Update task status |
| `tookan_usage_status` | meta | Usage status (free-tier meter) |
| `tookan_request_feature` | meta | Request a missing feature |
| `tookan_upgrade` | meta | Upgrade to Pro (unlimited) |
| `tookan_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `tookan_upgrade` (it returns a Stripe Checkout link). Cancel any time with `tookan_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `tookan_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Tookan.
