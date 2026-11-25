# Woodpecker MCP by usefulapi

Use your [Woodpecker](https://woodpecker.co) account from Claude, Cursor, or any MCP client. Read campaigns, prospects, inbox replies, mailboxes and reports, and pause campaigns or add prospects to them. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://woodpecker.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://woodpecker.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http woodpecker https://woodpecker.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=woodpecker&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwoodpecker.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "woodpecker": {
      "url": "https://woodpecker.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Woodpecker credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/woodpecker/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Woodpecker API key** (Woodpecker → Add-ons → API & Integrations → API keys; the add-on must be active on your account). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `woodpecker_list_campaigns` | read | List campaigns |
| `woodpecker_get_campaign` | read | Get a campaign |
| `woodpecker_list_prospects` | read | List prospects |
| `woodpecker_list_campaign_prospects` | read | List prospects in a campaign |
| `woodpecker_search_prospects` | read | Search prospects |
| `woodpecker_get_prospect_responses` | read | Get a prospect's replies |
| `woodpecker_list_inbox_messages` | read | List inbox messages |
| `woodpecker_list_mailboxes` | read | List mailboxes |
| `woodpecker_get_mailbox` | read | Get a mailbox |
| `woodpecker_list_manual_tasks` | read | List manual tasks |
| `woodpecker_list_users` | read | List account users |
| `woodpecker_list_blacklisted_domains` | read | List blacklisted domains |
| `woodpecker_list_blacklisted_emails` | read | List blacklisted emails |
| `woodpecker_request_campaign_report` | read | Request a campaign report |
| `woodpecker_get_report` | read | Get a report |
| `woodpecker_pause_campaign` | **write** | Pause a campaign |
| `woodpecker_add_prospects_to_campaign` | **write** | Add prospects to a campaign |
| `woodpecker_usage_status` | meta | Usage status (free-tier meter) |
| `woodpecker_request_feature` | meta | Request a missing feature |
| `woodpecker_upgrade` | meta | Upgrade to Pro or Pro+ |
| `woodpecker_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `woodpecker_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `woodpecker_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `woodpecker_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
