# Baremetrics MCP by usefulapi

Use your [Baremetrics](https://baremetrics.com) account from Claude, Cursor, or any MCP client. Read MRR, ARR, churn, cohorts, customers and subscriptions, and add notes to metric charts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://baremetrics.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://baremetrics.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http baremetrics https://baremetrics.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=baremetrics&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbaremetrics.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "baremetrics": {
      "url": "https://baremetrics.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Baremetrics credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/baremetrics/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Baremetrics API key** (Settings → API in Baremetrics). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `baremetrics_get_account` | read | Get account |
| `baremetrics_list_sources` | read | List sources |
| `baremetrics_get_metrics_summary` | read | Get metrics summary |
| `baremetrics_get_metric` | read | Get metric time series |
| `baremetrics_get_metric_customers` | read | Get customers for a metric |
| `baremetrics_get_metric_plans` | read | Get plan breakout for a metric |
| `baremetrics_get_cohorts` | read | Get cohort retention |
| `baremetrics_list_customers` | read | List customers |
| `baremetrics_get_customer` | read | Get customer |
| `baremetrics_list_customer_events` | read | List customer events |
| `baremetrics_list_subscriptions` | read | List subscriptions |
| `baremetrics_get_subscription` | read | Get subscription |
| `baremetrics_list_plans` | read | List plans |
| `baremetrics_get_plan` | read | Get plan |
| `baremetrics_list_charges` | read | List charges |
| `baremetrics_get_charge` | read | Get charge |
| `baremetrics_list_events` | read | List events |
| `baremetrics_list_annotations` | read | List annotations |
| `baremetrics_list_users` | read | List users |
| `baremetrics_create_annotation` | **write** | Create annotation |
| `baremetrics_usage_status` | meta | Usage status (free-tier meter) |
| `baremetrics_request_feature` | meta | Request a missing feature |
| `baremetrics_upgrade` | meta | Upgrade to Pro or Pro+ |
| `baremetrics_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `baremetrics_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `baremetrics_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `baremetrics_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
