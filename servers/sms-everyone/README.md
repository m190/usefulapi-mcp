# SMS Everyone MCP by usefulapi

Connect your assistant at https://sms-everyone.usefulapi.io/mcp.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sms-everyone.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sms-everyone https://sms-everyone.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sms-everyone&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsms-everyone.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sms-everyone": {
      "url": "https://sms-everyone.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SMS Everyone credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sms-everyone/

<!-- connect:end (generated above, edit below) -->

Enter the API username and password SMS Everyone issued for your account. Use your registered originator when sending messages. If you need API credentials, request them from SMS Everyone through its normal account signup or support process.

Writes require explicit confirmation. Sending or scheduling messages uses your SMS Everyone credits; long or Unicode messages can cost multiple credits. This connector limits each send to 25 explicit recipients.

Delivery and reply polling have a shared cooldown of at least one minute per account and endpoint across hosted connections. The vendor recommends polling every five minutes. Reply reads always use a date window, preserving unread status.

A send acknowledgement means the vendor accepted the request; delivery receipts report delivery separately. If a write outcome is uncertain, check the SMS Everyone dashboard before trying again.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `smseveryone_get_account` | read | Get account settings and credits |
| `smseveryone_get_campaign_status` | read | Get campaign status |
| `smseveryone_get_delivery_status` | read | Get delivery status |
| `smseveryone_list_replies` | read | List SMS replies |
| `smseveryone_list_optouts` | read | List opted-out numbers |
| `smseveryone_list_contact_lists` | read | List contact lists |
| `smseveryone_get_contact_list` | read | Get the numbers in a contact list |
| `smseveryone_send_sms` | **write** | Send SMS |
| `smseveryone_cancel_campaign` | **write** | Cancel a scheduled campaign |
| `smseveryone_pause_campaign` | **write** | Pause a campaign |
| `smseveryone_add_optouts` | **write** | Opt numbers out |
| `smseveryone_usage_status` | meta | Usage status (free-tier meter) |
| `smseveryone_request_feature` | meta | Request a missing feature |
| `smseveryone_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `smseveryone_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per SMS Everyone account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `smseveryone_upgrade` (it returns a Stripe Checkout link). Cancel any time with `smseveryone_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `smseveryone_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT. An independent integration by usefulapi; not affiliated with SMS Everyone.
