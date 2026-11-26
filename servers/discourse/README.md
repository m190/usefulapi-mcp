# Discourse MCP by usefulapi

Use your [Discourse](https://www.discourse.org) account from Claude, Cursor, or any MCP client. Search and read topics, posts and notifications, and create topics, reply to topics and mark notifications read. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://discourse.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://discourse.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http discourse https://discourse.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=discourse&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdiscourse.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "discourse": {
      "url": "https://discourse.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Discourse credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/discourse/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **forum address** (the public https address, e.g. community.example.com), the **username** of the key owner, and an **API key** (your profile → Preferences → Security → API keys, or Admin → API). The server validates the key and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `discourse_search` | read | Search the forum |
| `discourse_list_latest_topics` | read | List latest topics |
| `discourse_list_top_topics` | read | List top topics |
| `discourse_get_topic` | read | Get a topic |
| `discourse_get_post` | read | Get a post |
| `discourse_list_categories` | read | List categories |
| `discourse_list_tags` | read | List tags |
| `discourse_get_user` | read | Get a user |
| `discourse_list_notifications` | read | List notifications |
| `discourse_list_private_messages` | read | List private messages |
| `discourse_get_site_info` | read | Get site info |
| `discourse_create_topic` | **write** | Create a topic |
| `discourse_reply_to_topic` | **write** | Reply to a topic |
| `discourse_mark_notifications_read` | **write** | Mark notifications read |
| `discourse_usage_status` | meta | Usage status (free-tier meter) |
| `discourse_request_feature` | meta | Request a missing feature |
| `discourse_upgrade` | meta | Upgrade to Pro or Pro+ |
| `discourse_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `discourse_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `discourse_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `discourse_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
