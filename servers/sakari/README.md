# Sakari MCP by usefulapi

Use [Sakari](https://sakari.io) from Claude, Cursor, or any MCP client — look up contacts, conversations, messages, templates, campaigns and calls, and create contacts and templates, close conversations and send texts. Sending a text costs your Sakari balance, so clients should confirm it first.
Hosted, no local install: connect with your own Sakari credentials.

**Live endpoint:** `https://sakari.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/sakari

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sakari.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sakari https://sakari.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sakari&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsakari.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sakari": {
      "url": "https://sakari.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Sakari credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sakari/

<!-- connect:end (generated above, edit below) -->

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Sakari account id, client id and client secret.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sakari_get_account` | read | Get account |
| `sakari_get_balance` | read | Get account balance |
| `sakari_list_contacts` | read | List contacts |
| `sakari_get_contact` | read | Get contact |
| `sakari_create_contact` | **write** | Create contact |
| `sakari_update_contact` | **write** | Update contact |
| `sakari_list_messages` | read | List messages |
| `sakari_get_message` | read | Get message |
| `sakari_send_message` | **write** | Send text message |
| `sakari_list_conversations` | read | List conversations |
| `sakari_get_conversation` | read | Get conversation |
| `sakari_close_conversation` | **write** | Close conversation |
| `sakari_list_templates` | read | List templates |
| `sakari_get_template` | read | Get template |
| `sakari_create_template` | **write** | Create template |
| `sakari_list_campaigns` | read | List campaigns |
| `sakari_get_campaign` | read | Get campaign |
| `sakari_list_calls` | read | List calls |
| `sakari_get_call` | read | Get call |
| `sakari_list_links` | read | List tracked links |
| `sakari_list_forms` | read | List lead forms |
| `sakari_list_webhooks` | read | List webhooks |
| `sakari_list_autoresponders` | read | List autoresponders |
| `sakari_usage_status` | meta | Usage status (free-tier meter) |
| `sakari_request_feature` | meta | Request a missing feature |
| `sakari_upgrade` | meta | Upgrade to Pro or Pro+ |
| `sakari_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per account) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `sakari_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `sakari_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `sakari_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
