# Sapling HR MCP by usefulapi

Use your [Sapling HR](https://www.saplinghr.com) account from Claude, Cursor, or any MCP client. Read employee profiles, profile fields and HR tasks. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://sapling-hr.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sapling-hr.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sapling-hr https://sapling-hr.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sapling-hr&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsapling-hr.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sapling-hr": {
      "url": "https://sapling-hr.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Sapling HR credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sapling-hr/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Sapling subdomain** (the part before .saplingapp.io in your Sapling web address), your **data centre** (US or UK) and a **Sapling API key**, which a Sapling admin creates under Admin Settings → Integrations → API Keys. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sapling_list_users` | read | List users |
| `sapling_get_user` | read | Get a user |
| `sapling_list_fields` | read | List profile fields |
| `sapling_list_tasks` | read | List tasks |
| `sapling_usage_status` | meta | Usage status (free-tier meter) |
| `sapling_request_feature` | meta | Request a missing feature |
| `sapling_upgrade` | meta | Upgrade to Pro or Pro+ |
| `sapling_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `sapling_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `sapling_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `sapling_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
