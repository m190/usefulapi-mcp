# Burst SMS MCP by usefulapi

Use your [Burst SMS](https://kudosity.com) account from Claude, Cursor, or any MCP client. Send SMS and MMS messages, read delivery status, and manage webhooks that report replies. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://burst-sms.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://burst-sms.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http burst-sms https://burst-sms.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=burst-sms&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fburst-sms.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "burst-sms": {
      "url": "https://burst-sms.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Burst SMS credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/burst-sms/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Burst SMS API key** (Kudosity platform → Settings → API Settings). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `burstsms_list_sms` | read | List SMS messages |
| `burstsms_get_sms` | read | Get an SMS message |
| `burstsms_send_sms` | **write** | Send an SMS |
| `burstsms_send_mms` | **write** | Send an MMS |
| `burstsms_get_mms` | read | Get an MMS message |
| `burstsms_list_webhooks` | read | List webhooks |
| `burstsms_get_webhook` | read | Get a webhook |
| `burstsms_create_webhook` | **write** | Create a webhook |
| `burstsms_delete_webhook` | **write** | Delete a webhook |
| `burstsms_usage_status` | meta | Usage status (free-tier meter) |
| `burstsms_request_feature` | meta | Request a missing feature |
| `burstsms_upgrade` | meta | Upgrade to Pro or Pro+ |
| `burstsms_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `burstsms_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `burstsms_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `burstsms_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
