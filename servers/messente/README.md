# Messente MCP by usefulapi

Use [Messente](https://messente.com) from Claude, Cursor, or any MCP client — balance, prices, delivery status, statistics, number lookup and the blacklist, plus single SMS sends.
Hosted, no local install: connect with your own Messente credentials.

**Live endpoint:** `https://messente.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/messente

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://messente.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http messente https://messente.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=messente&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmessente.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "messente": {
      "url": "https://messente.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Messente credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/messente/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `messente_get_balance` | read | Get account balance |
| `messente_get_prices` | read | Get SMS prices for a country |
| `messente_get_delivery_status` | read | Get delivery status of a message |
| `messente_list_blacklist` | read | List blacklisted numbers |
| `messente_check_blacklist` | read | Check if a number is blacklisted |
| `messente_get_statistics` | read | Get message statistics |
| `messente_lookup_numbers` | **write** | Look up phone numbers (HLR) |
| `messente_add_to_blacklist` | **write** | Add a number to the blacklist |
| `messente_send_sms` | **write** | Send an SMS |
| `messente_usage_status` | meta | Usage status (free-tier meter) |
| `messente_request_feature` | meta | Request a missing feature |
| `messente_upgrade` | meta | Upgrade to Pro or Pro+ |
| `messente_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `messente_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `messente_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `messente_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Messente.
