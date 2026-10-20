# Buttondown MCP by usefulapi

Use [Buttondown](https://buttondown.com) from Claude, Cursor, or any MCP client — subscribers, emails, analytics, tags, automations, surveys and events, plus subscribers and email drafts.
Hosted, no local install: connect with your own Buttondown credentials.

**Live endpoint:** `https://buttondown.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/buttondown

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://buttondown.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http buttondown https://buttondown.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=buttondown&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbuttondown.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "buttondown": {
      "url": "https://buttondown.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Buttondown credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/buttondown/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `buttondown_get_account` | read | Get account |
| `buttondown_list_newsletters` | read | List newsletters |
| `buttondown_get_newsletter` | read | Get newsletter |
| `buttondown_list_subscribers` | read | List subscribers |
| `buttondown_get_subscriber` | read | Get subscriber |
| `buttondown_add_subscriber` | **write** | Add a subscriber |
| `buttondown_update_subscriber` | **write** | Update a subscriber's tags, notes or metadata |
| `buttondown_list_emails` | read | List emails |
| `buttondown_get_email` | read | Get email |
| `buttondown_get_email_analytics` | read | Get email analytics |
| `buttondown_create_email_draft` | **write** | Create an email draft |
| `buttondown_update_email_draft` | **write** | Edit an email draft |
| `buttondown_list_tags` | read | List tags |
| `buttondown_get_tag_analytics` | read | Get tag analytics |
| `buttondown_create_tag` | **write** | Create a tag |
| `buttondown_list_automations` | read | List automations |
| `buttondown_get_automation` | read | Get automation |
| `buttondown_get_automation_analytics` | read | Get automation analytics |
| `buttondown_list_surveys` | read | List surveys |
| `buttondown_list_survey_responses` | read | List survey responses |
| `buttondown_list_segments` | read | List segments |
| `buttondown_list_forms` | read | List forms |
| `buttondown_list_snippets` | read | List snippets |
| `buttondown_list_webhooks` | read | List webhooks |
| `buttondown_list_events` | read | List email events |
| `buttondown_usage_status` | meta | Usage status (free-tier meter) |
| `buttondown_request_feature` | meta | Request a missing feature |
| `buttondown_upgrade` | meta | Upgrade to Pro (unlimited) |
| `buttondown_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `buttondown_upgrade` (it returns a Stripe Checkout link). Cancel any time with `buttondown_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `buttondown_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Buttondown.
