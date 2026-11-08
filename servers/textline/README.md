# Textline MCP by usefulapi

Use [Textline](https://www.textline.com) from Claude, Cursor, or any MCP client — read Textline conversations, contacts and reports; send a text, add notes, resolve or transfer.
Hosted, no local install: connect with your own Textline credentials.

**Live endpoint:** `https://textline.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/textline

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://textline.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http textline https://textline.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=textline&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftextline.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "textline": {
      "url": "https://textline.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Textline credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/textline/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Textline API access token**.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `textline_list_conversations` | read | List conversations |
| `textline_get_conversation` | read | Get conversation messages |
| `textline_get_conversation_by_phone` | read | Get conversation by phone number |
| `textline_list_customers` | read | Search contacts |
| `textline_get_customer` | read | Get contact |
| `textline_get_customer_by_phone` | read | Get contact by phone number |
| `textline_list_custom_fields` | read | List contact custom fields |
| `textline_list_saved_searches` | read | List saved searches |
| `textline_get_organization` | read | Get organization |
| `textline_list_departments` | read | List departments |
| `textline_list_agents` | read | List agents |
| `textline_get_agent` | read | Get agent |
| `textline_list_dispositions` | read | List dispositions |
| `textline_list_surveys` | read | List surveys |
| `textline_list_survey_responses` | read | List survey responses |
| `textline_report_conversations` | read | Report conversations by date |
| `textline_report_posts` | read | Report posts of a conversation |
| `textline_send_message` | **write** | Send SMS message |
| `textline_add_whisper` | **write** | Add internal note (whisper) |
| `textline_resolve_conversation` | **write** | Resolve conversation |
| `textline_transfer_conversation` | **write** | Transfer conversation |
| `textline_create_customer` | **write** | Create contact |
| `textline_update_customer` | **write** | Update contact |
| `textline_usage_status` | meta | Usage status (free-tier meter) |
| `textline_request_feature` | meta | Request a missing feature |
| `textline_upgrade` | meta | Upgrade to Pro or Pro+ |
| `textline_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `textline_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `textline_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `textline_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Textline.
