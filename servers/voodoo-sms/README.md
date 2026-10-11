# Voodoo SMS MCP by usefulapi

Use [Voodoo SMS](https://www.voodoosms.com) from Claude, Cursor, or any MCP client — credits, delivery reports, inbox, contact lists and the blacklist, plus single SMS sends.
Hosted, no local install: connect with your own Voodoo SMS credentials.

**Live endpoint:** `https://voodoo-sms.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/voodoo-sms

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://voodoo-sms.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http voodoo-sms https://voodoo-sms.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=voodoo-sms&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fvoodoo-sms.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "voodoo-sms": {
      "url": "https://voodoo-sms.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Voodoo SMS credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/voodoo-sms/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `voodoosms_get_credits` | read | Get credit balance |
| `voodoosms_list_delivery_reports` | read | List delivery reports |
| `voodoosms_list_scheduled_messages` | read | List scheduled messages |
| `voodoosms_list_inbox` | read | List received SMS |
| `voodoosms_list_numbers` | read | List virtual mobile numbers |
| `voodoosms_list_contact_lists` | read | List contact lists |
| `voodoosms_get_contact_list` | read | Get contacts in a list |
| `voodoosms_list_blacklist` | read | List blacklisted numbers |
| `voodoosms_send_sms` | **write** | Send an SMS to one recipient |
| `voodoosms_cancel_scheduled_message` | **write** | Cancel a scheduled SMS |
| `voodoosms_add_to_blacklist` | **write** | Add a number to the blacklist |
| `voodoosms_create_contact_list` | **write** | Create a contact list |
| `voodoosms_update_contact_list` | **write** | Rename a contact list or add contacts |
| `voodoosms_usage_status` | meta | Usage status (free-tier meter) |
| `voodoosms_request_feature` | meta | Request a missing feature |
| `voodoosms_upgrade` | meta | Upgrade to Pro (unlimited) |
| `voodoosms_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `voodoosms_upgrade` (it returns a Stripe Checkout link). Cancel any time with `voodoosms_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `voodoosms_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Voodoo SMS.
