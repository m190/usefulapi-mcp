# Builder Prime MCP by usefulapi

Hosted endpoint: https://builder-prime.usefulapi.io/mcp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://builder-prime.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http builder-prime https://builder-prime.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=builder-prime&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbuilder-prime.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "builder-prime": {
      "url": "https://builder-prime.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Builder Prime credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/builder-prime/

<!-- connect:end (generated above, edit below) -->

Verification limitation: real-account authentication, reads and writes have not been tested. Published example-tenant probes return a generic JSON 400 for missing and synthetic keys. This release passed mock integration and hosted Worker tests; real-tenant verification remains outstanding.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `builderprime_list_projects` | read | List projects |
| `builderprime_get_project` | read | Get project |
| `builderprime_list_meetings` | read | List meetings |
| `builderprime_get_meeting` | read | Get meeting |
| `builderprime_list_employees` | read | List employees |
| `builderprime_get_employee` | read | Get employee |
| `builderprime_list_meeting_types` | read | List meeting types |
| `builderprime_get_meeting_type` | read | Get meeting type |
| `builderprime_list_meeting_results` | read | List meeting results |
| `builderprime_get_meeting_result` | read | Get meeting result |
| `builderprime_create_project` | **write** | Create project |
| `builderprime_update_project` | **write** | Update project |
| `builderprime_create_meeting` | **write** | Create meeting |
| `builderprime_update_meeting` | **write** | Update meeting |
| `builderprime_usage_status` | meta | Usage status (free-tier meter) |
| `builderprime_request_feature` | meta | Request a missing feature |
| `builderprime_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `builderprime_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per tenant and API key) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `builderprime_upgrade` (it returns a Stripe Checkout link). Cancel any time with `builderprime_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `builderprime_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
