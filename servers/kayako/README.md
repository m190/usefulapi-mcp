# Kayako MCP by usefulapi

Use [Kayako](https://kayako.com) from Claude, Cursor, or any MCP client — browse cases and replies, look up customers and organizations, search the help center, and create, update or reply to cases.
Hosted, no local install: connect with your own Kayako credentials.

**Live endpoint:** `https://kayako.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/kayako

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://kayako.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http kayako https://kayako.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=kayako&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fkayako.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "kayako": {
      "url": "https://kayako.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/kayako/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Kayako instance name** (the part before .kayako.com) plus an **agent email and password**.
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `kayako_get_me` | read | Get the current user |
| `kayako_list_cases` | read | List cases |
| `kayako_get_case` | read | Get a case |
| `kayako_list_case_posts` | read | List a case's posts |
| `kayako_list_channels` | read | List reply channels |
| `kayako_list_case_options` | read | List case statuses, priorities or types |
| `kayako_search` | read | Search cases, users and organizations |
| `kayako_list_users` | read | List users |
| `kayako_get_user` | read | Get a user |
| `kayako_list_organizations` | read | List organizations |
| `kayako_list_organization_cases` | read | List an organization's cases |
| `kayako_list_teams` | read | List teams |
| `kayako_list_roles` | read | List roles |
| `kayako_list_articles` | read | List help-center articles |
| `kayako_get_article` | read | Get a help-center article |
| `kayako_search_help_center` | read | Search the help center |
| `kayako_create_case` | **write** | Create a case |
| `kayako_update_case` | **write** | Update a case |
| `kayako_reply_to_case` | **write** | Reply to a case or add an internal note |
| `kayako_add_case_tags` | **write** | Add tags to a case |
| `kayako_create_user` | **write** | Create a user |
| `kayako_usage_status` | meta | Usage status (free-tier meter) |
| `kayako_upgrade` | meta | Upgrade to Pro (unlimited) |
| `kayako_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `kayako_upgrade` (it returns a Stripe Checkout link). Cancel any time with `kayako_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `kayako_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Kayako.
