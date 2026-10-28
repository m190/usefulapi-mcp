# HireHop MCP by usefulapi

Connect at `https://hirehop.usefulapi.io/mcp`.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://hirehop.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http hirehop https://hirehop.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=hirehop&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhirehop.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "hirehop": {
      "url": "https://hirehop.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your HireHop credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/hirehop/

<!-- connect:end (generated above, edit below) -->

Connect your HireHop credentials to access your account through usefulapi.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `hirehop_get_current_user` | read | Get connected user |
| `hirehop_list_depots` | read | List depots |
| `hirehop_search_jobs` | read | Search jobs and projects |
| `hirehop_get_job` | read | Get job |
| `hirehop_get_project` | read | Get project |
| `hirehop_list_project_jobs` | read | List project jobs |
| `hirehop_list_contacts` | read | List contacts |
| `hirehop_list_products` | read | List rental or tracked sales products |
| `hirehop_list_notes` | read | Read record notes |
| `hirehop_usage_status` | meta | Usage status (free-tier meter) |
| `hirehop_request_feature` | meta | Request a missing feature |
| `hirehop_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `hirehop_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |

Pro covers this server only. Subscribe with `hirehop_upgrade` (it returns a Stripe Checkout link). Cancel any time with `hirehop_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `hirehop_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
