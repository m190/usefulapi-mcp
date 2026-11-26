# SmartEmailing MCP by usefulapi

Use your [SmartEmailing](https://www.smartemailing.cz) account from Claude, Cursor, or any MCP client. Read contact lists, contacts, custom fields, e-mail performance and automations, and create contact lists. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://smartemailing.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://smartemailing.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http smartemailing https://smartemailing.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=smartemailing&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsmartemailing.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "smartemailing": {
      "url": "https://smartemailing.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SmartEmailing credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/smartemailing/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **SmartEmailing login e-mail** and a **SmartEmailing API key** (API keys and integrations; third-party use needs SmartEmailing's agreement). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `smartemailing_account_info` | read | Get account info |
| `smartemailing_list_contact_lists` | read | List contact lists |
| `smartemailing_get_contact_list` | read | Get contact list |
| `smartemailing_list_contacts_in_list` | read | List contacts in a list |
| `smartemailing_create_contact_list` | **write** | Create contact list |
| `smartemailing_list_contacts` | read | List contacts |
| `smartemailing_get_contact` | read | Get contact |
| `smartemailing_list_custom_fields` | read | List custom fields |
| `smartemailing_get_custom_field` | read | Get custom field |
| `smartemailing_list_emails` | read | List emails |
| `smartemailing_get_email` | read | Get email |
| `smartemailing_list_newsletters` | read | List newsletters |
| `smartemailing_get_email_performance` | read | Get email performance overview |
| `smartemailing_list_automations` | read | List automations |
| `smartemailing_get_automation` | read | Get automation |
| `smartemailing_list_webhooks` | read | List webhooks |
| `smartemailing_list_web_forms` | read | List web forms |
| `smartemailing_usage_status` | meta | Usage status (free-tier meter) |
| `smartemailing_request_feature` | meta | Request a missing feature |
| `smartemailing_upgrade` | meta | Upgrade to Pro or Pro+ |
| `smartemailing_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `smartemailing_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `smartemailing_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `smartemailing_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
