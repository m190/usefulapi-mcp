# Kixie MCP by usefulapi

Use your [Kixie](https://www.kixie.com) account from Claude, Cursor, or any MCP client. Check agent availability, start calls, send SMS, and feed queues and powerlists. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://kixie.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://kixie.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http kixie https://kixie.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=kixie&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fkixie.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "kixie": {
      "url": "https://kixie.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Kixie credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/kixie/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Kixie API key** and your **Kixie Business ID** (Kixie → Manage → Account Settings → Edit All → Integrations; admin only). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `kixie_agent_status` | read | Get agent status |
| `kixie_list_webhooks` | read | List webhooks |
| `kixie_make_call` | **write** | Make a call |
| `kixie_send_sms` | **write** | Send an SMS |
| `kixie_send_team_sms` | **write** | Send a team SMS |
| `kixie_send_to_queue` | **write** | Send to queue |
| `kixie_remove_from_queue` | **write** | Remove from queue |
| `kixie_flush_queue` | **write** | Flush queue |
| `kixie_add_to_powerlist` | **write** | Add to powerlist |
| `kixie_remove_from_powerlist` | **write** | Remove from powerlist |
| `kixie_usage_status` | meta | Usage status (free-tier meter) |
| `kixie_request_feature` | meta | Request a missing feature |
| `kixie_upgrade` | meta | Upgrade to Pro or Pro+ |
| `kixie_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `kixie_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `kixie_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `kixie_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
