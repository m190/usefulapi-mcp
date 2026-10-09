# Castle MCP by usefulapi

Investigate security events and manage the allow/deny lists an analyst acts on. Hosted, no local install.

**Live endpoint:** `https://castle.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://castle.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http castle https://castle.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=castle&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcastle.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "castle": {
      "url": "https://castle.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Castle credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/castle/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Castle credentials**. They are validated,
stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `castle_get_events_schema` | read | Get the event schema |
| `castle_search_events` | read | Search security events |
| `castle_group_events` | read | Group security events |
| `castle_search_lists` | read | Search lists |
| `castle_get_list` | read | Get one list |
| `castle_search_list_items` | read | Search items in a list |
| `castle_count_list_items` | read | Count items in a list |
| `castle_get_list_item` | read | Get one list item |
| `castle_create_list` | **write** | Create a list |
| `castle_update_list` | **write** | Update a list |
| `castle_create_list_item` | **write** | Add an item to a list |
| `castle_update_list_item` | **write** | Update a list item's comment |
| `castle_archive_list_item` | **write** | Archive a list item |
| `castle_unarchive_list_item` | **write** | Unarchive a list item |
| `castle_usage_status` | meta | Usage status (free-tier meter) |
| `castle_upgrade` | meta | Upgrade to Pro (unlimited) |
| `castle_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `castle_upgrade` (it returns a Stripe Checkout link). Cancel any time with `castle_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `castle_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
