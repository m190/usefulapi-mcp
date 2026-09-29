# Kayako MCP by usefulapi

Use [Kayako](https://kayako.com) from Claude, Cursor, or any MCP client — browse cases and replies, look up customers and organizations, search the help center, and create, update or reply to cases.
Hosted, no local install: connect with your own Kayako credentials.

**Live endpoint:** `https://kayako.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/kayako

## Add to Claude

```json
{
  "mcpServers": {
    "kayako": {
      "url": "https://kayako.usefulapi.io/mcp"
    }
  }
}
```

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

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT © usefulapi. Not affiliated with or endorsed by Kayako.
