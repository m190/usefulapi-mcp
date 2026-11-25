# HelpDocs MCP by usefulapi

Use your [HelpDocs](https://helpdocs.io) account from Claude, Cursor, or any MCP client. Search and read articles and reader statistics, and create, update and publish article drafts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://helpdocs.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://helpdocs.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http helpdocs https://helpdocs.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=helpdocs&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhelpdocs.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "helpdocs": {
      "url": "https://helpdocs.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your HelpDocs credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/helpdocs/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **HelpDocs API key** (Settings → API; read permission, plus write permission for drafts and publishing). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `helpdocs_list_articles` | read | List articles |
| `helpdocs_get_article` | read | Get an article |
| `helpdocs_list_article_versions` | read | List article versions |
| `helpdocs_list_tags` | read | List article tags |
| `helpdocs_search_articles` | read | Search articles |
| `helpdocs_list_categories` | read | List categories |
| `helpdocs_get_category` | read | Get a category |
| `helpdocs_list_languages` | read | List languages |
| `helpdocs_list_permission_groups` | read | List permission groups |
| `helpdocs_list_variables` | read | List variables |
| `helpdocs_list_clips` | read | List clips |
| `helpdocs_get_top_articles` | read | Get most-viewed articles |
| `helpdocs_get_search_terms` | read | Get reader search terms |
| `helpdocs_create_article` | **write** | Create an article draft |
| `helpdocs_update_article` | **write** | Update an article draft |
| `helpdocs_publish_article` | **write** | Publish an article |
| `helpdocs_usage_status` | meta | Usage status (free-tier meter) |
| `helpdocs_request_feature` | meta | Request a missing feature |
| `helpdocs_upgrade` | meta | Upgrade to Pro or Pro+ |
| `helpdocs_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `helpdocs_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `helpdocs_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `helpdocs_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
