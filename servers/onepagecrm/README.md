# OnePageCRM MCP by usefulapi

Use your [OnePageCRM](https://www.onepagecrm.com) account from Claude, Cursor, or any MCP client. Read contacts, companies, deals, pipelines and tasks in OnePageCRM, and add contacts, notes or status changes. Nothing is e-mailed. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://onepagecrm.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://onepagecrm.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http onepagecrm https://onepagecrm.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=onepagecrm&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fonepagecrm.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "onepagecrm": {
      "url": "https://onepagecrm.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your OnePageCRM credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/onepagecrm/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **OnePageCRM user ID** and **API key** (Settings → API → Configuration). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `onepagecrm_get_account` | read | Get account settings |
| `onepagecrm_list_users` | read | List users |
| `onepagecrm_list_pipelines` | read | List deal pipelines |
| `onepagecrm_list_statuses` | read | List contact statuses |
| `onepagecrm_list_contacts` | read | List contacts |
| `onepagecrm_get_contact` | read | Get contact |
| `onepagecrm_create_contact` | **write** | Create contact |
| `onepagecrm_list_notes` | read | List notes |
| `onepagecrm_create_contact_note` | **write** | Add note to contact |
| `onepagecrm_change_contact_status` | **write** | Change contact status |
| `onepagecrm_list_companies` | read | List companies |
| `onepagecrm_get_company` | read | Get company |
| `onepagecrm_list_deals` | read | List deals |
| `onepagecrm_get_deal` | read | Get deal |
| `onepagecrm_list_actions` | read | List actions |
| `onepagecrm_mark_action_done` | **write** | Mark action done |
| `onepagecrm_usage_status` | meta | Usage status (free-tier meter) |
| `onepagecrm_request_feature` | meta | Request a missing feature |
| `onepagecrm_upgrade` | meta | Upgrade to Pro or Pro+ |
| `onepagecrm_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `onepagecrm_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `onepagecrm_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `onepagecrm_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
