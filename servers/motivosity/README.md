# Motivosity MCP by usefulapi

Use your [Motivosity](https://www.motivosity.com) account from Claude, Cursor, or any MCP client. Read users, the org chart, the recognition feed and the leaderboard, and give appreciations and awards. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://motivosity.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://motivosity.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http motivosity https://motivosity.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=motivosity&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmotivosity.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "motivosity": {
      "url": "https://motivosity.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Motivosity credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/motivosity/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **App ID** and **secure token** of a Motivosity service account (Setup → Integrations → API), and an optional **app secret**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `motivosity_list_company_values` | read | List company values |
| `motivosity_list_users` | read | List users |
| `motivosity_search_users` | read | Search users |
| `motivosity_get_user` | read | Get user |
| `motivosity_get_user_profile` | read | Get user profile |
| `motivosity_get_direct_reports` | read | Get direct reports |
| `motivosity_get_org_chart_partial` | read | Get org chart section |
| `motivosity_get_recent_feed` | read | Get recent feed |
| `motivosity_get_all_feed` | read | Get feed by date range |
| `motivosity_get_leaderboard` | read | Get leaderboard |
| `motivosity_give_platform_appreciation` | **write** | Give platform appreciation |
| `motivosity_give_award` | **write** | Give award |
| `motivosity_usage_status` | meta | Usage status (free-tier meter) |
| `motivosity_request_feature` | meta | Request a missing feature |
| `motivosity_upgrade` | meta | Upgrade to Pro or Pro+ |
| `motivosity_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `motivosity_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `motivosity_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `motivosity_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
