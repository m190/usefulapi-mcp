# Plaky MCP by usefulapi

Use your [Plaky](https://plaky.com) account from Claude, Cursor, or any MCP client. Read boards and items, create items, set field values, and add comments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://plaky.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://plaky.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http plaky https://plaky.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=plaky&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fplaky.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "plaky": {
      "url": "https://plaky.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Plaky credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/plaky/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Plaky API key**, which you find or create under Preferences → Advanced → Manage API keys. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `plaky_get_current_user` | read | Get current user |
| `plaky_list_users` | read | List users |
| `plaky_list_teams` | read | List teams |
| `plaky_get_team` | read | Get a team |
| `plaky_list_spaces` | read | List spaces |
| `plaky_get_space` | read | Get a space |
| `plaky_list_boards` | read | List boards in a space |
| `plaky_get_board` | read | Get a board |
| `plaky_list_item_groups` | read | List item groups |
| `plaky_list_items` | read | List items on a board |
| `plaky_get_item` | read | Get an item |
| `plaky_list_subitems` | read | List subitems |
| `plaky_list_item_comments` | read | List item comments |
| `plaky_list_item_files` | read | List item files |
| `plaky_get_item_file_download_url` | read | Get a file download link |
| `plaky_create_item` | **write** | Create an item or subitem |
| `plaky_update_item_field` | **write** | Set one field value |
| `plaky_move_item_to_group` | **write** | Move an item to a group |
| `plaky_add_item_comment` | **write** | Add a comment |
| `plaky_set_comment_reactions` | **write** | Set your reactions on a comment |
| `plaky_usage_status` | meta | Usage status (free-tier meter) |
| `plaky_request_feature` | meta | Request a missing feature |
| `plaky_upgrade` | meta | Upgrade to Pro or Pro+ |
| `plaky_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `plaky_upgrade` (it returns a Stripe Checkout link). Cancel any time with `plaky_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `plaky_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
