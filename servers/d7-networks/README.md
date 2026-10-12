# D7 Networks MCP by usefulapi

Use [D7 Networks](https://d7networks.com) from Claude, Cursor, or any MCP client — balance, SMS pricing, delivery status and number lookups, plus single SMS sends.
Hosted, no local install: connect with your own D7 Networks credentials.

**Live endpoint:** `https://d7-networks.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/d7-networks

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://d7-networks.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http d7-networks https://d7-networks.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=d7-networks&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fd7-networks.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "d7-networks": {
      "url": "https://d7-networks.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your D7 Networks credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/d7-networks/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `d7_get_balance` | read | Get credit balance |
| `d7_get_sms_pricing` | read | Get SMS pricing |
| `d7_get_message_status` | read | Get SMS delivery status |
| `d7_get_lookup_report` | read | Get number lookup report |
| `d7_lookup_number` | **write** | Look up a phone number (costs credits) |
| `d7_send_sms` | **write** | Send an SMS (spends credits) |
| `d7_usage_status` | meta | Usage status (free-tier meter) |
| `d7_request_feature` | meta | Request a missing feature |
| `d7_upgrade` | meta | Upgrade to Pro (unlimited) |
| `d7_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `d7_upgrade` (it returns a Stripe Checkout link). Cancel any time with `d7_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `d7_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by D7 Networks.
