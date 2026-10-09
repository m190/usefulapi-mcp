# Checkly MCP by usefulapi

Query your Checkly synthetic monitoring from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Checkly API key.

**Live endpoint:** `https://checkly.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/checkly

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://checkly.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http checkly https://checkly.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=checkly&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcheckly.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "checkly": {
      "url": "https://checkly.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Checkly credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/checkly/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Checkly API key (and account ID). It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `checkly_get_account` | read | Get current account |
| `checkly_list_checks` | read | List checks |
| `checkly_get_check` | read | Get a check |
| `checkly_list_check_groups` | read | List check groups |
| `checkly_get_check_group` | read | Get a check group |
| `checkly_list_check_statuses` | read | List check statuses |
| `checkly_get_check_status` | read | Get check status |
| `checkly_list_check_results` | read | List check results |
| `checkly_get_check_result` | read | Get a check result |
| `checkly_list_check_alerts` | read | List check alerts |
| `checkly_get_check_alerts` | read | Get alerts for a check |
| `checkly_get_reporting` | read | Get reporting |
| `checkly_list_dashboards` | read | List dashboards |
| `checkly_list_alert_channels` | read | List alert channels |
| `checkly_list_maintenance_windows` | read | List maintenance windows |
| `checkly_list_locations` | read | List locations |
| `checkly_list_private_locations` | read | List private locations |
| `checkly_list_snippets` | read | List snippets |
| `checkly_list_variables` | read | List variables |
| `checkly_list_runtimes` | read | List runtimes |
| `checkly_create_variable` | **write** | Create environment variable |
| `checkly_create_maintenance_window` | **write** | Create maintenance window |
| `checkly_usage_status` | meta | Usage status (free-tier meter) |
| `checkly_upgrade` | meta | Upgrade to Pro (unlimited) |
| `checkly_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `checkly_upgrade` (it returns a Stripe Checkout link). Cancel any time with `checkly_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `checkly_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
