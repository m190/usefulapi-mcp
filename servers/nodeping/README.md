# NodePing MCP by usefulapi

Use [NodePing](https://nodeping.com) from Claude, Cursor, or any MCP client — checks, uptime, results, events, contacts and schedules, plus muting checks and maintenance windows.
Hosted, no local install: connect with your own NodePing credentials.

**Live endpoint:** `https://nodeping.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/nodeping

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://nodeping.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http nodeping https://nodeping.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=nodeping&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fnodeping.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "nodeping": {
      "url": "https://nodeping.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your NodePing credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/nodeping/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `nodeping_get_account` | read | Get account |
| `nodeping_list_checks` | read | List checks |
| `nodeping_get_check` | read | Get check |
| `nodeping_get_check_results` | read | Get check results |
| `nodeping_get_check_uptime` | read | Get check uptime |
| `nodeping_get_check_events` | read | Get check events |
| `nodeping_get_current_events` | read | Get current events |
| `nodeping_get_check_summary` | read | Get check hourly summary |
| `nodeping_list_notifications` | read | List notifications sent |
| `nodeping_list_contacts` | read | List contacts |
| `nodeping_get_contact` | read | Get contact |
| `nodeping_list_contact_groups` | read | List contact groups |
| `nodeping_list_schedules` | read | List notification schedules |
| `nodeping_get_schedule` | read | Get notification schedule |
| `nodeping_list_notification_profiles` | read | List notification profiles |
| `nodeping_list_maintenance` | read | List maintenance windows |
| `nodeping_get_maintenance` | read | Get maintenance window |
| `nodeping_get_probe_info` | read | Get probe locations |
| `nodeping_update_check` | **write** | Update check settings |
| `nodeping_mute_check` | **write** | Mute or unmute check |
| `nodeping_disable_check` | **write** | Disable check |
| `nodeping_create_adhoc_maintenance` | **write** | Create ad-hoc maintenance |
| `nodeping_delete_maintenance` | **write** | Delete maintenance entry |
| `nodeping_create_contact_group` | **write** | Create contact group |
| `nodeping_update_contact_group` | **write** | Update contact group |
| `nodeping_delete_contact_group` | **write** | Delete contact group |
| `nodeping_put_schedule` | **write** | Create or update notification schedule |
| `nodeping_delete_schedule` | **write** | Delete notification schedule |
| `nodeping_usage_status` | meta | Usage status (free-tier meter) |
| `nodeping_request_feature` | meta | Request a missing feature |
| `nodeping_upgrade` | meta | Upgrade to Pro (unlimited) |
| `nodeping_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `nodeping_upgrade` (it returns a Stripe Checkout link). Cancel any time with `nodeping_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `nodeping_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by NodePing.
