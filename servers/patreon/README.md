# Patreon MCP by usefulapi

Use your [Patreon](https://www.patreon.com) account from Claude, Cursor, or any MCP client. Read your campaigns, tiers, patrons and posts, without changing anything. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://patreon.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://patreon.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http patreon https://patreon.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=patreon&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpatreon.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "patreon": {
      "url": "https://patreon.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your Patreon account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/patreon/

<!-- connect:end (generated above, edit below) -->

On first connect you sign in to Patreon and approve access. The server validates the sign-in and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `patreon_get_identity` | read | Get my Patreon profile |
| `patreon_list_campaigns` | read | List my campaigns |
| `patreon_get_campaign` | read | Get a campaign |
| `patreon_list_members` | read | List campaign members |
| `patreon_get_member` | read | Get a campaign member |
| `patreon_list_posts` | read | List campaign posts |
| `patreon_get_post` | read | Get a post |
| `patreon_usage_status` | meta | Usage status (free-tier meter) |
| `patreon_request_feature` | meta | Request a missing feature |
| `patreon_upgrade` | meta | Upgrade to Pro or Pro+ |
| `patreon_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `patreon_upgrade` (it returns a Stripe Checkout link). Cancel any time with `patreon_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `patreon_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
