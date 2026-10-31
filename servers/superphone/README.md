# SuperPhone MCP by usefulapi

Connect your SuperPhone account.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://superphone.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http superphone https://superphone.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=superphone&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsuperphone.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "superphone": {
      "url": "https://superphone.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SuperPhone credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/superphone/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `superphone_get_account` | read | Get account |
| `superphone_list_contacts` | read | List contacts |
| `superphone_get_contact` | read | Get contact |
| `superphone_find_contact` | read | Find contact by mobile or email |
| `superphone_list_conversations` | read | List conversations |
| `superphone_get_conversation` | read | Get conversation messages |
| `superphone_get_message` | read | Get message |
| `superphone_list_forms` | read | List sign-up forms |
| `superphone_get_form` | read | Get sign-up form |
| `superphone_list_webhooks` | read | List webhooks |
| `superphone_search_numbers` | read | Search available phone numbers |
| `superphone_create_contact` | **write** | Create contact |
| `superphone_update_contact` | **write** | Update contact |
| `superphone_add_contact_tags` | **write** | Add tags to contact |
| `superphone_remove_contact_tags` | **write** | Remove tags from contact |
| `superphone_add_contribution` | **write** | Record a purchase (custom contribution) |
| `superphone_send_message` | **write** | Send a text message |
| `superphone_usage_status` | meta | Usage status (free-tier meter) |
| `superphone_request_feature` | meta | Request a missing feature |
| `superphone_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `superphone_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per verified SuperPhone user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `superphone_upgrade` (it returns a Stripe Checkout link). Cancel any time with `superphone_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `superphone_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
