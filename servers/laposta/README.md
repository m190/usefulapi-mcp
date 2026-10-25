# Laposta MCP by usefulapi

Read Laposta lists, members, campaigns and reports; add members and build campaigns. Hosted, no local install.

**Live endpoint:** `https://laposta.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/laposta

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://laposta.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http laposta https://laposta.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=laposta&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flaposta.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "laposta": {
      "url": "https://laposta.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Laposta credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/laposta/

<!-- connect:end (generated above, edit below) -->

On first connect you will paste your **Laposta credentials**. They are validated, stored per-user, and scoped to you. No keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `laposta_list_lists` | read | List mailing lists |
| `laposta_get_list` | read | Get a mailing list |
| `laposta_list_fields` | read | List a list's fields |
| `laposta_list_segments` | read | List a list's segments |
| `laposta_list_members` | read | List members of a list |
| `laposta_get_member` | read | Get a member |
| `laposta_get_member_history` | read | Get a member's event history |
| `laposta_list_campaigns` | read | List campaigns |
| `laposta_get_campaign` | read | Get a campaign |
| `laposta_get_campaign_content` | read | Get a campaign's content |
| `laposta_get_campaign_history` | read | Get a campaign's event history |
| `laposta_list_reports` | read | List campaign reports |
| `laposta_get_report` | read | Get a campaign report |
| `laposta_add_member` | **write** | Add a member to a list |
| `laposta_update_member` | **write** | Update a member |
| `laposta_create_campaign` | **write** | Create a campaign draft |
| `laposta_set_campaign_content` | **write** | Set a campaign's content |
| `laposta_send_test_email` | **write** | Send a campaign test email |
| `laposta_usage_status` | meta | Usage status (free-tier meter) |
| `laposta_request_feature` | meta | Request a missing feature |
| `laposta_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `laposta_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `laposta_upgrade` (it returns a Stripe Checkout link). Cancel any time with `laposta_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `laposta_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
