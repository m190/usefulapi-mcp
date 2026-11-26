# Meilisearch MCP by usefulapi

Use your [Meilisearch](https://www.meilisearch.com) account from Claude, Cursor, or any MCP client. Search your Meilisearch indexes, read documents and indexing tasks, and add, update or delete documents. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://meilisearch.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://meilisearch.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http meilisearch https://meilisearch.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=meilisearch&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmeilisearch.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "meilisearch": {
      "url": "https://meilisearch.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Meilisearch credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/meilisearch/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Meilisearch host name** (the public name of your server, for example ms-xxxx.region.meilisearch.io, without https) and an **API key** that can list indexes. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `meilisearch_get_version` | read | Get server version |
| `meilisearch_list_indexes` | read | List indexes |
| `meilisearch_get_index` | read | Get an index |
| `meilisearch_get_index_stats` | read | Get index stats |
| `meilisearch_get_stats` | read | Get server stats |
| `meilisearch_get_settings` | read | Get index settings |
| `meilisearch_list_tasks` | read | List tasks |
| `meilisearch_get_task` | read | Get a task |
| `meilisearch_get_documents` | read | List documents |
| `meilisearch_get_document` | read | Get a document |
| `meilisearch_search` | read | Search an index |
| `meilisearch_multi_search` | read | Run several searches |
| `meilisearch_create_index` | **write** | Create an index |
| `meilisearch_upsert_documents` | **write** | Add or update documents |
| `meilisearch_delete_document` | **write** | Delete a document |
| `meilisearch_usage_status` | meta | Usage status (free-tier meter) |
| `meilisearch_request_feature` | meta | Request a missing feature |
| `meilisearch_upgrade` | meta | Upgrade to Pro or Pro+ |
| `meilisearch_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `meilisearch_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `meilisearch_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `meilisearch_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
