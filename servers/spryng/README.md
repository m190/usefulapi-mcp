# Spryng MCP by usefulapi

Use your [Spryng](https://www.spryng.nl) account from Claude, Cursor, or any MCP client. Check your SMS credits, look up sent messages, and send or cancel scheduled SMS. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://spryng.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://spryng.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http spryng https://spryng.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=spryng&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fspryng.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "spryng": {
      "url": "https://spryng.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Spryng credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/spryng/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Spryng REST API key** (Spryng portal → Your Profile → Security). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `spryng_get_balance` | read | Get SMS balance |
| `spryng_list_messages` | read | List messages |
| `spryng_get_message` | read | Get message |
| `spryng_list_subaccounts` | read | List subaccounts |
| `spryng_send_message` | **write** | Send SMS |
| `spryng_cancel_message` | **write** | Cancel scheduled message |
| `spryng_usage_status` | meta | Usage status (free-tier meter) |
| `spryng_request_feature` | meta | Request a missing feature |
| `spryng_upgrade` | meta | Upgrade to Pro or Pro+ |
| `spryng_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `spryng_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `spryng_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `spryng_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
