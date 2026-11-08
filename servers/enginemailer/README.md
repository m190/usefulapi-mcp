# Enginemailer MCP by usefulapi

Read Enginemailer subscribers, lists and campaigns; add subscribers, create and send campaigns.

**Live endpoint:** `https://enginemailer.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/enginemailer

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://enginemailer.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http enginemailer https://enginemailer.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=enginemailer&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fenginemailer.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "enginemailer": {
      "url": "https://enginemailer.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Enginemailer credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/enginemailer/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Enginemailer **API key** (in Enginemailer open Manage account → API Keys and copy or create a key).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `enginemailer_get_subscriber` | read | Get subscriber |
| `enginemailer_list_subscriber_categories` | read | List subscriber categories |
| `enginemailer_list_custom_fields` | read | List custom fields |
| `enginemailer_add_subscriber` | **write** | Add subscriber |
| `enginemailer_update_subscriber` | **write** | Update subscriber |
| `enginemailer_unsubscribe_subscriber` | **write** | Unsubscribe subscriber |
| `enginemailer_save_subscriber_category` | **write** | Create or update subscriber category |
| `enginemailer_list_campaigns` | read | List undelivered campaigns |
| `enginemailer_get_campaign_stats` | read | Get campaign delivery stats |
| `enginemailer_list_campaign_categories` | read | List campaign categories |
| `enginemailer_list_campaign_subcategories` | read | List campaign subcategories |
| `enginemailer_create_campaign` | **write** | Create campaign (draft) |
| `enginemailer_assign_campaign_recipients` | **write** | Assign campaign recipients |
| `enginemailer_send_campaign` | **write** | Send campaign NOW |
| `enginemailer_send_transactional_email` | **write** | Send transactional email |
| `enginemailer_start_transactional_report_export` | **write** | Start transactional report export |
| `enginemailer_check_transactional_report_export` | read | Check transactional report export |
| `enginemailer_usage_status` | meta | Usage status (free-tier meter) |
| `enginemailer_request_feature` | meta | Request a missing feature |
| `enginemailer_upgrade` | meta | Upgrade to Pro or Pro+ |
| `enginemailer_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `enginemailer_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `enginemailer_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `enginemailer_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Enginemailer.
