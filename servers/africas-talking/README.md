# Africa's Talking MCP by usefulapi

Read Africa's Talking balance, incoming SMS, transactions; send SMS, airtime, data and voice calls.

**Live endpoint:** `https://africas-talking.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/africas-talking

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://africas-talking.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http africas-talking https://africas-talking.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=africas-talking&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fafricas-talking.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "africas-talking": {
      "url": "https://africas-talking.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Africa's Talking credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/africas-talking/

<!-- connect:end (generated above, edit below) -->

On first connect you'll enter your Africa's Talking app **username** and **API key** (both on the app dashboard under Settings → API Key; the sandbox app's username is "sandbox").

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `africastalking_get_balance` | read | Get account balance |
| `africastalking_fetch_messages` | read | Fetch received SMS |
| `africastalking_send_sms` | **write** | Send SMS |
| `africastalking_send_airtime` | **write** | Send airtime |
| `africastalking_find_airtime_transaction` | read | Find airtime transaction |
| `africastalking_send_mobile_data` | **write** | Send mobile data bundle |
| `africastalking_find_mobile_data_transaction` | read | Find mobile data transaction |
| `africastalking_get_mobile_data_wallet_balance` | read | Get mobile data wallet balance |
| `africastalking_make_voice_call` | **write** | Make voice call |
| `africastalking_get_voice_queue_status` | read | Get voice queue status |
| `africastalking_usage_status` | meta | Usage status (free-tier meter) |
| `africastalking_request_feature` | meta | Request a missing feature |
| `africastalking_upgrade` | meta | Upgrade to Pro or Pro+ |
| `africastalking_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `africastalking_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `africastalking_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `africastalking_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Africa's Talking.
