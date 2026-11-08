# Vital MCP by usefulapi

Read wearables and lab health data — sleep, activity, workouts, timeseries, and lab results — from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Vital API key.

**Live endpoint:** `https://vital.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/vital

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://vital.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http vital https://vital.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=vital&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fvital.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "vital": {
      "url": "https://vital.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Vital credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/vital/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Vital API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `vital_list_users` | read | List users |
| `vital_get_user` | read | Get user |
| `vital_resolve_user` | read | Resolve user by client_user_id |
| `vital_get_user_connected_providers` | read | Get user's connected providers |
| `vital_get_user_latest_info` | read | Get user's latest info |
| `vital_list_providers` | read | List supported providers |
| `vital_get_sleep` | read | Sleep |
| `vital_get_activity` | read | Activity |
| `vital_get_workouts` | read | Workouts |
| `vital_get_body` | read | Body |
| `vital_get_meal` | read | Meal |
| `vital_get_menstrual_cycle` | read | Menstrual cycle |
| `vital_get_profile` | read | Profile |
| `vital_get_timeseries` | read | Get timeseries data |
| `vital_list_lab_tests` | read | List lab tests |
| `vital_get_lab_test` | read | Get lab test |
| `vital_list_orders` | read | List orders |
| `vital_get_order` | read | Get order |
| `vital_get_order_results` | read | Get order results |
| `vital_create_user` | **write** | Create user |
| `vital_create_link_token` | **write** | Create link token |
| `vital_usage_status` | meta | Usage status (free-tier meter) |
| `vital_request_feature` | meta | Request a missing feature |
| `vital_upgrade` | meta | Upgrade to Pro or Pro+ |
| `vital_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `vital_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `vital_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `vital_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
