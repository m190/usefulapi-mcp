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
| `mailerlite_upgrade` | meta | Upgrade to Pro (unlimited) |
| `mailerlite_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `mailerlite_upgrade` (it returns a Stripe Checkout link). Cancel any time with `mailerlite_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `mailerlite_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
