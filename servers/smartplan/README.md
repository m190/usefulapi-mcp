# Smartplan MCP by usefulapi

Remote MCP endpoint: https://smartplan.usefulapi.io/mcp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://smartplan.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http smartplan https://smartplan.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=smartplan&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsmartplan.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "smartplan": {
      "url": "https://smartplan.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Smartplan credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/smartplan/

<!-- connect:end (generated above, edit below) -->

Connect with your Smartplan credentials using the hosted authorization flow.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `smartplan_list_accounts` | read | Show connected account |
| `smartplan_get_account` | read | Get connected account |
| `smartplan_list_members` | read | List members |
| `smartplan_get_member` | read | Get member |
| `smartplan_list_locations` | read | List locations |
| `smartplan_get_location` | read | Get location |
| `smartplan_list_jobtypes` | read | List job roles |
| `smartplan_get_jobtype` | read | Get jobtype |
| `smartplan_list_shifts` | read | List upcoming shifts |
| `smartplan_get_shift` | read | Get shift |
| `smartplan_list_worklogs` | read | List recorded worklogs |
| `smartplan_get_worklog` | read | Get worklog |
| `smartplan_list_absences` | read | List absence dates |
| `smartplan_get_absence` | read | Get absence |
| `smartplan_usage_status` | meta | Usage status (free-tier meter) |
| `smartplan_request_feature` | meta | Request a missing feature |
| `smartplan_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `smartplan_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `smartplan_upgrade` (it returns a Stripe Checkout link). Cancel any time with `smartplan_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `smartplan_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

See the repository license.
