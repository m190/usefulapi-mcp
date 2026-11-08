# smsmode MCP by usefulapi

Use [smsmode](https://www.smsmode.com) from Claude, Cursor, or any MCP client — balance, organisation, channels, consumption, number lookups, messages and campaigns, plus capped SMS sends and cancelling a scheduled message.
Hosted, no local install: connect with your own smsmode credentials.

**Live endpoint:** `https://smsmode.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/smsmode

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://smsmode.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http smsmode https://smsmode.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=smsmode&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsmsmode.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "smsmode": {
      "url": "https://smsmode.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your smsmode credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/smsmode/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `smsmode_get_balance` | read | Get the account balance |
| `smsmode_get_organisation` | read | Get an organisation |
| `smsmode_list_channels` | read | List channels |
| `smsmode_get_channel` | read | Get a channel |
| `smsmode_list_consumptions` | read | List consumption statistics |
| `smsmode_get_consumption` | read | Get a consumption with its breakdown |
| `smsmode_lookup_number` | read | Look up a phone number's network |
| `smsmode_list_messages` | read | List sent and received messages |
| `smsmode_get_message` | read | Get a message and its delivery status |
| `smsmode_list_campaigns` | read | List SMS campaigns |
| `smsmode_get_campaign` | read | Get an SMS campaign |
| `smsmode_send_sms` | **write** | Send an SMS to 1-10 recipients |
| `smsmode_cancel_scheduled_message` | **write** | Cancel a scheduled message |
| `smsmode_usage_status` | meta | Usage status (free-tier meter) |
| `smsmode_request_feature` | meta | Request a missing feature |
| `smsmode_upgrade` | meta | Upgrade to Pro or Pro+ |
| `smsmode_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per organisation) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per organisation) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `smsmode_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `smsmode_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `smsmode_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by smsmode.
