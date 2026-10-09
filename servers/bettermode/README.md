# Bettermode MCP by usefulapi

Manage [Bettermode](https://bettermode.com) communities from Claude, Cursor, or any MCP client — read your
community network, spaces, members and posts, and run full-text search across the community. Hosted, no
local install: connect with your Bettermode API token.

**Live endpoint:** `https://bettermode.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bettermode.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bettermode https://bettermode.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bettermode&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbettermode.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bettermode": {
      "url": "https://bettermode.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Bettermode credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bettermode/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Bettermode API token** (Bettermode → Settings → API tokens).
It's validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bettermode_get_network` | read | Get network |
| `bettermode_list_spaces` | read | List spaces |
| `bettermode_get_space` | read | Get space |
| `bettermode_list_members` | read | List members |
| `bettermode_get_member` | read | Get member |
| `bettermode_list_posts` | read | List posts |
| `bettermode_get_post` | read | Get post |
| `bettermode_search` | read | Search |
| `bettermode_usage_status` | meta | Usage status (free-tier meter) |
| `bettermode_upgrade` | meta | Upgrade to Pro (unlimited) |
| `bettermode_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `bettermode_upgrade` (it returns a Stripe Checkout link). Cancel any time with `bettermode_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `bettermode_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
