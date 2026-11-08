# OpenPhone MCP by usefulapi

Send and read OpenPhone messages, calls, contacts and phone numbers. Hosted, no local install.

**Live endpoint:** `https://openphone.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://openphone.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http openphone https://openphone.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=openphone&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fopenphone.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "openphone": {
      "url": "https://openphone.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your OpenPhone credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/openphone/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **OpenPhone credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `openphone_list_phone_numbers` | read | List phone numbers |
| `openphone_list_users` | read | List users |
| `openphone_list_contacts` | read | List contacts |
| `openphone_get_contact` | read | Get a contact |
| `openphone_get_contact_custom_fields` | read | Get contact custom fields |
| `openphone_list_conversations` | read | List conversations |
| `openphone_list_messages` | read | List messages |
| `openphone_get_message` | read | Get a message |
| `openphone_send_message` | **write** | Send a text message |
| `openphone_list_calls` | read | List calls |
| `openphone_get_call` | read | Get a call |
| `openphone_get_call_summary` | read | Get a call summary |
| `openphone_get_call_transcript` | read | Get a call transcript |
| `openphone_get_call_recordings` | read | Get call recordings |
| `openphone_list_webhooks` | read | List webhooks |
| `openphone_create_contact` | **write** | Create a contact |
| `openphone_usage_status` | meta | Usage status (free-tier meter) |
| `openphone_request_feature` | meta | Request a missing feature |
| `openphone_upgrade` | meta | Upgrade to Pro or Pro+ |
| `openphone_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `openphone_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `openphone_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `openphone_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
