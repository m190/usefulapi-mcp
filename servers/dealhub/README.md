# DealHub MCP by usefulapi

Use your [DealHub](https://www.dealhub.io) account from Claude, Cursor, or any MCP client. Read quotes, versions, users and DealRoom signers, and create opportunities. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://dealhub.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://dealhub.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http dealhub https://dealhub.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=dealhub&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdealhub.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "dealhub": {
      "url": "https://dealhub.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your DealHub credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/dealhub/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **DealHub instance** and your **DealHub Authentication Token** (Control Panel → System Settings → API Settings). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `dealhub_get_quote` | read | Get a quote |
| `dealhub_list_quotes` | read | List quotes |
| `dealhub_get_dealroom_signers` | read | Get DealRoom signers |
| `dealhub_list_versions` | read | List versions |
| `dealhub_get_version` | read | Get a version |
| `dealhub_list_users` | read | List users |
| `dealhub_get_user_by_login` | read | Get a user by login |
| `dealhub_get_user_by_id` | read | Get a user by id |
| `dealhub_create_opportunity` | **write** | Create an opportunity |
| `dealhub_usage_status` | meta | Usage status (free-tier meter) |
| `dealhub_request_feature` | meta | Request a missing feature |
| `dealhub_upgrade` | meta | Upgrade to Pro or Pro+ |
| `dealhub_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `dealhub_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `dealhub_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `dealhub_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
