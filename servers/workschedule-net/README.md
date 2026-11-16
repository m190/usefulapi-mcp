# WorkSchedule.Net MCP by usefulapi

Use your [WorkSchedule.Net](https://www.workschedule.app) account from Claude, Cursor, or any MCP client. Read users, locations and time blocks, and create or change shifts on the live schedule. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://workschedule-net.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://workschedule-net.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http workschedule-net https://workschedule-net.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=workschedule-net&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fworkschedule-net.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "workschedule-net": {
      "url": "https://workschedule-net.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your WorkSchedule.Net credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/workschedule-net/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **CompanyID** (digits), and the **API user name** and **API user passcode** of a dedicated API user with the API role, created in WorkSchedule.Net. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `workschedulenet_list_users` | read | List users |
| `workschedulenet_get_user` | read | Get user |
| `workschedulenet_list_category_items` | read | List category items |
| `workschedulenet_get_category_item` | read | Get category item |
| `workschedulenet_get_timeblock` | read | Get time block |
| `workschedulenet_create_timeblock` | **write** | Create time block |
| `workschedulenet_update_timeblock` | **write** | Update time block |
| `workschedulenet_usage_status` | meta | Usage status (free-tier meter) |
| `workschedulenet_request_feature` | meta | Request a missing feature |
| `workschedulenet_upgrade` | meta | Upgrade to Pro or Pro+ |
| `workschedulenet_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `workschedulenet_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `workschedulenet_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `workschedulenet_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
