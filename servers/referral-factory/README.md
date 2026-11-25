# Referral Factory MCP by usefulapi

Use your [Referral Factory](https://referral-factory.com) account from Claude, Cursor, or any MCP client. It reads campaigns, referrers, leads, goals and rewards, and it creates or updates referrers and qualifies leads. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://referral-factory.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://referral-factory.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http referral-factory https://referral-factory.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=referral-factory&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Freferral-factory.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "referral-factory": {
      "url": "https://referral-factory.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Referral Factory credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/referral-factory/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Referral Factory API access token** (Settings → Webhooks and API, then the API section). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `referralfactory_list_campaigns` | read | List campaigns |
| `referralfactory_get_campaign` | read | Get a campaign |
| `referralfactory_list_referrers` | read | List referrers |
| `referralfactory_get_referrer` | read | Get a referrer |
| `referralfactory_search_referrers` | read | Search referrers |
| `referralfactory_create_referrer` | **write** | Create a referrer |
| `referralfactory_update_referrer` | **write** | Update a referrer |
| `referralfactory_list_leads` | read | List leads |
| `referralfactory_get_lead` | read | Get a lead |
| `referralfactory_update_lead_qualification` | **write** | Qualify or unqualify a lead |
| `referralfactory_list_goals` | read | List goals |
| `referralfactory_get_goal` | read | Get a goal |
| `referralfactory_list_due_rewards` | read | List due rewards |
| `referralfactory_list_issued_rewards` | read | List issued rewards |
| `referralfactory_usage_status` | meta | Usage status (free-tier meter) |
| `referralfactory_request_feature` | meta | Request a missing feature |
| `referralfactory_upgrade` | meta | Upgrade to Pro or Pro+ |
| `referralfactory_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `referralfactory_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `referralfactory_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `referralfactory_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
