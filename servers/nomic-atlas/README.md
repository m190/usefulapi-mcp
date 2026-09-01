# Nomic Atlas MCP by usefulapi

Semantic nearest-neighbour search over your datasets, plus indices and projections. Hosted, no local install.

**Live endpoint:** `https://nomic-atlas.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "nomic-atlas": {
      "url": "https://nomic-atlas.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Nomic Atlas credentials**. They are validated,
stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `nomic_get_user` | read | Get the current user |
| `nomic_get_organization` | read | Get an organisation |
| `nomic_get_dataset` | read | Get a dataset by id |
| `nomic_get_dataset_by_slug` | read | Get a dataset by name |
| `nomic_nearest_neighbors_by_id` | read | Find similar records |
| `nomic_get_index_job` | read | Get an index job |
| `nomic_get_projection_schema` | read | Get a projection's schema |
| `nomic_list_tags` | read | List a projection's tags |
| `nomic_get_tag_status` | read | Get a tag's status |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
