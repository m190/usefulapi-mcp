# BulkSMS MCP by usefulapi

Use [BulkSMS](https://www.bulksms.com) from Claude, Cursor, or any MCP client — sent messages, replies, profile, blocked numbers and webhooks, plus capped SMS sends.
Hosted, no local install: connect with your own BulkSMS credentials.

**Live endpoint:** `https://bulksms.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/bulksms

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bulksms.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bulksms https://bulksms.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bulksms&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbulksms.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bulksms": {
      "url": "https://bulksms.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your BulkSMS credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bulksms/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bulksms_get_profile` | read | Get account profile and credits |
| `bulksms_list_messages` | read | List messages |
| `bulksms_get_message` | read | Get message |
| `bulksms_list_replies` | read | List replies to a sent message |
| `bulksms_list_blocked_numbers` | read | List blocked numbers |
| `bulksms_list_webhooks` | read | List webhooks |
| `bulksms_send_message` | **write** | Send SMS |
| `bulksms_block_number` | **write** | Block a phone number |
| `bulksms_usage_status` | meta | Usage status (free-tier meter) |
| `bulksms_request_feature` | meta | Request a missing feature |
| `bulksms_upgrade` | meta | Upgrade to Pro or Pro+ |
| `bulksms_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `bulksms_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `bulksms_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `bulksms_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by BulkSMS.
