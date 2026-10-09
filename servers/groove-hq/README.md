# Groove MCP by usefulapi

Manage [Groove](https://www.groovehq.com) support conversations from Claude, Cursor, or any MCP client —
read shared-inbox conversations, contacts, agents, channels, tags, folders and teams, and close, open,
snooze, star, assign or tag conversations. Hosted, no local install: connect with your Groove API token.

**Live endpoint:** `https://groove-hq.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://groove-hq.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http groove-hq https://groove-hq.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=groove-hq&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgroove-hq.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "groove-hq": {
      "url": "https://groove-hq.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Groove credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/groove-hq/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Groove API token** (Groove → Settings → API).
It's validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `groove_list_conversations` | read | List conversations |
| `groove_get_conversation` | read | Get conversation |
| `groove_list_contacts` | read | List contacts |
| `groove_get_contact` | read | Get contact |
| `groove_list_agents` | read | List agents |
| `groove_list_channels` | read | List channels |
| `groove_list_tags` | read | List tags |
| `groove_list_folders` | read | List folders |
| `groove_list_teams` | read | List teams |
| `groove_close_conversation` | **write** | Close conversation |
| `groove_open_conversation` | **write** | Open conversation |
| `groove_snooze_conversation` | **write** | Snooze conversation |
| `groove_star_conversation` | **write** | Star conversation |
| `groove_assign_conversation` | **write** | Assign conversation |
| `groove_tag_conversation` | **write** | Tag conversation |
| `groove_untag_conversation` | **write** | Untag conversation |
| `groove_usage_status` | meta | Usage status (free-tier meter) |
| `groove_upgrade` | meta | Upgrade to Pro (unlimited) |
| `groove_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `groove_upgrade` (it returns a Stripe Checkout link). Cancel any time with `groove_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `groove_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
