# GitBook MCP by usefulapi

Use your [GitBook](https://www.gitbook.com) account from Claude, Cursor, or any MCP client — read spaces, collections, pages and content, search docs, and manage organization spaces. Hosted,
no local install: connect with your own credentials.

**Live endpoint:** `https://gitbook.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://gitbook.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http gitbook https://gitbook.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=gitbook&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgitbook.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "gitbook": {
      "url": "https://gitbook.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your GitBook credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/gitbook/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **GitBook API token** (Settings → Developer → API tokens). It is validated, stored per-user, and scoped to you — no
keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `gitbook_get_current_user` | read | Get current user |
| `gitbook_list_organizations` | read | List organizations |
| `gitbook_list_spaces` | read | List spaces |
| `gitbook_get_space` | read | Get space |
| `gitbook_list_pages` | read | List pages |
| `gitbook_get_page` | read | Get page |
| `gitbook_search_space` | read | Search space |
| `gitbook_search_organization` | read | Search organization |
| `gitbook_list_collections` | read | List collections |
| `gitbook_get_collection` | read | Get collection |
| `gitbook_list_change_requests` | read | List change requests |
| `gitbook_list_comments` | read | List comments |
| `gitbook_create_change_request` | **write** | Create change request |
| `gitbook_update_change_request` | **write** | Update change request |
| `gitbook_usage_status` | meta | Usage status (free-tier meter) |
| `gitbook_upgrade` | meta | Upgrade to Pro (unlimited) |
| `gitbook_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `gitbook_upgrade` (it returns a Stripe Checkout link). Cancel any time with `gitbook_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `gitbook_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
