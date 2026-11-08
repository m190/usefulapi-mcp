# AiSensy MCP by usefulapi

Read AiSensy contacts, templates and campaigns; add contacts, send WhatsApp messages on approval.

**Live endpoint:** `https://aisensy.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/aisensy

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://aisensy.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http aisensy https://aisensy.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=aisensy&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Faisensy.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "aisensy": {
      "url": "https://aisensy.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your AiSensy credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/aisensy/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your AiSensy **Project API key** and **project id** (AiSensy → Developer → Developer Hub; Pro plan or higher).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `aisensy_get_project` | read | Get project |
| `aisensy_list_templates` | read | List WhatsApp templates |
| `aisensy_get_template` | read | Get WhatsApp template |
| `aisensy_list_campaigns` | read | List campaigns |
| `aisensy_list_api_campaigns` | read | List API campaigns |
| `aisensy_get_api_campaign` | read | Get API campaign |
| `aisensy_get_campaign_analytics` | read | Get campaign analytics |
| `aisensy_list_campaign_audience` | read | List campaign audience |
| `aisensy_create_api_campaign` | **write** | Create API campaign |
| `aisensy_find_contact` | read | Find contact by phone number |
| `aisensy_get_contact` | read | Get contact |
| `aisensy_create_contact` | **write** | Create contact |
| `aisensy_update_contact` | **write** | Update contact |
| `aisensy_upsert_contacts` | **write** | Create or update contacts in bulk |
| `aisensy_get_message` | read | Get message |
| `aisensy_send_campaign_message` | **write** | Send campaign message |
| `aisensy_send_message` | **write** | Send WhatsApp message |
| `aisensy_usage_status` | meta | Usage status (free-tier meter) |
| `aisensy_request_feature` | meta | Request a missing feature |
| `aisensy_upgrade` | meta | Upgrade to Pro or Pro+ |
| `aisensy_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `aisensy_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `aisensy_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `aisensy_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by AiSensy.
