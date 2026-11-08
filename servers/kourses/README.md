# Kourses MCP by usefulapi

Use your [Kourses](https://kourses.com) account from Claude, Cursor, or any MCP client. Read your memberships and member access, and create members or grant and revoke membership access. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://kourses.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://kourses.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http kourses https://kourses.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=kourses&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fkourses.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "kourses": {
      "url": "https://kourses.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Kourses credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/kourses/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Kourses API key** (Kourses → Settings → API keys, created for one website). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `kourses_list_memberships` | read | List memberships |
| `kourses_list_member_memberships` | read | List a member's memberships |
| `kourses_create_member` | **write** | Create or update a member |
| `kourses_grant_membership_access` | **write** | Grant membership access |
| `kourses_revoke_membership_access` | **write** | Revoke membership access |
| `kourses_usage_status` | meta | Usage status (free-tier meter) |
| `kourses_request_feature` | meta | Request a missing feature |
| `kourses_upgrade` | meta | Upgrade to Pro or Pro+ |
| `kourses_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `kourses_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `kourses_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `kourses_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
