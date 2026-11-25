# Raygun MCP by usefulapi

Use your [Raygun](https://raygun.com) account from Claude, Cursor, or any MCP client. Read applications, error groups, deployments, sessions and APM traces, resolve, ignore or comment on error groups, and create deployments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://raygun.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://raygun.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http raygun https://raygun.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=raygun&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fraygun.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "raygun": {
      "url": "https://raygun.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Raygun credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/raygun/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Raygun personal access token** (My Settings → Personal access tokens in Raygun) with at least the applications:read scope. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `raygun_list_applications` | read | List applications |
| `raygun_get_application` | read | Get application |
| `raygun_list_error_groups` | read | List error groups |
| `raygun_get_error_group` | read | Get error group |
| `raygun_list_error_instances` | read | List error instances |
| `raygun_get_error_instance` | read | Get error instance |
| `raygun_resolve_error_group` | **write** | Resolve error group |
| `raygun_ignore_error_group` | **write** | Ignore error group |
| `raygun_activate_error_group` | **write** | Activate error group |
| `raygun_comment_error_group` | **write** | Comment on error group |
| `raygun_list_deployments` | read | List deployments |
| `raygun_get_latest_deployment` | read | Get latest deployment |
| `raygun_get_deployment` | read | Get deployment |
| `raygun_create_deployment` | **write** | Create deployment |
| `raygun_list_customers` | read | List customers |
| `raygun_get_customer` | read | Get customer |
| `raygun_list_sessions` | read | List sessions |
| `raygun_get_session` | read | Get session |
| `raygun_list_pages` | read | List pages |
| `raygun_get_page` | read | Get page |
| `raygun_search_apm_issues` | read | Search APM issues |
| `raygun_get_apm_issue` | read | Get APM issue |
| `raygun_search_apm_traces` | read | Search APM traces |
| `raygun_get_apm_trace` | read | Get APM trace |
| `raygun_get_error_time_series` | read | Get error time series |
| `raygun_list_teams` | read | List teams |
| `raygun_get_team` | read | Get team |
| `raygun_list_plans` | read | List plans |
| `raygun_usage_status` | meta | Usage status (free-tier meter) |
| `raygun_request_feature` | meta | Request a missing feature |
| `raygun_upgrade` | meta | Upgrade to Pro or Pro+ |
| `raygun_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `raygun_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `raygun_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `raygun_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
