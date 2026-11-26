# Retently MCP by usefulapi

Use your [Retently](https://www.retently.com) account from Claude, Cursor, or any MCP client. Read feedback, scores, campaigns and suppression lists, and manage customers, suppressions and survey sends. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://retently.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://retently.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http retently https://retently.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=retently&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fretently.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "retently": {
      "url": "https://retently.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Retently credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/retently/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Retently API key** (created in your account settings; a Write key is needed for the write tools). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `retently_ping` | read | Account status |
| `retently_list_customers` | read | List customers |
| `retently_get_customer` | read | Get a customer |
| `retently_list_companies` | read | List companies |
| `retently_get_company` | read | Get a company |
| `retently_list_feedback` | read | List feedback |
| `retently_get_feedback` | read | Get a feedback response |
| `retently_list_outbox` | read | List sent surveys |
| `retently_get_score` | read | Get the latest score |
| `retently_get_reports` | read | Get campaign reports |
| `retently_list_trend_groups` | read | List trend groups |
| `retently_get_trends` | read | Get trends of a group |
| `retently_list_templates` | read | List survey templates |
| `retently_get_template` | read | Get a survey template |
| `retently_list_campaigns` | read | List campaigns |
| `retently_list_suppressed_emails` | read | List suppressed emails |
| `retently_list_suppressed_domains` | read | List suppressed domains |
| `retently_upsert_customers` | **write** | Create or update customers |
| `retently_unsubscribe_customers` | **write** | Unsubscribe customers |
| `retently_send_survey` | **write** | Send a transactional survey |
| `retently_add_suppressed_email` | **write** | Suppress an email |
| `retently_add_suppressed_domain` | **write** | Suppress a domain |
| `retently_usage_status` | meta | Usage status (free-tier meter) |
| `retently_request_feature` | meta | Request a missing feature |
| `retently_upgrade` | meta | Upgrade to Pro or Pro+ |
| `retently_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `retently_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `retently_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `retently_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
