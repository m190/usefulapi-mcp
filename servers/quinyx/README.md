# Quinyx MCP by usefulapi

Remote MCP endpoint: https://quinyx.usefulapi.io/mcp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://quinyx.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http quinyx https://quinyx.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=quinyx&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fquinyx.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "quinyx": {
      "url": "https://quinyx.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Quinyx credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/quinyx/

<!-- connect:end (generated above, edit below) -->

Connect with your Quinyx credentials using the hosted authorization flow.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `quinyx_list_groups` | read | List organization groups (including units/sections) |
| `quinyx_list_roles` | read | List organization roles |
| `quinyx_list_employees` | read | List scheduling employee details |
| `quinyx_list_agreements` | read | List agreement scheduling metadata (v3preview1) |
| `quinyx_list_role_assignments` | read | List employee role assignments |
| `quinyx_list_shifts` | read | List scheduled shifts |
| `quinyx_get_group` | read | Get group |
| `quinyx_get_role` | read | Get role |
| `quinyx_get_employee` | read | Get employee |
| `quinyx_get_agreement` | read | Get agreement |
| `quinyx_usage_status` | meta | Usage status (free-tier meter) |
| `quinyx_request_feature` | meta | Request a missing feature |
| `quinyx_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `quinyx_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per regional client ID) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `quinyx_upgrade` (it returns a Stripe Checkout link). Cancel any time with `quinyx_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `quinyx_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

See the repository license.
