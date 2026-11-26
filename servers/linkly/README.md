# Linkly MCP by usefulapi

Use your [Linkly](https://linklyhq.com) account from Claude, Cursor, or any MCP client. Read short links, click analytics, conversions and domains, and create or update short links. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://linkly.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://linkly.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http linkly https://linkly.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=linkly&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flinkly.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "linkly": {
      "url": "https://linkly.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Linkly credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/linkly/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Linkly API key** (workspace settings under API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `linkly_list_workspaces` | read | List workspaces |
| `linkly_list_links` | read | List links |
| `linkly_get_link` | read | Get link |
| `linkly_get_clicks` | read | Get clicks |
| `linkly_get_click_counters` | read | Get click counters |
| `linkly_list_conversions` | read | List conversions |
| `linkly_list_domains` | read | List domains |
| `linkly_list_workspace_webhooks` | read | List workspace webhooks |
| `linkly_list_link_webhooks` | read | List link webhooks |
| `linkly_create_or_update_link` | **write** | Create or update link |
| `linkly_usage_status` | meta | Usage status (free-tier meter) |
| `linkly_request_feature` | meta | Request a missing feature |
| `linkly_upgrade` | meta | Upgrade to Pro or Pro+ |
| `linkly_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `linkly_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `linkly_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `linkly_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
