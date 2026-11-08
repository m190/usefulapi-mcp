# Re:amaze MCP by usefulapi

Manage Re:amaze conversations, messages, contacts and help articles. Hosted, no local install.

**Live endpoint:** `https://re-amaze.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://re-amaze.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http re-amaze https://re-amaze.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=re-amaze&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fre-amaze.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "re-amaze": {
      "url": "https://re-amaze.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Re:amaze credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/re-amaze/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Re:amaze credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `reamaze_list_conversations` | read | List conversations |
| `reamaze_get_conversation` | read | Get conversation |
| `reamaze_list_messages` | read | List messages |
| `reamaze_list_contacts` | read | List contacts |
| `reamaze_get_contact` | read | Get contact |
| `reamaze_list_articles` | read | List articles |
| `reamaze_get_article` | read | Get article |
| `reamaze_list_staff` | read | List staff |
| `reamaze_list_channels` | read | List channels |
| `reamaze_get_channel` | read | Get channel |
| `reamaze_report_volume` | read | Report: volume |
| `reamaze_report_response_time` | read | Report: response time |
| `reamaze_create_conversation` | **write** | Create conversation |
| `reamaze_reply_conversation` | **write** | Reply to conversation |
| `reamaze_update_conversation` | **write** | Update conversation |
| `reamaze_create_contact` | **write** | Create contact |
| `reamaze_update_contact` | **write** | Update contact |
| `re_amaze_usage_status` | meta | Usage status (free-tier meter) |
| `re_amaze_request_feature` | meta | Request a missing feature |
| `re_amaze_upgrade` | meta | Upgrade to Pro or Pro+ |
| `re_amaze_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `re_amaze_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `re_amaze_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `re_amaze_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
