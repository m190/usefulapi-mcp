# Estuary Flow MCP by usefulapi

Inspect Estuary Flow captures, materializations, collections and stats. Hosted, no local install.

**Live endpoint:** `https://estuary-flow.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "estuary-flow": {
      "url": "https://estuary-flow.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Estuary Flow credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `estuary_list_catalog` | read | List catalog entities |
| `estuary_get_catalog_spec` | read | Get catalog spec |
| `estuary_get_catalog_stats` | read | Get catalog stats |
| `estuary_list_connectors` | read | List connectors |
| `estuary_list_connector_versions` | read | List connector versions |
| `estuary_list_drafts` | read | List drafts |
| `estuary_list_draft_specs` | read | List draft specs |
| `estuary_list_publications` | read | List publications |
| `estuary_list_discovers` | read | List discovers |
| `estuary_list_roles` | read | List roles |
| `estuary_get_tenant` | read | Get tenant |
| `estuary_view_task_logs` | read | View task logs |
| `estuary_create_draft` | **write** | Create draft |
| `estuary_upsert_draft_spec` | **write** | Upsert draft spec |
| `estuary_publish_draft` | **write** | Publish draft |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
