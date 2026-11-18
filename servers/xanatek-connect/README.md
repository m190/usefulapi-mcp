# Xanatek Connect MCP by usefulapi

Use your [Xanatek](https://xanatek.com/) insurance agency system from Claude, Cursor, or any MCP client. Read customers, policies and tasks, create or complete tasks, and add notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://xanatek-connect.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://xanatek-connect.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http xanatek-connect https://xanatek-connect.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=xanatek-connect&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fxanatek-connect.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "xanatek-connect": {
      "url": "https://xanatek-connect.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Xanatek Connect credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/xanatek-connect/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **license key, client ID and client secret**, which Xanatek issues during onboarding. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `xanatekconnect_list_customers` | read | List customers |
| `xanatekconnect_get_customer` | read | Get customer |
| `xanatekconnect_list_customer_policies` | read | List a customer's policies |
| `xanatekconnect_list_policies` | read | List policies |
| `xanatekconnect_get_policy` | read | Get policy |
| `xanatekconnect_list_policy_terms` | read | List policy terms |
| `xanatekconnect_list_contacts` | read | List contacts |
| `xanatekconnect_list_tasks` | read | List tasks |
| `xanatekconnect_list_notes` | read | List notes |
| `xanatekconnect_list_users` | read | List users |
| `xanatekconnect_list_carriers` | read | List carriers |
| `xanatekconnect_create_task` | **write** | Create task |
| `xanatekconnect_complete_task` | **write** | Complete task |
| `xanatekconnect_create_note` | **write** | Create note |
| `xanatekconnect_usage_status` | meta | Usage status (free-tier meter) |
| `xanatekconnect_request_feature` | meta | Request a missing feature |
| `xanatekconnect_upgrade` | meta | Upgrade to Pro or Pro+ |
| `xanatekconnect_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `xanatekconnect_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `xanatekconnect_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `xanatekconnect_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
