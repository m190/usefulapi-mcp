# KnowledgeOwl MCP by usefulapi

Read and write your KnowledgeOwl knowledge base from Claude, Cursor, or any MCP client — browse and author articles, categories, snippets and glossary, and see reader search analytics.

**Live endpoint:** `https://knowledgeowl.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/knowledgeowl

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://knowledgeowl.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http knowledgeowl https://knowledgeowl.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=knowledgeowl&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fknowledgeowl.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "knowledgeowl": {
      "url": "https://knowledgeowl.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/knowledgeowl/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **KnowledgeOwl API key** — create one under Account → API keys. It's sent as HTTP Basic auth and runs against your account with your permissions.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `list_articles` | read | List articles |
| `get_article` | read | Get an article |
| `list_categories` | read | List categories |
| `get_category` | read | Get a category |
| `list_tags` | read | List tags |
| `list_snippets` | read | List snippets |
| `list_glossary_terms` | read | List glossary terms |
| `list_comments` | read | List comments |
| `list_readers` | read | List readers |
| `get_reader` | read | Get a reader |
| `list_files` | read | List files |
| `list_article_versions` | read | List article versions |
| `list_article_revisions` | read | List article revisions |
| `list_suggestions` | read | List search suggestions |
| `list_synonyms` | read | List synonyms |
| `list_webhooks` | read | List webhooks |
| `list_authors` | read | List authors |
| `knowledgeowl_request` | read | Raw read request |
| `create_article` | **write** | Create an article |
| `update_article` | **write** | Update an article |
| `create_category` | **write** | Create a category |
| `update_category` | **write** | Update a category |
| `create_snippet` | **write** | Create a snippet |
| `create_glossary_term` | **write** | Create a glossary term |
| `knowledgeowl_usage_status` | meta | Usage status (free-tier meter) |
| `knowledgeowl_upgrade` | meta | Upgrade to Pro (unlimited) |
| `knowledgeowl_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `knowledgeowl_upgrade` (it returns a Stripe Checkout link). Cancel any time with `knowledgeowl_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `knowledgeowl_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by KnowledgeOwl.
