# Elasticsearch MCP by usefulapi

Use your [Elasticsearch](https://www.elastic.co) account from Claude, Cursor, or any MCP client. Check cluster health, explore indices and mappings, and search or count documents, with no write tools. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://elasticsearch.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://elasticsearch.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http elasticsearch https://elasticsearch.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=elasticsearch&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Felasticsearch.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "elasticsearch": {
      "url": "https://elasticsearch.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Elasticsearch credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/elasticsearch/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **cluster URL** (HTTPS) and an **encoded API key** (Stack Management → API keys in Kibana).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `elasticsearch_cluster_info` | read | Cluster info |
| `elasticsearch_cluster_health` | read | Cluster health |
| `elasticsearch_cluster_stats` | read | Cluster stats |
| `elasticsearch_list_nodes` | read | List nodes |
| `elasticsearch_list_indices` | read | List indices |
| `elasticsearch_get_index` | read | Get an index |
| `elasticsearch_get_mapping` | read | Get field mappings |
| `elasticsearch_list_aliases` | read | List aliases |
| `elasticsearch_list_data_streams` | read | List data streams |
| `elasticsearch_search` | read | Search documents |
| `elasticsearch_count` | read | Count documents |
| `elasticsearch_get_document` | read | Get a document |
| `elasticsearch_esql_query` | read | Run an ES|QL query |
| `elasticsearch_usage_status` | meta | Usage status (free-tier meter) |
| `elasticsearch_request_feature` | meta | Request a missing feature |
| `elasticsearch_upgrade` | meta | Upgrade to Pro or Pro+ |
| `elasticsearch_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `elasticsearch_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `elasticsearch_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `elasticsearch_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
