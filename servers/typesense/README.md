# Typesense MCP by usefulapi

Use your [Typesense](https://typesense.org) server from Claude, Cursor, or any MCP client. Search collections, read and write documents, and inspect schemas, synonyms, curations and aliases. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://typesense.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://typesense.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http typesense https://typesense.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=typesense&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftypesense.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "typesense": {
      "url": "https://typesense.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Typesense credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/typesense/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Typesense host name** (for example xyz-1.a1.typesense.net, without https or a port) and a **Typesense API key** that can list collections. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `typesense_get_health` | read | Check server health |
| `typesense_list_collections` | read | List collections |
| `typesense_get_collection` | read | Get a collection |
| `typesense_search` | read | Search documents |
| `typesense_multi_search` | read | Search several collections |
| `typesense_get_document` | read | Get a document |
| `typesense_list_synonym_sets` | read | List synonym sets |
| `typesense_get_synonym_set` | read | Get a synonym set |
| `typesense_list_curation_sets` | read | List curation sets |
| `typesense_list_aliases` | read | List aliases |
| `typesense_get_alias` | read | Get an alias |
| `typesense_list_analytics_rules` | read | List analytics rules |
| `typesense_create_collection` | **write** | Create a collection |
| `typesense_upsert_document` | **write** | Create or replace a document |
| `typesense_update_document` | **write** | Update fields of a document |
| `typesense_delete_document` | **write** | Delete a document |
| `typesense_usage_status` | meta | Usage status (free-tier meter) |
| `typesense_request_feature` | meta | Request a missing feature |
| `typesense_upgrade` | meta | Upgrade to Pro or Pro+ |
| `typesense_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `typesense_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `typesense_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `typesense_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
