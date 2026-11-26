# Metricool MCP by usefulapi

Use your [Metricool](https://metricool.com) account from Claude, Cursor, or any MCP client. Read scheduled posts, best posting times and post metrics, and create or delete scheduled posts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://metricool.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://metricool.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http metricool https://metricool.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=metricool&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmetricool.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "metricool": {
      "url": "https://metricool.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Metricool credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/metricool/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Metricool API token** (Account Settings → API; Advanced or Custom plan), your **user ID** (the `userId=…` number in the app address) and your **brand ID** (the `blogId=…` number). The server validates the token and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `metricool_list_brands` | read | List brands |
| `metricool_get_subscription` | read | Get subscription |
| `metricool_list_calendar_posts` | read | List scheduled posts in a period |
| `metricool_get_scheduled_post` | read | Get a scheduled post |
| `metricool_create_scheduled_post` | **write** | Create a scheduled post |
| `metricool_delete_scheduled_post` | **write** | Delete a scheduled post |
| `metricool_list_library_posts` | read | List library posts |
| `metricool_get_library_post` | read | Get a library post |
| `metricool_list_workflow_states` | read | List workflow states |
| `metricool_get_best_times` | read | Get best times to publish |
| `metricool_get_brand_summary` | read | Get post performance summary |
| `metricool_get_metric_total` | read | Get one aggregated metric |
| `metricool_usage_status` | meta | Usage status (free-tier meter) |
| `metricool_request_feature` | meta | Request a missing feature |
| `metricool_upgrade` | meta | Upgrade to Pro or Pro+ |
| `metricool_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `metricool_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `metricool_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `metricool_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
