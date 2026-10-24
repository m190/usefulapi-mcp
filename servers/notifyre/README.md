# Notifyre MCP by usefulapi

Use [Notifyre](https://notifyre.com) from Claude, Cursor, or any MCP client — sent SMS and their recipients, replies, SMS and fax numbers and prices, sent and received faxes, cover pages, contacts, groups and 10DLC brands and campaigns, plus sending an SMS to up to 10 numbers (costs money, never retried) and creating contacts and groups.
Hosted, no local install: connect with your own Notifyre credentials.

**Live endpoint:** `https://notifyre.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/notifyre

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://notifyre.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http notifyre https://notifyre.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=notifyre&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fnotifyre.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "notifyre": {
      "url": "https://notifyre.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Notifyre credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/notifyre/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `notifyre_list_sent_sms` | read | List sent SMS |
| `notifyre_get_sent_sms` | read | Get a sent SMS |
| `notifyre_get_sms_recipient` | read | Get an SMS recipient message |
| `notifyre_list_sms_replies` | read | List SMS replies |
| `notifyre_get_sms_reply` | read | Get an SMS reply |
| `notifyre_list_sms_numbers` | read | List SMS numbers and sender IDs |
| `notifyre_list_sms_prices` | read | List SMS prices |
| `notifyre_list_sent_faxes` | read | List sent faxes |
| `notifyre_list_received_faxes` | read | List received faxes |
| `notifyre_list_fax_numbers` | read | List fax numbers |
| `notifyre_list_fax_prices` | read | List fax prices |
| `notifyre_list_fax_cover_pages` | read | List fax cover pages |
| `notifyre_list_contacts` | read | List address book contacts |
| `notifyre_get_contact` | read | Get an address book contact |
| `notifyre_list_groups` | read | List address book groups |
| `notifyre_list_brands` | read | List 10DLC brands |
| `notifyre_list_campaigns` | read | List 10DLC campaigns |
| `notifyre_send_sms` | **write** | Send SMS |
| `notifyre_create_contact` | **write** | Create a contact |
| `notifyre_create_group` | **write** | Create a contact group |
| `notifyre_add_contacts_to_groups` | **write** | Add contacts to groups |
| `notifyre_usage_status` | meta | Usage status (free-tier meter) |
| `notifyre_request_feature` | meta | Request a missing feature |
| `notifyre_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `notifyre_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API token) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `notifyre_upgrade` (it returns a Stripe Checkout link). Cancel any time with `notifyre_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `notifyre_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Notifyre.
