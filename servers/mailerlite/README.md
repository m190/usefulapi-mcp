# MailerLite MCP by usefulapi

Read your MailerLite subscribers, groups and campaigns from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your MailerLite API key.

**Live endpoint:** `https://mailerlite.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/mailerlite

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://mailerlite.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http mailerlite https://mailerlite.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=mailerlite&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmailerlite.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "mailerlite": {
      "url": "https://mailerlite.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your MailerLite credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/mailerlite/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your MailerLite API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `mailerlite_list_subscribers` | read | List subscribers |
| `mailerlite_get_subscriber` | read | Get subscriber |
| `mailerlite_list_groups` | read | List groups |
| `mailerlite_list_group_subscribers` | read | List group subscribers |
| `mailerlite_list_campaigns` | read | List campaigns |
| `mailerlite_get_campaign` | read | Get campaign |
| `mailerlite_list_fields` | read | List fields |
| `mailerlite_list_segments` | read | List segments |
| `mailerlite_list_automations` | read | List automations |
| `mailerlite_list_webhooks` | read | List webhooks |
| `mailerlite_upsert_subscriber` | **write** | Upsert subscriber |
| `mailerlite_create_group` | **write** | Create group |
| `mailerlite_assign_subscriber_to_group` | **write** | Assign subscriber to group |
| `mailerlite_usage_status` | meta | Usage status (free-tier meter) |
| `mailerlite_request_feature` | meta | Request a missing feature |
| `mailerlite_upgrade` | meta | Upgrade to Pro or Pro+ |
| `mailerlite_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `mailerlite_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `mailerlite_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `mailerlite_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
