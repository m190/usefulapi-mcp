# Revamp CRM MCP by usefulapi

Read Revamp CRM contacts, deals, notes and orders; create and update contacts, deals and notes.

**Live endpoint:** `https://revamp-crm.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/revamp-crm

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://revamp-crm.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http revamp-crm https://revamp-crm.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=revamp-crm&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frevamp-crm.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "revamp-crm": {
      "url": "https://revamp-crm.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Revamp CRM credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/revamp-crm/

<!-- connect:end (generated above, edit below) -->

On first connect you'll enter the email you sign in to Revamp CRM with and that user's Revamp CRM **API key** (never the account **password**).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `revampcrm_get_current_user` | read | Get current user |
| `revampcrm_list_contact_stages` | read | List contact stages |
| `revampcrm_list_deal_currencies` | read | List deal currencies |
| `revampcrm_list_custom_fields` | read | List contact custom fields |
| `revampcrm_list_contacts` | read | List or search contacts |
| `revampcrm_get_contact` | read | Get contact |
| `revampcrm_list_contact_deals` | read | List a contact's deals |
| `revampcrm_list_deals` | read | List deals |
| `revampcrm_search_deals` | read | Search deals |
| `revampcrm_list_deals_by_stage` | read | List deals grouped by stage |
| `revampcrm_get_note` | read | Get note |
| `revampcrm_get_order` | read | Get e-commerce order |
| `revampcrm_count_orders` | read | Count e-commerce orders |
| `revampcrm_create_contact` | **write** | Create contact |
| `revampcrm_update_contact` | **write** | Update contact |
| `revampcrm_create_deal` | **write** | Create deal |
| `revampcrm_add_note` | **write** | Add note to a contact or deal |
| `revampcrm_mark_deal_won` | **write** | Mark deal won |
| `revampcrm_mark_deal_lost` | **write** | Mark deal lost |
| `revampcrm_usage_status` | meta | Usage status (free-tier meter) |
| `revampcrm_request_feature` | meta | Request a missing feature |
| `revampcrm_upgrade` | meta | Upgrade to Pro or Pro+ |
| `revampcrm_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `revampcrm_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `revampcrm_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `revampcrm_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Revamp CRM.
