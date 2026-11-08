# Cyberimpact MCP by usefulapi

Read Cyberimpact members, groups and mailing results; add members, send opt-ins, create mailings.

**Live endpoint:** `https://cyberimpact.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/cyberimpact

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cyberimpact.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cyberimpact https://cyberimpact.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cyberimpact&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcyberimpact.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cyberimpact": {
      "url": "https://cyberimpact.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Cyberimpact credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cyberimpact/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Cyberimpact **API token** (Developers → API tokens).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cyberimpact_get_account` | read | Get account |
| `cyberimpact_list_members` | read | List members |
| `cyberimpact_get_member` | read | Get member |
| `cyberimpact_get_member_groups` | read | Get member's groups |
| `cyberimpact_get_member_mailings` | read | Get member's mailings |
| `cyberimpact_get_member_consent` | read | Get member consent |
| `cyberimpact_list_bounced_members` | read | List bounced members |
| `cyberimpact_list_unsubscribed_members` | read | List unsubscribed members |
| `cyberimpact_list_custom_fields` | read | List custom fields |
| `cyberimpact_list_groups` | read | List groups |
| `cyberimpact_get_group` | read | Get group |
| `cyberimpact_list_group_members` | read | List group members |
| `cyberimpact_list_mailings` | read | List mailings |
| `cyberimpact_get_mailing` | read | Get mailing |
| `cyberimpact_list_mailing_recipients` | read | List mailing recipients |
| `cyberimpact_list_templates` | read | List templates |
| `cyberimpact_get_template` | read | Get template |
| `cyberimpact_get_batch` | read | Get batch |
| `cyberimpact_add_member` | **write** | Add member |
| `cyberimpact_update_member` | **write** | Update member |
| `cyberimpact_add_member_to_groups` | **write** | Add member to groups |
| `cyberimpact_send_optin` | **write** | Send opt-in email |
| `cyberimpact_create_group` | **write** | Create group |
| `cyberimpact_create_template` | **write** | Create template |
| `cyberimpact_create_mailing` | **write** | Schedule mailing |
| `cyberimpact_usage_status` | meta | Usage status (free-tier meter) |
| `cyberimpact_request_feature` | meta | Request a missing feature |
| `cyberimpact_upgrade` | meta | Upgrade to Pro or Pro+ |
| `cyberimpact_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `cyberimpact_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `cyberimpact_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `cyberimpact_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Cyberimpact.
