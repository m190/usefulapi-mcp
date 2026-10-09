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
| `vital_resolve_user` | read | Resolve user |
| `vital_get_user_connected_providers` | read | Get user connected providers |
| `vital_get_user_latest_info` | read | Get user latest info |
| `vital_list_providers` | read | List providers |
| `vital_get_sleep` | read | Get sleep |
| `vital_get_activity` | read | Get activity |
| `vital_get_workouts` | read | Get workouts |
| `vital_get_body` | read | Get body |
| `vital_get_meal` | read | Get meal |
| `vital_get_menstrual_cycle` | read | Get menstrual cycle |
| `vital_get_profile` | read | Get profile |
| `vital_get_timeseries` | read | Get timeseries |
| `vital_list_lab_tests` | read | List lab tests |
| `vital_get_lab_test` | read | Get lab test |
| `vital_list_orders` | read | List orders |
| `vital_get_order` | read | Get order |
| `vital_get_order_results` | read | Get order results |
| `vital_create_user` | **write** | Create user |
| `vital_create_link_token` | **write** | Create link token |
| `vital_usage_status` | meta | Usage status (free-tier meter) |
| `vital_request_feature` | meta | Request a missing feature |
| `vital_upgrade` | meta | Upgrade to Pro (unlimited) |
| `vital_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `vital_upgrade` (it returns a Stripe Checkout link). Cancel any time with `vital_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `vital_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
