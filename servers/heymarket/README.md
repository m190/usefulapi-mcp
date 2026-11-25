# Heymarket MCP by usefulapi

Use your [Heymarket](https://www.heymarket.com) account from Claude, Cursor, or any MCP client. Read inboxes, contacts, conversations and messages, and send one SMS or MMS at a time. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://heymarket.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://heymarket.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http heymarket https://heymarket.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=heymarket&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fheymarket.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "heymarket": {
      "url": "https://heymarket.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Heymarket credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/heymarket/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **API Secret ID** and **API Secret Key** (Heymarket → Settings → Integrations → API → Generate Secret; the key is shown only once). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `heymarket_get_team` | read | Get team |
| `heymarket_list_inboxes` | read | List inboxes |
| `heymarket_find_team_members` | read | Find team members |
| `heymarket_search_contacts` | read | Search contacts |
| `heymarket_list_contacts` | read | List contacts |
| `heymarket_get_contact` | read | Get contact |
| `heymarket_list_conversations` | read | List conversations |
| `heymarket_get_conversation` | read | Get conversation |
| `heymarket_get_message_history` | read | Get message history |
| `heymarket_list_messages` | read | List messages |
| `heymarket_list_lists` | read | List contact lists |
| `heymarket_list_tags` | read | List tags |
| `heymarket_list_templates` | read | List message templates |
| `heymarket_send_message` | **write** | Send SMS or MMS |
| `heymarket_usage_status` | meta | Usage status (free-tier meter) |
| `heymarket_request_feature` | meta | Request a missing feature |
| `heymarket_upgrade` | meta | Upgrade to Pro or Pro+ |
| `heymarket_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `heymarket_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `heymarket_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `heymarket_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
