# Campaign Monitor MCP by usefulapi

Use your [Campaign Monitor](https://www.campaignmonitor.com) account from Claude, Cursor, or any MCP client. Read clients, lists, subscribers, suppression lists, campaign drafts and results such as opens and clicks. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://campaign-monitor.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://campaign-monitor.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http campaign-monitor https://campaign-monitor.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=campaign-monitor&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcampaign-monitor.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "campaign-monitor": {
      "url": "https://campaign-monitor.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Campaign Monitor credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/campaign-monitor/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Campaign Monitor API key** (Account settings → API keys in Campaign Monitor). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `campaignmonitor_get_clients` | read | List clients |
| `campaignmonitor_get_client_lists` | read | List subscriber lists |
| `campaignmonitor_get_templates` | read | List templates |
| `campaignmonitor_get_suppression_list` | read | Get suppression list |
| `campaignmonitor_get_list` | read | Get a list |
| `campaignmonitor_get_list_stats` | read | Get list statistics |
| `campaignmonitor_get_active_subscribers` | read | List active subscribers |
| `campaignmonitor_get_unsubscribed_subscribers` | read | List unsubscribed subscribers |
| `campaignmonitor_get_bounced_subscribers` | read | List bounced subscribers |
| `campaignmonitor_get_subscriber` | read | Get a subscriber |
| `campaignmonitor_get_sent_campaigns` | read | List sent campaigns |
| `campaignmonitor_get_scheduled_campaigns` | read | List scheduled campaigns |
| `campaignmonitor_get_draft_campaigns` | read | List draft campaigns |
| `campaignmonitor_get_campaign_summary` | read | Get campaign summary |
| `campaignmonitor_get_campaign_opens` | read | List campaign opens |
| `campaignmonitor_get_campaign_clicks` | read | List campaign clicks |
| `campaignmonitor_get_campaign_bounces` | read | List campaign bounces |
| `campaignmonitor_get_campaign_unsubscribes` | read | List campaign unsubscribes |
| `campaignmonitor_usage_status` | meta | Usage status (free-tier meter) |
| `campaignmonitor_request_feature` | meta | Request a missing feature |
| `campaignmonitor_upgrade` | meta | Upgrade to Pro or Pro+ |
| `campaignmonitor_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `campaignmonitor_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `campaignmonitor_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `campaignmonitor_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
