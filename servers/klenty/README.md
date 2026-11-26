# Klenty MCP by usefulapi

Use your [Klenty](https://www.klenty.com) account from Claude, Cursor, or any MCP client. Read prospects, lists and cadences, and create or update prospects or start and stop cadences. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://klenty.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://klenty.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http klenty https://klenty.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=klenty&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fklenty.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "klenty": {
      "url": "https://klenty.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Klenty credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/klenty/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **Klenty account email** and your **Klenty API key** (Settings → Integrations → Klenty API Key). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `klenty_list_lists` | read | List prospect lists |
| `klenty_list_prospects_by_list` | read | List prospects in a list |
| `klenty_list_prospects_created` | read | List prospects created in a date range |
| `klenty_list_prospects_updated` | read | List prospects updated in a date range |
| `klenty_get_prospect_status` | read | Get a prospect's status |
| `klenty_list_company_cadences` | read | List team cadences |
| `klenty_list_webhooks` | read | List webhooks |
| `klenty_create_prospect` | **write** | Create a prospect |
| `klenty_update_prospect` | **write** | Update a prospect |
| `klenty_start_cadence` | **write** | Start a cadence for a prospect |
| `klenty_stop_cadence` | **write** | Stop a cadence for a prospect |
| `klenty_usage_status` | meta | Usage status (free-tier meter) |
| `klenty_request_feature` | meta | Request a missing feature |
| `klenty_upgrade` | meta | Upgrade to Pro or Pro+ |
| `klenty_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `klenty_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `klenty_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `klenty_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
