# Portkey MCP by usefulapi

Manage [Portkey](https://portkey.ai) AI-gateway admin and observability from Claude, Cursor, or any MCP
client — read analytics, configs, virtual keys, workspaces, users and audit logs, and log request
feedback. Hosted, no local install: connect with your Portkey API key.

**Live endpoint:** `https://portkey.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://portkey.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http portkey https://portkey.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=portkey&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fportkey.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "portkey": {
      "url": "https://portkey.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Portkey credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/portkey/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Portkey API key** (from the Portkey app → API Keys). It's
validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `portkey_get_analytics_graph` | read | Get analytics graph |
| `portkey_get_analytics_group` | read | Get analytics group |
| `portkey_list_configs` | read | List configs |
| `portkey_get_config` | read | Get config |
| `portkey_list_api_keys` | read | List API keys |
| `portkey_get_api_key` | read | Get API key |
| `portkey_list_virtual_keys` | read | List virtual keys |
| `portkey_get_virtual_key` | read | Get virtual key |
| `portkey_list_workspaces` | read | List workspaces |
| `portkey_get_workspace` | read | Get workspace |
| `portkey_list_workspace_members` | read | List workspace members |
| `portkey_list_users` | read | List users |
| `portkey_get_user` | read | Get user |
| `portkey_list_user_invites` | read | List user invites |
| `portkey_list_audit_logs` | read | List audit logs |
| `portkey_create_feedback` | **write** | Create feedback |
| `portkey_usage_status` | meta | Usage status (free-tier meter) |
| `portkey_request_feature` | meta | Request a missing feature |
| `portkey_upgrade` | meta | Upgrade to Pro or Pro+ |
| `portkey_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `portkey_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `portkey_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `portkey_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
