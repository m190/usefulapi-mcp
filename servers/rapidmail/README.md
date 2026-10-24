# rapidmail MCP by usefulapi

Use [rapidmail](https://www.rapidmail.de) from Claude, Cursor, or any MCP client — recipient lists, recipients, mailings, statistics, the blacklist and transactional mail logs, plus single-recipient writes.
Hosted, no local install: connect with your own rapidmail credentials.

**Live endpoint:** `https://rapidmail.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/rapidmail

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://rapidmail.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http rapidmail https://rapidmail.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=rapidmail&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frapidmail.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "rapidmail": {
      "url": "https://rapidmail.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your rapidmail credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/rapidmail/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `rapidmail_list_recipientlists` | read | List recipient lists |
| `rapidmail_get_recipientlist` | read | Get recipient list |
| `rapidmail_get_recipientlist_activity_stats` | read | Get recipient list activity stats |
| `rapidmail_list_recipients` | read | List recipients |
| `rapidmail_get_recipient` | read | Get recipient |
| `rapidmail_create_recipient` | **write** | Add recipient |
| `rapidmail_update_recipient` | **write** | Update recipient |
| `rapidmail_unsubscribe_recipient` | **write** | Unsubscribe recipient |
| `rapidmail_list_mailings` | read | List mailings |
| `rapidmail_get_mailing` | read | Get mailing |
| `rapidmail_get_mailing_stats` | read | Get mailing statistics |
| `rapidmail_list_mailing_activity` | read | List mailing recipient activity |
| `rapidmail_get_mailing_recipient_activity` | read | Get one recipient's activity in a mailing |
| `rapidmail_list_mailing_folders` | read | List mailing folders |
| `rapidmail_list_blacklist` | read | List blacklist entries |
| `rapidmail_list_transactional_emails` | read | List transactional e-mails |
| `rapidmail_usage_status` | meta | Usage status (free-tier meter) |
| `rapidmail_request_feature` | meta | Request a missing feature |
| `rapidmail_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `rapidmail_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `rapidmail_upgrade` (it returns a Stripe Checkout link). Cancel any time with `rapidmail_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `rapidmail_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by rapidmail.
