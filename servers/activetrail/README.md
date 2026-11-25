# ActiveTrail MCP by usefulapi

Use your [ActiveTrail](https://www.activetrail.com) account from Claude, Cursor, or any MCP client. Read contacts, groups, mailing lists, email campaigns, automations and campaign reports, and add contacts to groups. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://activetrail.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://activetrail.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http activetrail https://activetrail.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=activetrail&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Factivetrail.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "activetrail": {
      "url": "https://activetrail.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ActiveTrail credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/activetrail/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **ActiveTrail API token**, created in ActiveTrail under Settings → API apps → New. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `activetrail_get_account_balance` | read | Get account balance |
| `activetrail_list_sending_profiles` | read | List sending profiles |
| `activetrail_list_contacts` | read | List contacts |
| `activetrail_get_contact` | read | Get a contact |
| `activetrail_get_contact_groups` | read | Get a contact's groups |
| `activetrail_get_contact_activity` | read | Get a contact's activity |
| `activetrail_list_groups` | read | List groups |
| `activetrail_get_group` | read | Get a group |
| `activetrail_list_group_members` | read | List group members |
| `activetrail_add_group_member` | **write** | Add a contact to a group |
| `activetrail_list_mailing_lists` | read | List mailing lists |
| `activetrail_list_mailing_list_members` | read | List mailing list members |
| `activetrail_list_campaigns` | read | List email campaigns |
| `activetrail_get_campaign` | read | Get an email campaign |
| `activetrail_get_campaign_report` | read | Get an email campaign report |
| `activetrail_list_automations` | read | List automations |
| `activetrail_get_automation` | read | Get an automation |
| `activetrail_list_signup_forms` | read | List sign-up forms |
| `activetrail_create_contact` | **write** | Create a contact |
| `activetrail_usage_status` | meta | Usage status (free-tier meter) |
| `activetrail_request_feature` | meta | Request a missing feature |
| `activetrail_upgrade` | meta | Upgrade to Pro or Pro+ |
| `activetrail_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `activetrail_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `activetrail_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `activetrail_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
