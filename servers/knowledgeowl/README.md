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

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your KnowledgeOwl credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/knowledgeowl/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **KnowledgeOwl API key** — create one under Account → API keys. It's sent as HTTP Basic auth and runs against your account with your permissions.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `knowledgeowl_list_articles` | read | List articles |
| `knowledgeowl_get_article` | read | Get an article |
| `knowledgeowl_list_categories` | read | List categories |
| `knowledgeowl_get_category` | read | Get a category |
| `knowledgeowl_list_tags` | read | List tags |
| `knowledgeowl_list_snippets` | read | List snippets |
| `knowledgeowl_list_glossary_terms` | read | List glossary terms |
| `knowledgeowl_list_comments` | read | List comments |
| `knowledgeowl_list_readers` | read | List readers |
| `knowledgeowl_get_reader` | read | Get a reader |
| `knowledgeowl_list_files` | read | List files |
| `knowledgeowl_list_article_versions` | read | List article versions |
| `knowledgeowl_list_article_revisions` | read | List article revisions |
| `knowledgeowl_list_suggestions` | read | List search suggestions |
| `knowledgeowl_list_synonyms` | read | List synonyms |
| `knowledgeowl_list_webhooks` | read | List webhooks |
| `knowledgeowl_list_authors` | read | List authors |
| `knowledgeowl_request` | read | Raw read request |
| `knowledgeowl_create_article` | **write** | Create an article |
| `knowledgeowl_update_article` | **write** | Update an article |
| `knowledgeowl_create_category` | **write** | Create a category |
| `knowledgeowl_update_category` | **write** | Update a category |
| `knowledgeowl_create_snippet` | **write** | Create a snippet |
| `knowledgeowl_create_glossary_term` | **write** | Create a glossary term |
| `knowledgeowl_usage_status` | meta | Usage status (free-tier meter) |
| `knowledgeowl_request_feature` | meta | Request a missing feature |
| `knowledgeowl_upgrade` | meta | Upgrade to Pro (unlimited) |
| `knowledgeowl_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `knowledgeowl_upgrade` (it returns a Stripe Checkout link). Cancel any time with `knowledgeowl_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `knowledgeowl_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by KnowledgeOwl.
