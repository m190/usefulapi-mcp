# TimeTap MCP by usefulapi

Hosted endpoint: https://timetap.usefulapi.io/mcp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://timetap.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http timetap https://timetap.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=timetap&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftimetap.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "timetap": {
      "url": "https://timetap.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TimeTap credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/timetap/

<!-- connect:end (generated above, edit below) -->

Connect your existing TimeTap account using the credentials described below.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `timetap_get_business` | read | Get connected business |
| `timetap_list_staff` | read | List scheduling staff |
| `timetap_list_locations` | read | List scheduling locations |
| `timetap_list_services` | read | List bookable services |
| `timetap_get_staff` | read | Get scheduling staff member |
| `timetap_get_location` | read | Get scheduling location |
| `timetap_get_service` | read | Get service |
| `timetap_get_appointment` | read | Get appointment |
| `timetap_list_appointments` | read | List appointment schedule |
| `timetap_usage_status` | meta | Usage status (free-tier meter) |
| `timetap_request_feature` | meta | Request a missing feature |
| `timetap_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `timetap_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per TimeTap business) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `timetap_upgrade` (it returns a Stripe Checkout link). Cancel any time with `timetap_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `timetap_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

Independent integration by usefulapi.
