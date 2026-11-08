# Libib MCP by usefulapi

Use your [Libib](https://www.libib.com) account from Claude, Cursor, or any MCP client. It reads the account, managers and patrons of a Libib Pro account, and it creates and updates patrons. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://libib.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://libib.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http libib https://libib.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=libib&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flibib.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "libib": {
      "url": "https://libib.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Libib credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/libib/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Libib API key** and your **Libib API user ID** (both under Settings → API → API Details). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `libib_list_accounts` | read | List accounts |
| `libib_list_managers` | read | List managers |
| `libib_get_manager` | read | Get manager |
| `libib_list_patrons` | read | List patrons |
| `libib_get_patron` | read | Get patron |
| `libib_create_patron` | **write** | Create patron |
| `libib_update_patron` | **write** | Update patron |
| `libib_usage_status` | meta | Usage status (free-tier meter) |
| `libib_request_feature` | meta | Request a missing feature |
| `libib_upgrade` | meta | Upgrade to Pro or Pro+ |
| `libib_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `libib_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `libib_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `libib_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
