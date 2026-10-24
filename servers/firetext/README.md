# FireText MCP by usefulapi

Use [FireText](https://www.firetext.co.uk) from Claude, Cursor, or any MCP client — credit, sent and received messages, delivery and click reports, contacts, and single SMS sends.
Hosted, no local install: connect with your own FireText credentials.

**Live endpoint:** `https://firetext.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/firetext

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://firetext.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http firetext https://firetext.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=firetext&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffiretext.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "firetext": {
      "url": "https://firetext.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your FireText credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/firetext/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `firetext_get_credit` | read | Get SMS credit |
| `firetext_list_received_messages` | read | List received messages |
| `firetext_list_sent_messages` | read | List sent messages |
| `firetext_get_sent_summary` | read | Get sent summary |
| `firetext_list_scheduled_messages` | read | List scheduled messages |
| `firetext_get_delivery_report` | read | Get delivery report |
| `firetext_get_click_report` | read | Get click report |
| `firetext_get_contact` | read | Get contact |
| `firetext_list_unsubscribed` | read | List unsubscribed contacts |
| `firetext_list_keywords` | read | List keywords |
| `firetext_send_sms` | **write** | Send SMS |
| `firetext_subscribe_contact` | **write** | Add or update contact |
| `firetext_unsubscribe_contact` | **write** | Unsubscribe contact |
| `firetext_usage_status` | meta | Usage status (free-tier meter) |
| `firetext_request_feature` | meta | Request a missing feature |
| `firetext_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `firetext_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `firetext_upgrade` (it returns a Stripe Checkout link). Cancel any time with `firetext_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `firetext_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by FireText.
