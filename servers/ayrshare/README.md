# Ayrshare MCP by usefulapi

Use your [Ayrshare](https://www.ayrshare.com) account from Claude, Cursor, or any MCP client. Publish and schedule posts, read post history and analytics, and delete posts or comments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://ayrshare.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ayrshare.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ayrshare https://ayrshare.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ayrshare&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fayrshare.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ayrshare": {
      "url": "https://ayrshare.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Ayrshare credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ayrshare/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **API key** (Dashboard → API Key, Primary Profile). Optional: a **profile key** and **X API keys** for X posts.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ayrshare_get_user` | read | Get profile details |
| `ayrshare_list_profiles` | read | List User Profiles |
| `ayrshare_get_post` | read | Get post |
| `ayrshare_list_history` | read | List post history |
| `ayrshare_get_history_post` | read | Get post history by ID |
| `ayrshare_list_platform_history` | read | List history for one network |
| `ayrshare_get_post_analytics` | read | Get post analytics |
| `ayrshare_get_social_analytics` | read | Get social account analytics |
| `ayrshare_list_comments` | read | List comments on a post |
| `ayrshare_create_post` | **write** | Publish or schedule a post |
| `ayrshare_delete_post` | **write** | Delete a post |
| `ayrshare_post_comment` | **write** | Comment on a post |
| `ayrshare_delete_comment` | **write** | Delete a comment |
| `ayrshare_usage_status` | meta | Usage status (free-tier meter) |
| `ayrshare_request_feature` | meta | Request a missing feature |
| `ayrshare_upgrade` | meta | Upgrade to Pro or Pro+ |
| `ayrshare_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `ayrshare_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `ayrshare_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `ayrshare_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
