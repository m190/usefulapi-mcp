# Chatra MCP by usefulapi

Read and update Chatra visitors; send, edit and delete chat and pushed messages.

**Live endpoint:** `https://chatra.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/chatra

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://chatra.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http chatra https://chatra.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=chatra&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fchatra.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "chatra": {
      "url": "https://chatra.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Chatra credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/chatra/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Chatra **public** and **secret API keys** (Chatra → Settings → Preferences → API keys).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `chatra_get_visitor` | read | Get visitor |
| `chatra_update_visitor` | **write** | Update visitor |
| `chatra_get_message` | read | Get message |
| `chatra_send_message` | **write** | Send message as an agent |
| `chatra_edit_message` | **write** | Edit agent message |
| `chatra_delete_message` | **write** | Delete agent message |
| `chatra_get_pushed_message` | read | Get pushed message |
| `chatra_push_message` | **write** | Push message to a visitor |
| `chatra_edit_pushed_message` | **write** | Edit pushed message |
| `chatra_delete_pushed_message` | **write** | Delete pushed message |
| `chatra_usage_status` | meta | Usage status (free-tier meter) |
| `chatra_request_feature` | meta | Request a missing feature |
| `chatra_upgrade` | meta | Upgrade to Pro or Pro+ |
| `chatra_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `chatra_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `chatra_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `chatra_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Chatra.
