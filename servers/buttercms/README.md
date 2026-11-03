# ButterCMS MCP by usefulapi

Use your [ButterCMS](https://buttercms.com) account from Claude, Cursor, or any MCP client. Read blog posts, authors, categories, tags, pages and collection items of a site. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://buttercms.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://buttercms.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http buttercms https://buttercms.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=buttercms&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbuttercms.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "buttercms": {
      "url": "https://buttercms.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ButterCMS credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/buttercms/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **ButterCMS Read API token** (ButterCMS dashboard → Settings → General → API Tokens). Each site has its own token. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `buttercms_list_posts` | read | List blog posts |
| `buttercms_get_post` | read | Get a blog post |
| `buttercms_search_posts` | read | Search blog posts |
| `buttercms_list_authors` | read | List authors |
| `buttercms_get_author` | read | Get an author |
| `buttercms_list_categories` | read | List categories |
| `buttercms_get_category` | read | Get a category |
| `buttercms_list_tags` | read | List tags |
| `buttercms_get_tag` | read | Get a tag |
| `buttercms_list_pages` | read | List pages |
| `buttercms_get_page` | read | Get a page |
| `buttercms_search_pages` | read | Search pages |
| `buttercms_get_collections` | read | Get collections by key |
| `buttercms_list_collection_items` | read | List collection items |
| `buttercms_get_collection_item` | read | Get a collection item |
| `buttercms_usage_status` | meta | Usage status (free-tier meter) |
| `buttercms_request_feature` | meta | Request a missing feature |
| `buttercms_upgrade` | meta | Upgrade to Pro or Pro+ |
| `buttercms_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `buttercms_upgrade` (it returns a Stripe Checkout link). Cancel any time with `buttercms_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `buttercms_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
