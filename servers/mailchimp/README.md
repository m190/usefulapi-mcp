# Mailchimp MCP by usefulapi

Use your [Mailchimp](https://mailchimp.com) account from Claude, Cursor, or any MCP client — read audiences, members, campaigns and reports, and add, update, tag or archive subscribers. Hosted,
no local install: connect with your own credentials.

**Live endpoint:** `https://mailchimp.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://mailchimp.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http mailchimp https://mailchimp.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=mailchimp&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmailchimp.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "mailchimp": {
      "url": "https://mailchimp.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Mailchimp credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/mailchimp/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Mailchimp API key** (Account & billing → Extras → API keys — include the `-us21` datacenter suffix). It is validated, stored per-user, and scoped to you — no
keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `mailchimp_get_account` | read | Get account |
| `mailchimp_list_audiences` | read | List audiences (lists) |
| `mailchimp_get_audience` | read | Get audience (list) |
| `mailchimp_list_members` | read | List members |
| `mailchimp_get_member` | read | Get member |
| `mailchimp_search_members` | read | Search members |
| `mailchimp_list_campaigns` | read | List campaigns |
| `mailchimp_get_campaign` | read | Get campaign |
| `mailchimp_list_reports` | read | List reports |
| `mailchimp_get_campaign_report` | read | Get campaign report |
| `mailchimp_list_automations` | read | List automations |
| `mailchimp_list_templates` | read | List templates |
| `mailchimp_list_segments` | read | List segments |
| `mailchimp_list_member_tags` | read | List member tags |
| `mailchimp_add_member` | **write** | Add member |
| `mailchimp_update_member` | **write** | Update member |
| `mailchimp_add_member_tags` | **write** | Add/remove member tags |
| `mailchimp_archive_member` | **write** | Archive member |
| `mailchimp_usage_status` | meta | Usage status (free-tier meter) |
| `mailchimp_request_feature` | meta | Request a missing feature |
| `mailchimp_upgrade` | meta | Upgrade to Pro (unlimited) |
| `mailchimp_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `mailchimp_upgrade` (it returns a Stripe Checkout link). Cancel any time with `mailchimp_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `mailchimp_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
