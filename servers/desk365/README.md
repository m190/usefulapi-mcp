# Desk365 MCP by usefulapi

Read your API-enabled helpdesk from an AI assistant.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://desk365.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http desk365 https://desk365.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=desk365&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdesk365.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "desk365": {
      "url": "https://desk365.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Desk365 credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/desk365/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `desk365_list_tickets` | read | List tickets |
| `desk365_search_tickets` | read | Search tickets |
| `desk365_get_ticket` | read | Get ticket |
| `desk365_get_ticket_conversations` | read | Get ticket conversation |
| `desk365_list_contacts` | read | List contacts |
| `desk365_get_contact` | read | Get contact |
| `desk365_list_companies` | read | List companies |
| `desk365_get_company` | read | Get company |
| `desk365_list_time_entries` | read | List time entries |
| `desk365_get_time_entry` | read | Get time entry |
| `desk365_list_survey_ratings` | read | List survey ratings |
| `desk365_list_kb_articles` | read | List knowledge base articles |
| `desk365_get_kb_article` | read | Get knowledge base article |
| `desk365_usage_status` | meta | Usage status (free-tier meter) |
| `desk365_request_feature` | meta | Request a missing feature |
| `desk365_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `desk365_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per helpdesk subdomain) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `desk365_upgrade` (it returns a Stripe Checkout link). Cancel any time with `desk365_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `desk365_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
