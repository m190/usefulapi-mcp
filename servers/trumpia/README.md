# Trumpia MCP by usefulapi

Use [Trumpia](https://www.trumpia.com) from Claude, Cursor, or any MCP client — read lists, subscriptions, keywords, custom fields and message reports, check your credit balance, and (labelled writes) create lists, add or update subscriptions, send messages and SMS, or cancel a scheduled message.
Hosted, no local install: connect with your Trumpia username and API key.

**Live endpoint:** `https://trumpia.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/trumpia

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://trumpia.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http trumpia https://trumpia.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=trumpia&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftrumpia.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "trumpia": {
      "url": "https://trumpia.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Trumpia credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/trumpia/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `trumpia_get_credit_balance` | read | Get credit balance |
| `trumpia_get_request_report` | read | Get request status report |
| `trumpia_list_lists` | read | List distribution lists |
| `trumpia_get_list` | read | Get distribution list |
| `trumpia_create_list` | **write** | Create distribution list |
| `trumpia_update_list` | **write** | Update distribution list |
| `trumpia_list_subscriptions` | read | List subscription ids |
| `trumpia_get_subscription` | read | Get subscription |
| `trumpia_search_subscriptions` | read | Search subscriptions |
| `trumpia_add_subscriptions` | **write** | Add subscriptions |
| `trumpia_update_subscription` | **write** | Update subscription |
| `trumpia_list_custom_fields` | read | List custom data fields |
| `trumpia_get_custom_field` | read | Get custom data field |
| `trumpia_list_keywords` | read | List keywords |
| `trumpia_get_keyword` | read | Get keyword |
| `trumpia_list_org_names` | read | List organization names |
| `trumpia_list_email_senders` | read | List email sender addresses |
| `trumpia_get_message` | read | Get message statistics |
| `trumpia_list_scheduled_messages` | read | List scheduled messages |
| `trumpia_send_message` | **write** | Send message |
| `trumpia_send_sms` | **write** | Send direct SMS |
| `trumpia_cancel_scheduled_message` | **write** | Cancel scheduled message |
| `trumpia_usage_status` | meta | Usage status (free-tier meter) |
| `trumpia_request_feature` | meta | Request a missing feature |
| `trumpia_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `trumpia_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API key) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `trumpia_upgrade` (it returns a Stripe Checkout link). Cancel any time with `trumpia_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `trumpia_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Trumpia.
