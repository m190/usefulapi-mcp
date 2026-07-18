# KnowledgeOwl MCP by usefulapi

Read and write your KnowledgeOwl knowledge base from Claude, Cursor, or any MCP client — browse and author articles, categories, snippets and glossary, and see reader search analytics.

**Live endpoint:** `https://knowledgeowl.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/knowledgeowl

## Add to Claude

```json
{
  "mcpServers": {
    "knowledgeowl": {
      "url": "https://knowledgeowl.usefulapi.io/mcp"
    }
  }
}
```

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

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT © usefulapi. Not affiliated with or endorsed by KnowledgeOwl.
