# Bloomerang MCP by usefulapi

Use [Bloomerang](https://bloomerang.com) from Claude, Cursor, or any MCP client — search constituents, households, transactions, funds, campaigns and appeals, and create constituents, interactions, notes and tasks.
Hosted, no local install: connect with your own Bloomerang credentials.

**Live endpoint:** `https://bloomerang.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/bloomerang

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bloomerang.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bloomerang https://bloomerang.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bloomerang&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbloomerang.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bloomerang": {
      "url": "https://bloomerang.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Bloomerang credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bloomerang/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Bloomerang private API key** (an Administrator user generates it under Edit My User).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bloomerang_get_current_user` | read | Get the current user |
| `bloomerang_search_constituents` | read | Search constituents |
| `bloomerang_list_constituents` | read | List constituents |
| `bloomerang_get_constituent` | read | Get one constituent |
| `bloomerang_get_constituent_timeline` | read | Get a constituent's timeline |
| `bloomerang_list_constituent_relationships` | read | List a constituent's relationships |
| `bloomerang_get_household` | read | Get one household |
| `bloomerang_list_transactions` | read | List transactions (gifts) |
| `bloomerang_get_transaction` | read | Get one transaction |
| `bloomerang_list_funds` | read | List funds |
| `bloomerang_list_campaigns` | read | List campaigns |
| `bloomerang_list_appeals` | read | List appeals |
| `bloomerang_list_interactions` | read | List interactions |
| `bloomerang_list_notes` | read | List notes |
| `bloomerang_list_tasks` | read | List tasks |
| `bloomerang_create_constituent` | **write** | Create a constituent |
| `bloomerang_update_constituent` | **write** | Update a constituent |
| `bloomerang_create_interaction` | **write** | Log an interaction |
| `bloomerang_create_note` | **write** | Add a note |
| `bloomerang_create_task` | **write** | Create a task |
| `bloomerang_usage_status` | meta | Usage status (free-tier meter) |
| `bloomerang_upgrade` | meta | Upgrade to Pro (unlimited) |
| `bloomerang_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `bloomerang_upgrade` (it returns a Stripe Checkout link). Cancel any time with `bloomerang_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `bloomerang_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Bloomerang.
