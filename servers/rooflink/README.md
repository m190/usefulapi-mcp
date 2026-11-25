# RoofLink MCP by usefulapi

Use your [RoofLink](https://rooflink.com) account from Claude, Cursor, or any MCP client. Read jobs, customers, to-dos, estimates, payments and crews, and create to-dos that you mark complete or open. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://rooflink.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://rooflink.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http rooflink https://rooflink.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=rooflink&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frooflink.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "rooflink": {
      "url": "https://rooflink.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your RoofLink credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/rooflink/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **RoofLink API key**, which the company owner creates under Company Settings → API Keys. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `rooflink_list_jobs` | read | List jobs |
| `rooflink_get_job` | read | Get job |
| `rooflink_search_jobs` | read | Search jobs |
| `rooflink_list_customers` | read | List customers |
| `rooflink_get_customer` | read | Get customer |
| `rooflink_list_todos` | read | List to-dos |
| `rooflink_get_todo` | read | Get to-do |
| `rooflink_create_todo` | **write** | Create to-do |
| `rooflink_set_todo_completed` | **write** | Mark to-do complete or open |
| `rooflink_list_events` | read | List events |
| `rooflink_list_estimates` | read | List estimates |
| `rooflink_list_payments` | read | List payments |
| `rooflink_list_notes` | read | List notes |
| `rooflink_list_employees` | read | List employees |
| `rooflink_list_crews` | read | List crews |
| `rooflink_list_work_orders` | read | List work orders |
| `rooflink_usage_status` | meta | Usage status (free-tier meter) |
| `rooflink_request_feature` | meta | Request a missing feature |
| `rooflink_upgrade` | meta | Upgrade to Pro or Pro+ |
| `rooflink_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `rooflink_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `rooflink_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `rooflink_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
