# Logz.io MCP by usefulapi

Use your [Logz.io](https://logz.io) account from Claude, Cursor, or any MCP client. Search logs, read alerts, enable or disable alert rules, and read insights, audit events and dashboards. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://logz-io.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://logz-io.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http logz-io https://logz-io.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=logz-io&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flogz-io.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "logz-io": {
      "url": "https://logz-io.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Logz.io credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/logz-io/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Logz.io API token** (Settings → Tools → Manage tokens → API tokens) and your **account region** (shown in the address bar, such as app-eu.logz.io). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `logzio_whoami` | read | Show the connected account |
| `logzio_list_log_types` | read | List log types |
| `logzio_list_time_based_accounts` | read | List log accounts |
| `logzio_list_archive_settings` | read | List archive settings |
| `logzio_search_logs` | read | Search logs |
| `logzio_list_alerts` | read | List alerts |
| `logzio_get_alert` | read | Get an alert |
| `logzio_list_triggered_alerts` | read | List triggered alerts |
| `logzio_set_alert_enabled` | **write** | Enable or disable an alert |
| `logzio_list_insights` | read | List insights |
| `logzio_list_audit_events` | read | List audit events |
| `logzio_list_dashboard_folders` | read | List dashboard folders |
| `logzio_list_dashboards` | read | List dashboards |
| `logzio_get_dashboard` | read | Get a dashboard |
| `logzio_usage_status` | meta | Usage status (free-tier meter) |
| `logzio_request_feature` | meta | Request a missing feature |
| `logzio_upgrade` | meta | Upgrade to Pro or Pro+ |
| `logzio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `logzio_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `logzio_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `logzio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
