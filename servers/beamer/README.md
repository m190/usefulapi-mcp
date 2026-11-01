# Beamer MCP by usefulapi

Use your [Beamer](https://www.getbeamer.com) account from Claude, Cursor, or any MCP client. Read posts, comments, reactions, feature requests, votes and NPS responses. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://beamer.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://beamer.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http beamer https://beamer.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=beamer&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbeamer.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "beamer": {
      "url": "https://beamer.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Beamer credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/beamer/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Beamer API key** (Beamer → Settings → API). A read-only key is enough. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `beamer_list_posts` | read | List posts |
| `beamer_count_posts` | read | Count posts |
| `beamer_get_post` | read | Get post |
| `beamer_list_post_comments` | read | List post comments |
| `beamer_count_post_comments` | read | Count post comments |
| `beamer_list_post_reactions` | read | List post reactions |
| `beamer_count_post_reactions` | read | Count post reactions |
| `beamer_list_feature_requests` | read | List feature requests |
| `beamer_count_feature_requests` | read | Count feature requests |
| `beamer_get_feature_request` | read | Get feature request |
| `beamer_list_feature_request_comments` | read | List feature request comments |
| `beamer_list_feature_request_votes` | read | List feature request votes |
| `beamer_list_nps_responses` | read | List NPS responses |
| `beamer_count_nps_responses` | read | Count NPS responses |
| `beamer_list_users` | read | List users |
| `beamer_get_unread_count` | read | Get unread post count |
| `beamer_usage_status` | meta | Usage status (free-tier meter) |
| `beamer_request_feature` | meta | Request a missing feature |
| `beamer_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `beamer_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `beamer_upgrade` (it returns a Stripe Checkout link). Cancel any time with `beamer_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `beamer_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
