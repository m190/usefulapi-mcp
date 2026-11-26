# Campaigner MCP by usefulapi

Use your [Campaigner](https://www.campaigner.com) account from Claude, Cursor, or any MCP client. Read lists, subscribers, campaigns, bounces and suppression lists, and add or remove addresses on one list. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://campaigner.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://campaigner.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http campaigner https://campaigner.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=campaigner&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcampaigner.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "campaigner": {
      "url": "https://campaigner.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Campaigner credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/campaigner/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Campaigner API key** (your Campaigner account, under API settings). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `campaigner_get_account` | read | Get account and key permissions |
| `campaigner_get_database_columns` | read | List subscriber database columns |
| `campaigner_get_database_column` | read | Get a subscriber database column |
| `campaigner_list_lists` | read | List contact lists |
| `campaigner_get_list` | read | Get a contact list |
| `campaigner_list_list_members` | read | List members of a contact list |
| `campaigner_add_emails_to_list` | **write** | Add subscribers to a list |
| `campaigner_remove_emails_from_list` | **write** | Remove subscribers from a list |
| `campaigner_list_campaigns` | read | List campaigns by status |
| `campaigner_get_campaign` | read | Get a campaign |
| `campaigner_list_campaign_links` | read | List campaign links |
| `campaigner_list_campaign_activity` | read | List campaign activity |
| `campaigner_list_publications` | read | List publications |
| `campaigner_get_publication` | read | Get a publication |
| `campaigner_list_publication_members` | read | List publication subscribers |
| `campaigner_list_sources` | read | List sign-up sources |
| `campaigner_list_subscribers` | read | List subscribers |
| `campaigner_get_subscriber` | read | Get a subscriber |
| `campaigner_get_subscriber_properties` | read | Get subscriber fields |
| `campaigner_get_subscriber_history` | read | Get subscriber history |
| `campaigner_list_bounces` | read | List bounces |
| `campaigner_list_suppression_lists` | read | List suppression lists |
| `campaigner_list_suppression_emails` | read | List suppressed addresses |
| `campaigner_list_workflows` | read | List workflows |
| `campaigner_get_workflow_stats` | read | Get workflow stats |
| `campaigner_usage_status` | meta | Usage status (free-tier meter) |
| `campaigner_request_feature` | meta | Request a missing feature |
| `campaigner_upgrade` | meta | Upgrade to Pro or Pro+ |
| `campaigner_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `campaigner_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `campaigner_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `campaigner_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
