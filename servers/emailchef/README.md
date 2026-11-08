# Emailchef MCP by usefulapi

Use your [Emailchef](https://emailchef.com) account from Claude, Cursor, or any MCP client. Read lists, contacts, campaigns and their opens and clicks, and add contacts, draft, schedule and send campaigns, emails and SMS. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://emailchef.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://emailchef.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http emailchef https://emailchef.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=emailchef&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Femailchef.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "emailchef": {
      "url": "https://emailchef.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Emailchef credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/emailchef/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **Consumer Key** and **Consumer Secret** of an Emailchef API key (Emailchef → Settings → API Keys → Create API Key; only the account Owner can). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `emailchef_get_account` | read | Get account |
| `emailchef_get_subscription` | read | Get subscription |
| `emailchef_list_senders` | read | List senders |
| `emailchef_list_timezones` | read | List timezones |
| `emailchef_list_lists` | read | List contact lists |
| `emailchef_get_list` | read | Get list |
| `emailchef_get_list_stats` | read | Get list growth stats |
| `emailchef_get_list_contact_counts` | read | Get list contact counts |
| `emailchef_create_list` | **write** | Create list |
| `emailchef_update_list` | **write** | Update list |
| `emailchef_list_contacts` | read | List contacts |
| `emailchef_get_contact` | read | Get contact |
| `emailchef_create_contact` | **write** | Add contact to a list |
| `emailchef_update_contact` | **write** | Update contact |
| `emailchef_unsubscribe_contact` | **write** | Unsubscribe contact |
| `emailchef_import_contacts` | **write** | Import contacts |
| `emailchef_list_import_tasks` | read | List import tasks |
| `emailchef_get_import_task` | read | Get import task |
| `emailchef_list_predefined_fields` | read | List predefined fields |
| `emailchef_list_custom_fields` | read | List custom fields |
| `emailchef_list_segments` | read | List segments |
| `emailchef_get_segment` | read | Get segment |
| `emailchef_list_blocked` | read | List blocked emails |
| `emailchef_block_emails` | **write** | Block emails |
| `emailchef_unblock_email` | **write** | Unblock email |
| `emailchef_get_campaign_counts` | read | Get campaign counts |
| `emailchef_list_campaigns` | read | List campaigns |
| `emailchef_get_campaign` | read | Get campaign |
| `emailchef_get_campaign_links` | read | Get campaign links |
| `emailchef_list_campaign_engagement` | read | List campaign engagement |
| `emailchef_create_campaign` | **write** | Create campaign (draft) |
| `emailchef_clone_campaign` | **write** | Clone campaign |
| `emailchef_update_campaign` | **write** | Update draft campaign |
| `emailchef_send_test_campaign` | **write** | Send campaign test email |
| `emailchef_schedule_campaign` | **write** | Schedule campaign |
| `emailchef_unschedule_campaign` | **write** | Unschedule campaign |
| `emailchef_send_campaign` | **write** | Send campaign now |
| `emailchef_archive_campaign` | **write** | Archive campaign |
| `emailchef_unarchive_campaign` | **write** | Restore archived campaign |
| `emailchef_send_email` | **write** | Send one email |
| `emailchef_get_sms_balance` | read | Get SMS balance |
| `emailchef_get_sms_status` | read | Get SMS status |
| `emailchef_send_sms` | **write** | Send SMS |
| `emailchef_usage_status` | meta | Usage status (free-tier meter) |
| `emailchef_request_feature` | meta | Request a missing feature |
| `emailchef_upgrade` | meta | Upgrade to Pro or Pro+ |
| `emailchef_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `emailchef_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `emailchef_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `emailchef_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
