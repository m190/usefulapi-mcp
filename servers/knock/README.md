# Knock MCP by usefulapi

Use your [Knock](https://knock.app) account from Claude, Cursor, or any MCP client. It reads users, messages, delivery logs, workflow runs and tenants, and it can trigger or cancel workflows. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://knock.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://knock.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http knock https://knock.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=knock&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fknock.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "knock": {
      "url": "https://knock.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Knock credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/knock/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Knock secret API key** (`sk_...`, from Developers → API keys in the Knock dashboard). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `knock_list_users` | read | List users |
| `knock_get_user` | read | Get a user |
| `knock_list_user_messages` | read | List a user's messages |
| `knock_list_messages` | read | List messages |
| `knock_get_message` | read | Get a message |
| `knock_get_message_content` | read | Get message content |
| `knock_list_message_delivery_logs` | read | List delivery logs |
| `knock_list_workflow_recipient_runs` | read | List workflow recipient runs |
| `knock_get_workflow_recipient_run` | read | Get a workflow recipient run |
| `knock_list_tenants` | read | List tenants |
| `knock_get_tenant` | read | Get a tenant |
| `knock_trigger_workflow` | **write** | Trigger a workflow |
| `knock_cancel_workflow` | **write** | Cancel queued workflow runs |
| `knock_usage_status` | meta | Usage status (free-tier meter) |
| `knock_request_feature` | meta | Request a missing feature |
| `knock_upgrade` | meta | Upgrade to Pro or Pro+ |
| `knock_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `knock_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `knock_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `knock_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
