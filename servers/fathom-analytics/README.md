# Fathom Analytics MCP by usefulapi

Use [Fathom Analytics](https://usefathom.com) from Claude, Cursor, or any MCP client — sites, aggregated stats, current visitors, events and site settings.
Hosted, no local install: connect with your own Fathom Analytics credentials.

**Live endpoint:** `https://fathom-analytics.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/fathom-analytics

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://fathom-analytics.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http fathom-analytics https://fathom-analytics.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=fathom-analytics&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffathom-analytics.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "fathom-analytics": {
      "url": "https://fathom-analytics.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Fathom Analytics credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/fathom-analytics/

<!-- connect:end (generated above, edit below) -->

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Fathom Analytics credentials.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fathom_get_token` | read | Get the API token's permissions |
| `fathom_get_account` | read | Get the account |
| `fathom_list_sites` | read | List sites |
| `fathom_get_site` | read | Get a site |
| `fathom_list_events` | read | List a site's events |
| `fathom_list_milestones` | read | List a site's milestones |
| `fathom_get_milestone` | read | Get a milestone |
| `fathom_get_aggregation` | read | Run a traffic or event report |
| `fathom_get_current_visitors` | read | Get current visitors |
| `fathom_create_site` | **write** | Create a site |
| `fathom_update_site` | **write** | Update a site |
| `fathom_set_event_currency` | **write** | Set an event's currency |
| `fathom_clear_event_currency` | **write** | Clear an event's currency |
| `fathom_create_milestone` | **write** | Create a milestone |
| `fathom_update_milestone` | **write** | Update a milestone |
| `fathom_delete_milestone` | **write** | Delete a milestone |
| `fathom_usage_status` | meta | Usage status (free-tier meter) |
| `fathom_request_feature` | meta | Request a missing feature |
| `fathom_upgrade` | meta | Upgrade to Pro or Pro+ |
| `fathom_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `fathom_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `fathom_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `fathom_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Fathom Analytics.
