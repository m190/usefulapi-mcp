# Termii MCP by usefulapi

Use your [Termii](https://termii.com) account from Claude, Cursor, or any MCP client. Send SMS messages and read balance, DND status, sender IDs and message history. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://termii.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://termii.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http termii https://termii.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=termii&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftermii.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "termii": {
      "url": "https://termii.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Termii credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/termii/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Termii API key** (Settings → API token) and your **account host** (the Base URL on your Termii dashboard). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `termii_get_balance` | read | Get wallet balance |
| `termii_get_message_history` | read | Get message history |
| `termii_check_dnd_status` | read | Check Do-Not-Disturb status |
| `termii_list_sender_ids` | read | List Sender IDs |
| `termii_send_message` | **write** | Send SMS |
| `termii_usage_status` | meta | Usage status (free-tier meter) |
| `termii_request_feature` | meta | Request a missing feature |
| `termii_upgrade` | meta | Upgrade to Pro or Pro+ |
| `termii_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `termii_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `termii_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `termii_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
