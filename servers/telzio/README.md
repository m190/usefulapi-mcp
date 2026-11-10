# Telzio MCP by usefulapi

Use your [Telzio](https://telzio.com) account from Claude, Cursor, or any MCP client. It reads the call log, live calls, queues, users and numbers, and it can hang up or transfer a live call and send a direct SMS. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://telzio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://telzio.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http telzio https://telzio.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=telzio&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftelzio.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "telzio": {
      "url": "https://telzio.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Telzio credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/telzio/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Telzio API key** and a **Telzio API secret**, created by the account owner in Telzio Dashboard under **Integrations**. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `telzio_list_call_log` | read | List call log |
| `telzio_get_call` | read | Get call details |
| `telzio_list_live_calls` | read | List live calls |
| `telzio_get_account_balance` | read | Get account balance |
| `telzio_list_users` | read | List users |
| `telzio_list_numbers` | read | List phone numbers |
| `telzio_list_user_groups` | read | List user groups |
| `telzio_list_call_flows` | read | List call flows |
| `telzio_list_queues` | read | List call queues |
| `telzio_get_queue` | read | Get call queue |
| `telzio_list_blacklist` | read | List blocked numbers |
| `telzio_hang_up_call` | **write** | Hang up a live call |
| `telzio_transfer_call` | **write** | Transfer a live call |
| `telzio_send_sms` | **write** | Send an SMS |
| `telzio_usage_status` | meta | Usage status (free-tier meter) |
| `telzio_request_feature` | meta | Request a missing feature |
| `telzio_upgrade` | meta | Upgrade to Pro or Pro+ |
| `telzio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `telzio_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `telzio_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `telzio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
