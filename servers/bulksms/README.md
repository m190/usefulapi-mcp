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
| `bulksms_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `bulksms_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `bulksms_upgrade` (it returns a Stripe Checkout link). Cancel any time with `bulksms_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `bulksms_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by BulkSMS.
