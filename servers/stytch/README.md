# Stytch MCP by usefulapi

Use your [Stytch](https://stytch.com) account from Claude, Cursor, or any MCP client. Search users and B2B organizations, read login methods, sessions and members, and revoke one session when you ask. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://stytch.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://stytch.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http stytch https://stytch.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=stytch&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstytch.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "stytch": {
      "url": "https://stytch.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Stytch credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/stytch/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Stytch project ID** and **project secret** (Stytch Dashboard → Project & API keys, from the same environment). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `stytch_search_users` | read | Search users |
| `stytch_get_user` | read | Get a user |
| `stytch_list_user_sessions` | read | List a user's sessions |
| `stytch_revoke_session` | **write** | Revoke a session |
| `stytch_search_organizations` | read | Search B2B organizations |
| `stytch_get_organization` | read | Get a B2B organization |
| `stytch_search_members` | read | Search B2B members |
| `stytch_usage_status` | meta | Usage status (free-tier meter) |
| `stytch_request_feature` | meta | Request a missing feature |
| `stytch_upgrade` | meta | Upgrade to Pro or Pro+ |
| `stytch_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `stytch_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `stytch_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `stytch_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
