# Steady MCP by usefulapi

Use your [Steady](https://steadyhq.com) account from Claude, Cursor, or any MCP client. Read your publication's member counts, income, plans, subscriptions and newsletter subscribers. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://steady.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://steady.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http steady https://steady.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=steady&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsteady.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "steady": {
      "url": "https://steady.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Steady credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/steady/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Steady API key** (found in the publication's API integration settings in the Steady backend). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `steady_get_publication` | read | Get publication |
| `steady_list_plans` | read | List membership plans |
| `steady_list_subscriptions` | read | List active subscriptions |
| `steady_list_inactive_subscriptions` | read | List ended subscriptions |
| `steady_list_newsletter_subscribers` | read | List newsletter subscribers |
| `steady_usage_status` | meta | Usage status (free-tier meter) |
| `steady_request_feature` | meta | Request a missing feature |
| `steady_upgrade` | meta | Upgrade to Pro or Pro+ |
| `steady_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `steady_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `steady_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `steady_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
