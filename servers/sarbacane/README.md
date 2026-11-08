# Sarbacane MCP by usefulapi

**Live endpoint:** `https://sarbacane.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/sarbacane

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sarbacane.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sarbacane https://sarbacane.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sarbacane&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsarbacane.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sarbacane": {
      "url": "https://sarbacane.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Sarbacane credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sarbacane/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sarbacane_get_credits` | read | Get remaining credits |
| `sarbacane_list_users` | read | List account users |
| `sarbacane_list_lists` | read | List contact lists |
| `sarbacane_list_list_fields` | read | List a list's custom fields |
| `sarbacane_list_contacts` | read | List contacts in a list |
| `sarbacane_create_contact` | **write** | Add a contact to a list |
| `sarbacane_upsert_contact` | **write** | Add or update a contact |
| `sarbacane_list_blacklists` | read | List blacklists |
| `sarbacane_list_blacklist_entries` | read | List blacklist entries |
| `sarbacane_add_unsubscriber` | **write** | Add an unsubscribed contact to a blacklist |
| `sarbacane_list_campaigns` | read | List campaigns |
| `sarbacane_get_campaign` | read | Get campaign details |
| `sarbacane_get_campaign_report` | read | Get campaign statistics |
| `sarbacane_list_campaign_recipients` | read | List a campaign's recipients |
| `sarbacane_list_webhooks` | read | List webhooks |
| `sarbacane_create_email_campaign` | **write** | Create an email campaign (draft) |
| `sarbacane_set_campaign_content` | **write** | Set a draft campaign's content |
| `sarbacane_import_campaign_template` | **write** | Import a template into a draft campaign |
| `sarbacane_set_campaign_list` | **write** | Attach a contact list to a draft campaign |
| `sarbacane_usage_status` | meta | Usage status (free-tier meter) |
| `sarbacane_request_feature` | meta | Request a missing feature |
| `sarbacane_upgrade` | meta | Upgrade to Pro or Pro+ |
| `sarbacane_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per account) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `sarbacane_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `sarbacane_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `sarbacane_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
